import { Link, Outlet } from "react-router-dom";

export default function Layout({ children}) {

    
    return (
        <div id="container">
            <header>
                <Link to="/">
                    <h1 className="bokArkiv">Book Search </h1>
                </Link>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h3>Bøker</h3>
            </footer>
        </div>
    )
}


