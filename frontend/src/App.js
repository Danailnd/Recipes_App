import "./App.css";
import RecipeCreationMenu from "./components/RecipeCreationMenu.jsx";
import Test from "./components/test.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import IngredientsList from "./components/IngredientsList.jsx";
import Recipe from "./components/Recipe.jsx";
import CreateNewIngredient from "./components/addIngredient.jsx";
import Fridge from "./components/fridge.jsx";
import TestDBGraphQL from "./components/testGraphQL.jsx";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <>
      <ApolloProvider client >
        <NavigationBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RecipeCreationMenu />} />
            <Route path="/test" element={<Test />} />
            <Route path="/IngredientsList" element={<IngredientsList />} />
            <Route path="/Recipes" element={<Recipe />} />
            <Route path="/addIngredient" element={<CreateNewIngredient />} />
            <Route path="/fridge" element={<Fridge />} />
            <Route path="/testGraphQL" element={<TestDBGraphQL />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
