import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

function CocktailsPage() {

    // useState permet de stocker dans une variable et donner par défaut la valeur "null" et l'utilisera au premier chargement du composant
    // Aux chargements suivants, il prendra la valeur stocké dans le composant
    const [cocktails, setCocktails] = useState(null)

    // La boucle if permet de faire en sorte que le composant ne se recharge pas constamment
    // Une fois que des données sont détectées, le rechargement ne s'effectue pas
    if (!cocktails) {
        // Ici grâce au fetch je peux récupérer, de manière asynchrone, les données de l'API
        fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
        // Le premier "then" permet d'attendre jusqu'à avoir récupéré les données
        .then((cocktailsResponse) => {
            return cocktailsResponse.json()
        })
        // Une fois qu'elles sont récupérées le second "then" permet d'afficher ces données en json dans un console log
        .then((cocktailsInJs) => {
            // console.log(cocktailsInJs);
            // On rajoute le .drinks pour récupérer la clé de l'API
            setCocktails(cocktailsInJs.drinks);
    })}
    
    return(
        <>
            <Header currentPage={"CocktailPage"}/>
            {/* Ici je fais en sorte qu'un affichage ait lieu même si les données ne sont pas prêtes à être affichées */}
            {cocktails ? (
                <>
                {/* On parcourt le tableau "cocktails" afin de récupérer chaque élément du tableau et d'afficher le leur nom */}
                    {cocktails.map((cocktail) => {
                        return (
                            <article>
                                <h3>{cocktail.strDrink}</h3>
                                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                            </article>
                        )
                    })}
                </>
            ) : (
                <div>
                    <p>Cocktails en cours de préparation</p>
                </div>
            )}
            <Footer />
        </>
    )
}

export default CocktailsPage