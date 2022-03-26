import React from "react";

const query = `{
    books {
      name
    }
  }`;

export default function TestGraphQL() {
  //   async function testBackendGraphQL() {

  //   }

  React.useEffect(() => {
    fetch(`http://localhost:5000/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: query }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <h1>"Book list (FROM DB!!!!)"</h1>
    </div>
  );
}
