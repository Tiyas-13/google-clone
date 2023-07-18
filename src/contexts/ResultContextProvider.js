import React, { createContext, useContext, useState } from 'react';
import secrets from '../secrets.json';

const resultContext = createContext(undefined);
const baseUrl = "https://google-search72.p.rapidapi.com";


export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': secrets["X-RapidAPI-Key"],
                'X-RapidAPI-Host': secrets["X-RapidAPI-Host"]
            }
        })
        const data = await response.json();
        console.log(data);
        setResults(data);
        setIsLoading(false);
    }

    return (
        <resultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </resultContext.Provider>
    )
}

export const UseResultContext = () => useContext(resultContext)

