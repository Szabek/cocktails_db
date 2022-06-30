import React, {createContext, useState, useContext, useEffect, useCallback} from 'react';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [comments, setComments] = useState([]);

    const fetchDrinks = useCallback( async () => {
        fetch("http://localhost:8000/cocktails")
            .then(res => res.json())
            .then(data => {
                setCocktails(data);
                setLoading(false);
                if (searchTerm != '') {
                    let newCocktailsList = cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchTerm))
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
    
    return <AppContext.Provider
        value={{
            loading,
            searchTerm,
            cocktails,
            setSearchTerm,
            getCommentsByID,
            saveComments
        }}>{children}
    </AppContext.Provider>
}
// make sure use

