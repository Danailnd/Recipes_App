import { gql } from "@apollo/client";

export const CREATE_BOOK_MUTATION = gql`
  mutation addBook($name: String!, $genre: String!, $authorID: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorID) {
      name
      genre
      author
    }
  }
`;

// 623ef76ca26113f1f2310cdd
