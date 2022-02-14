import React from "react";
import "./main.css";
import { Paper, Button } from "@material-ui/core";
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

export default function test() {
  const groups = [
    {
      name: "Vegetables",
    },
    { name: "Vegan" },
    { name: "Versatile" },
    { name: "Othe words that start with V" },
  ];
  function ingredientForm(type, ingredientName) {
    return (
      <span className="myNewIngredientPage">
        <Paper className="newGroup" elevation={4}>
          <ToggleButtonGroup
            sx={{ padding: "10px", bgcolor: "#a29bb6", margin: "10px" }}
            exclusive
            value={type}
          >
            <ToggleButton value="ingredient">Ingredient</ToggleButton>
            <ToggleButton className="button" value="Characteristic">
              Characteristic
            </ToggleButton>
            <ToggleButton className="button" value="Group">
              Group
            </ToggleButton>
          </ToggleButtonGroup>
          <h2>Enter {type} name here: </h2>
          <TextField
            value={ingredientName}
            label="Write here: "
            variant="outlined"
          ></TextField>
          <Stack spacing={3}>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={groups}
              getOptionLabel={(option) => option.name}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Enter groups it belongs to: "
                  placeholder="Groups..."
                />
              )}
            />
          </Stack>
          <Button sx={{ bgcolor: "#e9e2fd" }}></Button>
        </Paper>
      </span>
    );
  }
  return <span>{ingredientForm("ingredient", "potato")}</span>;
}
