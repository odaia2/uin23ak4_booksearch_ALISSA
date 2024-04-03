import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SearchResult from './components/SearchResult';
import BookPage from './components/BookPage';
import { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('James Bond');
  const [error, setError] = useState(false);

  const getBooks = async () => {
    fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=21`)
      .then(response => response.json())
      .then(data => {
        setBooks(data.docs);
        setError(false);
        console.log(data)
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  }

  useEffect(() => {
    getBooks();
  }, [searchTerm]);

  return (
    <Layout setSearchTerm={searchTerm}>
      <Routes>
        <Route index element={<SearchResult error={error} search={searchTerm} books={books} setSearch={setSearchTerm} getBooks={getBooks} />} />
        <Route path='/book/:id' element={<BookPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
