const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require("./Attempt 2 on GraphQL/schema");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://danailnd:i4UypxQEa2079ZhsYruR@cluster0.52yyx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => {
  console.log("Connected to database...");
});

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log("Server started on port 5000...");
});
