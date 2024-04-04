import React, { useState } from "react";

export default function Search({ setSearch, getBooks }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.length >= 3) {
            setSearch(searchTerm);
            getBooks();
        }
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="search" 
                    placeholder="SearchBook.." 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    className="search-input" 
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    )
}
