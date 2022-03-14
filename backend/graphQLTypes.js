const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
// const GraphQLUUID = require("graphql-type-uuid");

const IngredientType = new GraphQLObjectType({
  name: "Ingredient",
  description: "This represent an ingredient used in a recipe",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const getIngredientType = () => {
  return IngredientType;
};

exports.getIngredientType = getIngredientType;
