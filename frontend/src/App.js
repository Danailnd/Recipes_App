import "./App.css";
import RecipeCreationMenu from "./components/RecipeCreationMenu.jsx";
import Test from "./components/test.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeCreationMenu />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
