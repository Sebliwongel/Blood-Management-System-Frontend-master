/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

function SearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Define the routes you want to search for
        const routes = [
            'Dashboard',
            'Register',
            'hh',
            'registerindivual',
            'Nextindivual',
            'email',
            'signin',
            'Donate',
            'Formin',
            'ForminNext',
            'cityF',
            'citynex',
            'citylast',
            'regsterorganation',
            'Rigesterorg',
            'regsterstaff'
        ];

        // Check if the entered query matches any route
        const matchedRoute = routes.find(route => route.toLowerCase() === query.toLowerCase());

        if (matchedRoute) {
            navigate(matchedRoute); // Navigate to the matched route
        } else {
            alert('search not found.'); // Optional: Notify user if no match is found
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative">
            <input
                className="bg-red-100 border border-black rounded-full pl-10 py-2 w-60 focus:outline-none"
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <CiSearch
                size={25}
                className="absolute right-4 top-2.5 hover:bg-red-200 text-black cursor-pointer"
                onClick={handleSearch} // Optional: Allow clicking the icon to trigger search
            />
        </form>
    );
}

export default SearchBar;