import AppBar from "@mui/material/AppBar";
import CakeIcon from "@mui/icons-material/Cake";
import CoffeeIcon from "@mui/icons-material/Coffee";
import EggIcon from "@mui/icons-material/Egg";
import EggAltIcon from "@mui/icons-material/EggAlt";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import FlatwareIcon from "@mui/icons-material/Flatware";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CookieIcon from "@mui/icons-material/Cookie";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { Button, Paper, TextField } from "@material-ui/core";

export default function NavigationBar() {
  return (
    <AppBar
      style={{ background: "#E4D9FF" }}
      position="sticky"
      className="appBar"
    >
      <Toolbar>
        <LocalDiningIcon
          style={{ color: "#273469" }}
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <EmojiFoodBeverageIcon />
        </LocalDiningIcon>
        <Button href="/" style={{ color: "#273469" }}>
          Build-A-Recipe
        </Button>
        <Button href="test" style={{ color: "#273469" }}>
          Bee Movie Script
        </Button>
        <Button href="IngredientsList" style={{ color: "#273469" }}>
          Ingredients
        </Button>
        <Button href="Recipes" style={{ color: "#273469" }}>
          Recipes
        </Button>
      </Toolbar>
    </AppBar>
  );
}
