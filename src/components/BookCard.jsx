import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ id, cover, title, author_name, first_publish_year}) {

    const coverUrl = `https://covers.openlibrary.org/b/id/${cover}-L.jpg`;

    return (
        <article className="book-card">
            <img className="img-cover" src={coverUrl}></img> 
            <h4>{title}</h4>
            <p>Forfatter(e): {author_name}</p>
            <p>Første publiseringsår: {first_publish_year}</p>
            <Link className="button" to={`/book/${id}`}>Les mer</Link>
        </article>
    );
}
