import React from "react";
import "./main.css";
import { Paper, Button } from "@material-ui/core";
import createNewIngredient from "frontend/src/components/addIngredient.jsx";
import IngredientsList from "./IngredientsList";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

export default function createNewIngredient() {
  function ingredientForm(type, ingredientName, groups) {
    return (
      <span>
        <Paper elevation={4}>
          <ToggleButtonGroup exclusive aria-label="text alignment" value={type}>
            <ToggleButton value="Ingredient" aria-label="left aligned">
              <DinnerDiningIcon />
            </ToggleButton>
            <ToggleButton value="Characteristic" aria-label="centered">
              <MenuBookIcon />
            </ToggleButton>
            <ToggleButton value="Group" aria-label="right aligned">
              <GroupAddIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          <h2>Enter {type} name here: </h2>
          <TextField
            value={ingredientName}
            label="Write here: "
            variant="outlined"
          ></TextField>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={groups}
            getOptionLabel={(group) => group.name}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Enter groups it belongs to: "
                placeholder="Groups..."
              />
            )}
          />
          <Button sx={{ bgcolor: "#e9e2fd" }}></Button>
        </Paper>
      </span>
    );
  }
  return (
    <span>
      {ingredientForm("ingredient", "potato", [
        "Vegetables",
        "Vegan",
        "Versatile",
        "Othe words that start with V",
      ])}
    </span>
  );
}
