import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

function CategoriesPage() {

    const [categories, setCategories] = useState(null)

    useEffect (() =>{
        (async () => {
            const categoriesResponse = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
            const categoriesInJs = await categoriesResponse.json()
            setCategories(categoriesInJs.drinks)
        })()
    }, [])

    return(
        <>
            <Header />
            {categories ? (
                <>
                    {categories.map((category) => {
                        return (
                            <h2>{category.strCategory}</h2>
                        )
                    })}
                </>
            ) : (
                <p>En attente des catégories</p>
            )}
            <Footer />
        </>
    )
}

export default CategoriesPage