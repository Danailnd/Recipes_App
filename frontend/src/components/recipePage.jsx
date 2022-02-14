import "./main.css";
import React, { useState, useRef, useEffect } from "react";
import IngredientsList from "./IngredientsList";
import { Button } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import CakeIcon from "@mui/icons-material/Cake";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

export default function Recipe() {
  var title = "Cupcakes";
  var image =
    "https://prettysimplesweet.com/wp-content/uploads/2020/07/funfetti-cupcakes-recipe.jpg";
  var ingredients = ["love", "patience", "sugar"];
  var character = ["tasty", "perfect", "easy", "food", "vegan"];
  var whereTo = "#";
  return (
    <div className="Hi">
      <Card className="paper" elevation={4}>
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
        <CardContent>Characteristics: </CardContent>
        {character.map((value) => {
          return (
            <span className="mySpan">
              <Chip label={value} variant="standard" />
            </span>
          );
        })}
        <CardActions>
          <Button
            className="button"
            style={{ background: "#E4D9FF" }}
            href={whereTo}
          >
            Go To Recipe
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
