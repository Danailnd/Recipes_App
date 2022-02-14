const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const customers = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Brad", lastName: "Traversy" },
  { id: 3, firstName: "Mary", lastName: "Swanson" },
];
app.use(cors(corsOptions));

app.get("/api/customers", (req, res) => {
  res.json(customers);
});
app.get("/api/customers/:id", (req, res) => {
  res.json(customers.filter((member) => member.id === parseInt(req.params.id)));
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
