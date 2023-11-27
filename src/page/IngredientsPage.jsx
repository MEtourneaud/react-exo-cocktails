import { useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function IngredientsPage() {

    const [ingredients, setIngredients] = useState(null)

    useEffect (() => {
        (async () => {
            const ingredientsResponse = await fetch ( "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
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