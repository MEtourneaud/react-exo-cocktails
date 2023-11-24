import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <h1>Les Cocktails !!</h1>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/cocktails">Cocktails</Link></li>
            </ul>
        </header>
    )
}

export default Header