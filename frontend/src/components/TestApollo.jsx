import React, { useEffect, useState, useRef } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { LOAD_ALL_BOOKS_TEST } from "../GraphQL/Queries";
import { CREATE_BOOK_MUTATION } from "../GraphQL/Mutations";
import { Button, TextField } from "@material-ui/core";

export default function TestApollo() {
  const { error, loading, data } = useQuery(LOAD_ALL_BOOKS_TEST);
  const [addBook, { mutationError }] = useMutation(CREATE_BOOK_MUTATION);

  const [books, setBooks] = useState([]);
  const name = useRef("");
  const genre = useRef("");
  const authorID = useRef("");

  const forceRefresh = false;

  async function createBook() {
    let result = books;
    console.log(result);
    const newBook = await addBook({
      variables: {
        name: name.current,
        genre: genre.current,
        authorID: authorID.current,
      },
    });
    if (mutationError) {
      console.log(mutationError);
    }
    console.log(newBook);
    result.add(newBook.data.addBook);
    setBooks(result);
  }

  function ButtonClick() {
    console.log(name.current, genre.current, authorID.current);
    createBook();
  }
  useEffect(() => {
    if (data) {
      console.log(data.books);
      setBooks(data.books);
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <h2>"Loading"</h2>
      ) : (
        <>
          <div>
            {books.map((e) => {
              return <h2>{e.name}</h2>;
            })}
          </div>
          <div>
            <TextField
              label="name"
              variant="standard"
              onChange={(e) => {
                name.current = e.target.value;
              }}
            />
            <TextField
              label="Genre"
              variant="standard"
              onChange={(e) => {
                genre.current = e.target.value;
              }}
            />
            <TextField
              label="Author Id"
              variant="standard"
              onChange={(e) => {
                authorID.current = e.target.value;
              }}
            />
          </div>
          <div>
            <Button variant="outlined" onClick={ButtonClick}>
              "Hiii"
            </Button>
          </div>
        </>
      )}
    </>
  );
}
