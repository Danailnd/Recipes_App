import React, { useState } from "react";
import { Button, Paper, TextField } from "@material-ui/core";
import "./main.css";
import CookieIcon from "@mui/icons-material/Cookie";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function RecipeCreationMenu() {
  const [counter, setCounter] = useState(["", "", "", "", ""]);
  const addNewTextField = () => setCounter((prev) => [...prev, ""]);

  const addInputValue = (i, newValue) => {
    setCounter((prevState) =>
      prevState.map((value, valueIndex) =>
        valueIndex === i ? newValue : value
      )
    );
  };
  function IngredientsCreationMenu() {
    return counter.map((item, i) => {
      return (
        <div className="myDiv">
          <CookieIcon />
          <TextField
            key={i}
            placeholder={`Ingredient ${i}`}
            value={item}
            id={i}
            type="text"
            onChange={(e) => addInputValue(i, e.target.value)}
            className="textField"
            variant="standard"
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
          <TextField
            placeholder={`Name of Food`}
            type="text"
            className="textField"
            variant="standard"
          />
          {IngredientsCreationMenu()}
          <Button onClick={addNewTextField}>
            <AddCircleOutlineIcon />
          </Button>
        </div>
      </Paper>
    </>
  );
}
