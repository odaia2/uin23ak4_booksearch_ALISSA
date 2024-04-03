import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookPage() {
    const { id } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`https://openlibrary.org/search.json?q=${id}&limit=1`)
          .then(response => response.json())
          .then(data => {
            setBooks(data.docs);
          })
          .catch(error => {
            console.log(error);
          });
      }, [id]);
    

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            {books.map(book => (
                <article key={book.key} className="bg-white shadow-md rounded-lg p-6 mb-4">
                    <h4 className="text-2xl font-bold mb-2">{book.title}</h4>
                    <p className="text-gray-700">Forfatter(e): {book.author_name}</p>
                    <p className="text-gray-700">Første publiseringsår: {book.first_publish_year}</p>
                    <img src={`https://covers.openlibrary.org/a/olid/${book.key}-M.jpg`} alt={book.title} className="mt-4 w-full" />
                </article>
            ))}
        </div>
    );
}
