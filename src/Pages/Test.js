import React from "react";
import { useQuery, gql } from "@apollo/client";

// const FILMS_QUERY = gql`
// {
//     Media(id: $id, search: "Hataraku" type: ANIME) {
//       id
//       title {
//         romaji
//         english
//         native
//       }
//       isAdult
//     }
// `;

export default function Test() {
  //   const { data, loading, error } = useQuery(FILMS_QUERY);

  //   if (loading) return "Loading...";
  //   if (error) return <pre>{error.message}</pre>;
  //   var variables = {
  //     id: 15125,
  //   };

  var query = gql`
    query ($id: Int) {
      Media(id: 15125, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(query);
  if (data) {
    console.log(data);
  }
  return (
    <div>
      <h1>SpaceX Launches</h1>
    </div>
  );
}
