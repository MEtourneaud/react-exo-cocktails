import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function CocktailDetailsPage() {

    const { cocktailId } = useParams()    
    const [details, setDetails] = useState(null)

    useEffect (() => {
        (async () => {
            const detailsResponse = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
            const detailsInJs = await detailsResponse.json()
            setDetails(detailsInJs.drinks[0])
        })()
    }, [])

    return(
        <>
            <Header />
            {details ? (
                <article>
                    <h3>{details.strDrink}</h3>
                    <img src={details.strDrinkThumb} alt={details.strDrink} />
                    <p>{details.strInstructions}</p>
                </article>
            ) : (
                <p>Oups ça marche plus !</p>
            )}
            <Footer />
        </>
    )
}

export default CocktailDetailsPage