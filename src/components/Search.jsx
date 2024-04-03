import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="SearchField.." value={searchTerm} onChange={handleSearchChange} />
            <button type="submit">Search</button>
        </form>
    )
}
