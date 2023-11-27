import { Link } from "react-router-dom"

function CocktailCard({ cocktailToDisplay }) {
  return (
    <article>
      <h3>{cocktailToDisplay.strDrink}</h3>
      <img src={cocktailToDisplay.strDrinkThumb} alt={cocktailToDisplay.strDrink} />
      <Link to={`/cocktails/details/${cocktailToDisplay.idDrink}`}>Plus de détails</Link>
    </article>
  )
}

export default CocktailCard
