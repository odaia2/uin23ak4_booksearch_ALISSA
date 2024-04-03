import React, { useState, useEffect } from "react";
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
        <div>
            {books.map(book => (
                <article key={book.key} className="bookPage">
                    {book.cover_i && (
                        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title} />
                    )}
                    <h4>{book.title}</h4>
                    <p>Forfatter(e): {book.author_name}</p>
                    <p>Første publiseringsår: {book.first_publish_year}</p>
                    <p>Rating: {book.ratings_average}</p>
                    
                </article>
            ))}
        </div>
    );
}
