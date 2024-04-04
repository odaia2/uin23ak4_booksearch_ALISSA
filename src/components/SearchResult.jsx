import React from 'react';
import BookCard from './BookCard';
import Search from './Search';

const SearchResult = ({ error, search, books, setSearch, getBooks }) => {
  const noResults = search && books.length === 0 && !error;
  const searchMessage = noResults ? `No books found for "${search}".` : `Showing ${books.length} results for "${search}".`;

  return (
    <>
      <Search search={search} setSearch={setSearch} getBooks={getBooks} />
      
      <p>{searchMessage}</p>

      <section className='book-view'>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          books.map((book, index) => (
            <BookCard key={index} id={book.cover_edition_key} cover={book.cover_i} title={book.title} author_name={book.author_name} first_publish_year={book.first_publish_year} slug={book.title.replace(/\s/g, "-").toLowerCase()} />
          ))
        )}
      </section>
    </>
  );
};

export default SearchResult;
