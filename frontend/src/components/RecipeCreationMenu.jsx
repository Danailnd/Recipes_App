import React, { useState, useRef } from "react";
import { Button, Paper, TextField } from "@material-ui/core";
import "./main.css";
import IngredientsCreationMenu from "./IngredientsCreationMenu";

export default function RecipeCreationMenu() {
  const input = useRef("");
  function submit() {
    let result;
    result = input.current;
    console.log(result);
  }
  function handleTextFieldChange(word) {
    input.current = word;
  }
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      submit();
    }
  };
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
