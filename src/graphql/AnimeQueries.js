import React, { useEffect } from "react";

export const search = (
  searchItem,
  currentPage,
  setAnimeInfo,
  setPageInformation
) => {
  var query = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: $id, search: $search, type: ANIME) {
          id
          type
          description (asHtml: false)
          title {
            romaji
            english
          }
          coverImage {
              extraLarge
              medium
          }
        }
      }
    }
    `;

  var variables = {
    search: searchItem ? searchItem : "",
    page: currentPage,
    perPage: 10,
  };

  var url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  fetch(url, options).then(handleResponse).then(handleData).catch(handleError);

  function handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  function handleData(data) {
    console.log(data);
    setAnimeInfo(data.data.Page);
    setPageInformation(data.data.Page.pageInfo, "Page Info");
  }

  function handleError(error) {
    console.error(error);
  }
};
