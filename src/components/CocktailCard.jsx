import { Link } from "react-router-dom"

function CocktailCard({ cocktailToDisplay }) {
  // Je déclare une fonction avec un event listener avec comme paramètre "event" (obligatoire) et l'id du cocktail ciblé
  const handleDeleteCocktail = async (event, id) => {
    // Je fais un appel fetch, sur une url existante avec l'id du cocktail à supprimer,
    // avec la method "DELETE" afin de supprimer tout ce qui est en lien avec l'id du cocktail ciblé.
    const cocktailResponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/fake-delete.php?s=` + id,
      {
        method: `DELETE`,
      }
    )
  }

  return (
    <article>
      <h3>{cocktailToDisplay.strDrink}</h3>
      <img src={cocktailToDisplay.strDrinkThumb} alt={cocktailToDisplay.strDrink} />
      <Link to={`/cocktails/details/${cocktailToDisplay.idDrink}`}>Plus de détails</Link>
      {/* Je crée un bouton avec un event listener
      Par défaut un event listener a pour paramètre "event"
      Je dois utiliser une fonction fléchée qui appelle ma fonction afin de pouvoir lui ajouter un autre paramètre (l'id du cocktail ciblé) */}
      <button onClick={(event) => handleDeleteCocktail(event, cocktailToDisplay.idDrink)}>
        Supprimer le cocktail
      </button>
    </article>
  )
}

export default CocktailCard
