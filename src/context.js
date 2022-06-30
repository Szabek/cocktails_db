import React, {createContext, useState, useContext, useEffect} from 'react';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/cocktails")
            .then(res => res.json())
            .then(data => {
                setCocktails(data);
                setLoading(false);
            })
    }, []);
    
    console.log(cocktails)

    useEffect(() => {
        fetch("http://localhost:8000/comments")
            .then(res => res.json())
            .then(data => {
                setComments(data);
            })
    }, []);
    
    return <AppContext.Provider
        value={{
            loading,
            searchTerm,
            cocktails,
            setSearchTerm,
        }}>{children}
    </AppContext.Provider>
}
// make sure use

