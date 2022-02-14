import React, { useState, useRef, useEffect } from "react";
import { Button, Paper, TextField } from "@material-ui/core";
import "./main.css";
import Checkbox from "@mui/material/Checkbox";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CookieIcon from "@mui/icons-material/Cookie";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CakeIcon from "@mui/icons-material/Cake";
import CoffeeIcon from "@mui/icons-material/Coffee";
import EggIcon from "@mui/icons-material/Egg";
import EggAltIcon from "@mui/icons-material/EggAlt";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import FlatwareIcon from "@mui/icons-material/Flatware";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";

import Chip from "@mui/material/Chip";

export default function recipePageCopy() {
  var title = "Cupcakes";
  var image =
    "https://prettysimplesweet.com/wp-content/uploads/2020/07/funfetti-cupcakes-recipe.jpg";
  var ingredients = ["love", "patience", "sugar"];
  var character = ["tasty", "perfect", "easy", "food", "vegan"];
  return (
    <div className="Hi">
      <Paper className="paper" elevation={4}>
        <h1>{title}</h1>
        <img src={image} alt="An image of the desired recipe result." />
        <Brightness1Icon></Brightness1Icon>
        {ingredients.map((value) => {
          return (
            <div className="myDiv">
              <Chip label={value} variant="standard" />
            </div>
          );
        })}
        {character.map((value) => {
          return (
            <div className="myDiv">
              <Chip label={value} variant="standard" />
            </div>
          );
        })}
      </Paper>
    </div>
  );
}
