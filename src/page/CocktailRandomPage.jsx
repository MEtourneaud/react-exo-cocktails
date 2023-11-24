import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

function CocktailRandomPage() {

    // useState permet de stocker dans une variable et donner par défaut la valeur "null" et l'utilisera au premier chargement du composant
    // Aux chargements suivants, il prendra la valeur stocké dans le composant
    const [randomCocktail, setRandomCocktails] = useState(null)
    
    


    
    // useEffect permet d'exécuter du code uniquement à certains
    // chargements du composant (soit le premier, soit à chaque fois etc)
    // Ici on place un tableau vide en deuxième paramètre de use effect
    // pour executer la fonction une seule fois au premier chargement du composant
    useEffect(() => {
        // Fonction anonyme (pas de nom) qui s'auto-invoque
        // Cela permet d'effectuer des opérations asynchrones (fetch) sans devoir créer une fonction asynchrone (qu'on devrait appeler avec un await)
        (async () => {
            // Le premier "await" permet d'attendre jusqu'à avoir récupéré les données de l'API
            const cocktailRandomResponse = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            // Une fois les données récupérées, le second "await" permet d'afficher ces données json en js
            const cocktailRandomInJs = await cocktailRandomResponse.json()
            setRandomCocktails(cocktailRandomInJs.drinks[0])
        })()
    }, [])
    

    return(
        <>
            <Header />
            {/* Ici je fais en sorte qu'un affichage ait lieu même si les données ne sont pas prêtes à être affichées */}
            {randomCocktail ? (
                <article>
                    <h3>{randomCocktail.strDrink}</h3>
                    <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
                </article>
            ) : (
                <div>
                    <p>Cocktail en cours de préparation</p>
                </div>
            )}
            <Footer />
        </>
    )
}

export default CocktailRandomPage