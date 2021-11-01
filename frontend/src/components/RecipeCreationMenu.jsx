import React, { useState, useRef } from "react";
import { Button, Paper, TextField } from "@material-ui/core";
import "./main.css";

export default function RecipeCreationMenu() {
  const input = useRef("");
  function submit() {
    console.log(input.current);
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
            label="Write Something"
            variant="outlined"
            color="secondary"
            onKeyDown={onKeyDown}
            onChange={(event) => handleTextFieldChange(event.target.value)}
          />
        </div>
        <div className="angry">
          <Button
            variant="contained"
            color="secondary"
            className="button"
            onClick={submit}
          >
            SUBMIT
          </Button>
        </div>
      </Paper>
    </>
  );
}
