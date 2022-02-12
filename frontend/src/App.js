import "./App.css";
import RecipeCreationMenu from "./components/RecipeCreationMenu.jsx";
import Test from "./components/test.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import IngredientsList from "./components/IngredientsList.jsx";
import Recipe from "./components/Recipe.jsx";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeCreationMenu />} />
          <Route path="/test" element={<Test />} />
          <Route path="/IngredientsList" element={<IngredientsList />} />
          <Route path="/Recipes" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
