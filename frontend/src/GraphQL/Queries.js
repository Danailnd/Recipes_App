import { gql } from "@apollo/client";

export const LOAD_ALL_BOOKS_TEST = gql`
  {
    books {
      name
      author {
        id
        name
        age
      }
    }
  }
`;
