import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    const themeToggleText = darkTheme ? 'Light ⭐' : 'Dark 🌙';

    const handleThemeToggle = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <div
            className={`p-4 ${
                darkTheme ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white'
            } shadow-lg transition-all duration-300`}
        >
            <div className="flex justify-between items-center container mx-auto">
                <Link to="/">
                    <p className="text-3xl font-bold text-white">
                        Google-Clone <span role="img" aria-label="Search icon">🔎</span>
                    </p>
                </Link>
                <div className="flex items-center space-x-3">
                    <Search />
                    <button
                        type="button"
                        onClick={handleThemeToggle}
                        className={`text-xl font-semibold bg-white text-gray-800 dark:bg-gray-800 ${
                            darkTheme ? 'dark:text-white' : ''
                        } rounded-full px-4 py-2 shadow-lg hover:shadow-md focus:outline-none transition-all duration-300`}
                    >
                        {themeToggleText}
                    </button>
                </div>
            </div>
        </div>
    );
};