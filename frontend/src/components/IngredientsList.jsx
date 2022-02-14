import React from "react";
import "./main.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { Paper } from "@material-ui/core";

export default function IngredientsList() {
  function createIngredientAccordion(groupName, ingredientsNames) {
    return (
      <Grid container justify="center">
        <div className="myAccordion">
          {" "}
          <Accordion
            sx={{
              bgcolor: "#e9e2fd",
              borderRadius: "10px",
              textAlign: "center",
              margin: "auto",
              padding: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2>{groupName}</h2>
            </AccordionSummary>
            <AccordionDetails>
              {ingredientsNames.map((value) => {
                return (
                  <span className="mySpan">
                    <Chip label={value} variant="standard" />
                  </span>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </div>
      </Grid>
    );
  }
  return (
    <div>
      <Paper elevation={4}>
        <h1>Ingredients</h1>{" "}
        {createIngredientAccordion("Vegetables", [
          "Cucumber",
          "Onion",
          "Tomato",
          "Carrot",
          "Lettuce",
        ])}
        {createIngredientAccordion("Dairy", [
          "Milk",
          "Cheese",
          "Butter",
          "Yogurt",
        ])}
        {createIngredientAccordion("Meat", ["Beef", "Chicken", "Pork"])}
      </Paper>
      <Paper elevation={4}>
        <h1>Characteristics</h1>{" "}
        {createIngredientAccordion("Vegan", [
          "Diary",
          "Meat",
          "Eggs",
          "Honey",
          "Gelatin",
        ])}
        {createIngredientAccordion("Muslim", ["Pork", "Alcohol"])}
      </Paper>
    </div>
  );
}
