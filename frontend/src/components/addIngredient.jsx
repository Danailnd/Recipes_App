import React from "react";
import "./main.css";
import { Paper, Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

export default function CreateNewIngredient() {
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
      <h3>Hiii</h3>

      // <span className="myNewIngredientPage">
      //   <Paper className="newGroup" elevation={4}>
      //     <h2>Enter {type} name here: </h2>
      //     <TextField
      //       value={ingredientName}
      //       label="Write here: "
      //       variant="outlined"
      //     ></TextField>
      //     <Stack spacing={3}>
      //       <Autocomplete
      //         multiple
      //         id="tags-outlined"
      //         options={groups}
      //         getOptionLabel={(option) => option.name}
      //         filterSelectedOptions
      //         renderInput={(params) => (
      //           <TextField
      //             {...params}
      //             label="Enter groups it belongs to: "
      //             placeholder="Groups..."
      //           />
      //         )}
      //       />
      //     </Stack>
      //     <Button sx={{ bgcolor: "#e9e2fd" }} href="IngredientsList">
      //       Submit
      //     </Button>
      //   </Paper>
      // </span>
    );
  }
  return <span>{ingredientForm("ingredient", "potato")}</span>;
}
