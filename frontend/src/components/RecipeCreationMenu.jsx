import React, { useState, useRef, useEffect } from "react";
import { Button, Paper, TextField } from "@material-ui/core";
import "./main.css";
import Checkbox from "@mui/material/Checkbox";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
  };
  useEffect(() => {}, [ingredients]);
  function IngredientsCreationMenu() {
    return counter.map((value, index) => {
      return (
        <div>
          <ArrowRightIcon />
          <TextField
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
        <div className="angry">
          <TextField
            className="button"
            label="Write a title"
            variant="outlined"
            color="primary"
            onKeyDown={onKeyDown}
            onChange={(event) => handleTextFieldChange(event.target.value)}
          />
        </div>
        <div>
          <Paper className="paper2" elevation={4}>
            <IngredientsCreationMenu />
            <Button onClick={addIngredient}>
              <AddCircleOutlineIcon />
            </Button>
          </Paper>
        </div>
        <div className="angry">
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={submit}
          >
            SUBMIT
          </Button>
        </div>
      </Paper>
    </>
  );
  //hey (;
}
