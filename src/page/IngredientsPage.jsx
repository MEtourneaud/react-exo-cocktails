import { useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function IngredientsPage() {

    // useState permet de stocker dans une variable et donner par défaut la valeur "null" et l'utilisera au premier chargement du composant
    // Aux chargements suivants, il prendra la valeur stocké dans le composant
    const [ingredients, setIngredients] = useState(null)


    // useEffect permet d'exécuter du code uniquement à certains
    // chargements du composant (soit le premier, soit à chaque fois etc)
    // Ici on place un tableau vide en deuxième paramètre de use effect
    // pour executer la fonction une seule fois au premier chargement du composant
    useEffect (() => {
        // Fonction anonyme (pas de nom) qui s'auto-invoque
        // Cela permet d'effectuer des opérations asynchrones (fetch) sans devoir créer une fonction asynchrone (qu'on devrait appeler avec un await)
        (async () => {
            // Le premier "await" permet d'attendre jusqu'à avoir récupéré les données de l'API
            const ingredientsResponse = await fetch ( "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
            // Une fois les données récupérées, le second "await" permet d'afficher ces données json en js
            const ingredientsInJs = await ingredientsResponse.json()
            setIngredients(ingredientsInJs.drinks)
        })()
    }, [])

    return(
        <>
            <Header />
            <h3>Liste des ingrédients</h3>
            {ingredients ? (
                <div>
                    {ingredients.map((ingredient) => {
                        return(
                            <article>
                                <p>{ingredient.strIngredient1}</p>
                            </article>
                        )
                    })}
                </div>
            ) : (
                <p>Ingrédients en préparation</p>
            )}
            <Footer />
        </>
    )
}

export default IngredientsPage