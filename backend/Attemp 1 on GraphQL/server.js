const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

const rootQueryType = require("./rootQueryType");

const app = express();

const schema = new GraphQLSchema({
  query: rootQueryType.getRootQueryType(),
  //   mutation: RootMutationType,
});

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// const customers = [
//   { id: 1, firstName: "John", lastName: "Doe" },
//   { id: 2, firstName: "Brad", lastName: "Traversy" },
//   { id: 3, firstName: "Mary", lastName: "Swanson" },
// ];
// app.use(cors(corsOptions));

// app.get("/api/customers", (req, res) => {
//   res.json(customers);
// });
// app.get("/api/customers/:id", (req, res) => {
//   res.json(customers.filter((member) => member.id === parseInt(req.params.id)));
// });
