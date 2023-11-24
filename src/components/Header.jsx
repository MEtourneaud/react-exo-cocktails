import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/cocktails">Cocktails</Link></li>
            </ul>
        </header>
    )
}

export default Header