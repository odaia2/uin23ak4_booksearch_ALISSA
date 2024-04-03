// SearchResult.jsx
import React from 'react';
import BookCard from './BookCard';
import Search from './Search';


export default function SearchResult({ error, search, books, setSearch, getBooks }) {
    return (
        <>
            <Search search={search} setSearch={setSearch} getBooks={getBooks} />

            <section className='book-view'>
                {error ? (
                    <p>Finner ikke boken</p>
                ) : books.length > 0 ? (
                    books.map((book, index) => (
                        <BookCard key={index} id={book.cover_edition_key} cover={book.cover_i} title={book.title} author_name={book.author_name} first_publish_year={book.first_publish_year} slug={book.title.replace(/\s/g, "-").toLowerCase()} />
                    ))
                ) : (
                    <p>Ingen bøker ble funnet.</p>
                )}
            </section>
        </>
    );
}
