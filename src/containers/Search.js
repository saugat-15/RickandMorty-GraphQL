import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data, called}] = useLazyQuery(
    GET_CHARACTER_LOCATIONS, {
      variables: {
        name,
      },
    }
  );

  console.log(error, loading, data, called);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>Loading./..</div>}
      {error && <div>Something went wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
