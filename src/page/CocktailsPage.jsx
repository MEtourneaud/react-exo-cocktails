import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

function CocktailsPage() {

        // useState permet de stocker dans une variable et donner par défaut la valeur "null" et l'utilisera au premier chargement du composant
        // Aux chargements suivants, il prendra la valeur stocké dans le composant
        const [cocktails, setCocktails] = useState(null)



        // useEffect permet d'exécuter du code uniquement à certains
        // chargements du composant (soit le premier, soit à chaque fois etc)
        // Ici on place un tableau vide en deuxième paramètre de use effect
        // pour executer la fonction une seule fois au premier chargement du composant
        useEffect (() => {
            // Fonction anonyme (pas de nom) qui s'auto-invoque (plus moderne)
            // Cela permet d'effectuer des opérations asynchrones (fetch) sans devoir créer une fonction asynchrone (qu'on devrait appeler avec un await)
            (async () => {
                // Le premier "await" permet d'attendre jusqu'à avoir récupéré les données de l'API
                const cocktailsResponse = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
                // Une fois les données récupérées, le second "await" permet d'afficher ces données json en js
                const cocktailsInJs = await cocktailsResponse.json()
                setCocktails(cocktailsInJs.drinks)
            })()
        }, [])
        
    
    return(
        <>
            <Header />
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