import "./main.css";
import React from "react";
import { Button } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export default function Recipe() {
  function createRecipeCard(title, image, ingredients, whereTo) {
    return (
      <div className="recipeListPage">
        <Card sx={{ bgcolor: "#e9e2fd" }} className="card" elevation={4}>
          <CardHeader title={title}></CardHeader>
          <CardMedia
            component="img"
            image={image}
            height="300px"
            width="auto"
            alt="An image of the desired recipe result."
          />
          <CardContent>Ingredients: </CardContent>
          {ingredients.map((value) => {
            return (
              <span className="mySpan">
                <Chip label={value} variant="standard" />
              </span>
            );
          })}
          <CardActions>
            <Button
              className="button"
              style={{ background: "#a29bb6", color: "aliceblue" }}
              href={whereTo}
            >
              Go To Recipe
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
  return (
    <span className="recipeListPage">
      <span>
        {" "}
        {createRecipeCard(
          "Cupcakes",
          "https://prettysimplesweet.com/wp-content/uploads/2020/07/funfetti-cupcakes-recipe.jpg",
          ["love", "patience", "sugar"],
          "#"
        )}
      </span>
      <span>
        {" "}
        {createRecipeCard(
          "Pasta Puttanesca",
          "https://www.twopeasandtheirpod.com/wp-content/uploads/2019/05/Pasta-Primavera-3.jpg",
          ["tomato", "spaghetti", "basil"],
          "#"
        )}
      </span>
      <span>
        {" "}
        {createRecipeCard(
          "Chocolate Pancakes",
          "https://www.delscookingtwist.com/wp-content/uploads/2021/07/Perfect-Chocolate-Pancakes_1.jpg",
          ["chocolate", "sugar", "flour", "eggs"],
          "#"
        )}
      </span>
      <span>
        {" "}
        {createRecipeCard(
          "Coffee",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIEbRh0tn9_1qLMjfQIIwEV0kdfPzwvvViA&usqp=CAU",
          ["sugar", "coffee", "milk", "water"],
          "#"
        )}
      </span>
      <span>
        {" "}
        {createRecipeCard(
          "Bacon Salad",
          "https://www.cookingclassy.com/wp-content/uploads/2019/11/best-salad-7.jpg",
          ["bacon", "lettuce", "croutons"],
          "#"
        )}
      </span>
      <span>
        {" "}
        {createRecipeCard(
          "Bacon Salad",
          "https://www.cookingclassy.com/wp-content/uploads/2019/11/best-salad-7.jpg",
          ["bacon", "lettuce", "croutons"],
          "#"
        )}
      </span>
    </span>
  );
}
