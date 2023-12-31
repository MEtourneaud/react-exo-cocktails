import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <h1>Les Cocktails !!</h1>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/cocktails">Cocktails</Link></li>
                <li><Link to="/random">Cocktail au hasard</Link></li>
                <li><Link to="/category">Categorie</Link></li>
                <li><Link to="/ingredient">Ingrédient</Link></li>
            </ul>
        </header>
    )
}

export default Header