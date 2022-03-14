const express = require("express");
const mysql2 = require("mysql2");

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

const graphQLTypes = require("./graphQLTypes");

//Create connection
const db = mysql2.createConnection({
  host: "localhost",
  port: 7000,
  user: "root",
  password: "root",
  database: "test1",
});

function getAllBooksFromDB() {
  let sql = "SELECT * FROM ingredients";
  db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    return results;
  });
}

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    ingredients: {
      type: graphQLTypes.getIngredientType(),
      description: "A list of all the ingredients",
      resolve: () => getAllBooksFromDB(),
    },

    // book: {
    //   type: BookType,
    //   description: "A Single Book",
    //   args: {
    //     id: { type: GraphQLInt },
    //   },
    //   resolve: (parent, args) => books.find((book) => book.id === args.id),
    // },
    // books: {
    //   type: new GraphQLList(BookType),
    //   description: "List of All Books",
    //   resolve: () => books,
    // },
    // authors: {
    //   type: new GraphQLList(AuthorType),
    //   description: "List of All Authors",
    //   resolve: () => authors,
    // },
    // author: {
    //   type: AuthorType,
    //   description: "A Single Author",
    //   args: {
    //     id: { type: GraphQLInt },
    //   },
    //   resolve: (parent, args) =>
    //     authors.find((author) => author.id === args.id),
    // },
  }),
});

const getRootQueryType = () => {
  return RootQueryType;
};

exports.getRootQueryType = getRootQueryType;
