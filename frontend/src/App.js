import "./App.css";
import RecipeCreationMenu from "./components/RecipeCreationMenu.jsx";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeCreationMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
