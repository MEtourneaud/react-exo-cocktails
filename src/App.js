import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage"
import CocktailsPage from "./page/CocktailsPage"
import CocktailRandomPage from "./page/CocktailRandomPage"
import CategoriesPage from "./page/CategoriesPage"
import IngredientsPage from "./page/IngredientsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<CocktailsPage />} />
        <Route path="/random" element={<CocktailRandomPage />} />
        <Route path="/category" element={<CategoriesPage />} />
        <Route path="/ingredient" element={<IngredientsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
