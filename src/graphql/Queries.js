// import { graphql } from "graphql";
// import gql from "graphql-tag";
import { gql } from "@apollo/client";

export const getWeatherQuery = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
        }
      }
    }
  }
`;

export const anime = gql`
  query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, search: $search) {
        id
        title {
          romaji
        }
      }
    }
  }
`;
