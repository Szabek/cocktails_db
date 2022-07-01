import React, {createContext, useState, useContext, useEffect, useCallback} from 'react';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [comments, setComments] = useState([]);
    const [adminRole, setAdminRole] = useState(false);

    const fetchDrinks = useCallback( async () => {
        fetch("http://localhost:8000/cocktails")
            .then(res => res.json())
            .then(data => {
                setCocktails(data);
                setLoading(false);
                if (searchTerm != '') {
                    let newCocktailsList = cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    setCocktails(newCocktailsList);
                }
            })
    },[searchTerm])
    useEffect(() => {
        fetchDrinks()
    }, [searchTerm,fetchDrinks])

    useEffect(() => {
        fetch("http://localhost:8000/comments")
            .then(res => res.json())
            .then(data => {
                setComments(data);
            })
    }, []);
    
    const getCommentsByID = (id) => {
        return comments.filter((comment) => comment.id_coctail === id);
    }
    
    const getCocktailById = id => {
        return cocktails.find((cocktail) => cocktail.id === id);
    }

    const saveComments = (idCoctail, author, message ) => {
        let currentDate = new Date().toISOString().slice(0, 10)
        const commentToSend = {id:'' ,id_coctail: idCoctail,author: author, date:currentDate, message: message,  };
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(commentToSend)
        };
        
        fetch("http://localhost:8000/comments", requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log(response.statusText)
                }
            })
            .then(data => {
                if (data) {
                    setComments(data)
                    window.location.reload();
                } else {
                    console.log("SERVER ERROR - saveComment()");
                }
            })
    }

    const rateCocktail = (id, ratings) => {
        let cocktailToEdit = getCocktailById(parseInt(id));
        let currentRatings = cocktailToEdit.ratings;
        currentRatings.push(parseInt(ratings));
        const rateToSend = {
            id:id,
            name:cocktailToEdit.name,
            type:cocktailToEdit.type,
            img:cocktailToEdit.img,
            glass:cocktailToEdit.glass,
            description:cocktailToEdit.description,
            ingredients:cocktailToEdit.ingredients,
            instructions:cocktailToEdit.instructions,
            ratings:currentRatings,
        };
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(rateToSend)
        };
        fetch('http://localhost:8000/cocktails/' + id, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log(response.statusText)
                }
            })
            .then(data => {
                if (data) {
                    window.location.reload();
                } else {
                    console.log("SERVER ERROR - rateCoctail()");
                }
            })
    }
    
    const getAlcoholChartInfo = () => {
        let alcoholic = 0;
        let nonAlcoholic = 0;
        
        cocktails.forEach((e) => {
            if (e.type == 'alcoholic') {
                alcoholic++;
            }else {
                nonAlcoholic++
            }
        })
        return({
            "alcoholic": alcoholic,
            "nonAlcoholic": nonAlcoholic
        })
    }

    const getGlassChartInfo = () => {
        let info = {}

        cocktails.forEach((e) => {
            let currentGlass = e.glass;
            if (!info[currentGlass]) {
                info[currentGlass] = 1
            }else {
                let value = parseInt(info[currentGlass])
                value++;
                info[currentGlass] = value
            }
        })
        return(info)
    }
    
    return <AppContext.Provider
        value={{
            loading,
            searchTerm,
            cocktails,
            setSearchTerm,
            adminRole,
            setAdminRole,
            getCommentsByID,
            getCocktailById,
            saveComments,
            rateCocktail,
            getAlcoholChartInfo,
            getGlassChartInfo
        }}>{children}
    </AppContext.Provider>
}

