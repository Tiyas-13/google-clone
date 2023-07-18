import React, { useEffect} from 'react';
import { useLocation } from "react-router-dom";

import { UseResultContext } from '../contexts/ResultContextProvider';

import { Loading } from "./Loading";

export const Results = () => {

    const {getResults, results, searchTerm, isLoading} = UseResultContext();
    const location = useLocation();
    useEffect(() => {
        if(searchTerm!=="" && searchTerm !== ''){
            if(location.pathname === "/search"){
                getResults(`/search?q=${searchTerm}&num=20`)
            }
            else if(location.pathname === "/images"){
                getResults(`/imagesearch?q=${searchTerm}&num=20`)
            }
        }
    }, [searchTerm, location.pathname])

    if(isLoading) return <Loading />;

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.items && Array.isArray(results.items) ? (
                        results.items.map(({ link, title }, index) => (
                            <div key={index} className="md:w-2/5 w-full">
                                <a href={link} target="_blank" rel="noreferrer">
                                    <p className="text-sm">
                                        {link && link.length > 30 ? link.substring(0, 30) : link}
                                    </p>
                                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                        {title}
                                    </p>
                                </a>
                            </div>
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}
                </div>
            )
        case '/images':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.items?.map(({ title, originalImageUrl, contextLink }, index ) => (
                        <a className="sm:p-3 p-5" href={contextLink} key={index} target="_blank" rel="noreferrer">
                            <img src={originalImageUrl} alt={title} loading="lazy" />
                            <p className="w-36 break-words text-sm mt-2">{title}</p>
                        </a>
                    ))}
                </div>
            )
        default:
            return 'ERROR';
    }
}