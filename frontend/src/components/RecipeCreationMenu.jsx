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

// import CircleIcon from "@mui/icons-material/Circle";

export default function RecipeCreationMenu() {
  const input = useRef("");
  const ingredients = useRef(["", "", "", "", ""]);
  const [counter, setCounter] = useState(["", "", "", "", ""]);

  function submit() {
    let result;
    result = input.current;
    console.log(result);
  }
  function handleTextFieldChange(word) {
    input.current = word;
  }
  function handleIngredientsTextfieldChange(word, index) {
    console.log(word);
    console.log(index);
    let editedIngredients = [...ingredients.current];
    editedIngredients[index] = word;
    ingredients.current = editedIngredients;
  }
  function addIngredient() {
    // let Ingredients = [...ingredients, ""];
    let result = [...ingredients.current, ""];
    setCounter(result);
    ingredients.current = result;
  }

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      submit();
    }
    //HIIII
  };
  useEffect(() => {}, [ingredients]);
  function IngredientsCreationMenu() {
    return counter.map((value, index) => {
      return (
        <div className="myDiv">
          <CookieIcon />
          <TextField
            className="textField"
            variant="standard"
            onChange={(event) =>
              handleIngredientsTextfieldChange(event.target.value, index)
            }
          />
        </div>
      );
    });
  }
  return (
    <>
      <Paper className="paper" elevation={4}>
        <div>
          <h2 className="header">Create New Recipe</h2>
        </div>
        <div className="myDiv">
          <TextField
            className="textField"
            label="Write a title"
            variant="outlined"
            color="primary"
            onKeyDown={onKeyDown}
            onChange={(event) => handleTextFieldChange(event.target.value)}
          />
        </div>
        <div>
          <IngredientsCreationMenu />
          <Button onClick={addIngredient}>
            <AddCircleOutlineIcon />
          </Button>
        </div>
        <div className="myDiv">
          <Button
            variant="contained"
            style={{ background: "#E4D9FF" }}
            className="button"
            onClick={submit}
          >
            SUBMIT
          </Button>
        </div>
      </Paper>
    </>
    // Hiii
  );
  //hey (;
}
