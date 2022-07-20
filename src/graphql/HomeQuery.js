export const filter = (
  setAnimeList,
  page,
  format,
  search,
  seasonYear,
  genre
) => {
  var query = `
        query ($page: Int, $format: MediaFormat, $search: String, $seasonYear: Int, $genre: String)  {
            Page (perPage: 20, page: $page){
            pageInfo { 
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(isAdult: false, 
                 type: ANIME, search: $search, format: $format, seasonYear: $seasonYear, genre: $genre
            ) {
                id
                seasonYear
                season
                coverImage {
                    extraLarge
                    large
                    medium
                    color
                  }
                genres
                isAdult
                format
                type
                title {
                romaji
                }
            }
            }
        }
        `;

  var variables = {
    page: page,
    format: format,
    search: search,
    seasonYear: seasonYear,
    genre: genre,
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
    setAnimeList(data);
    console.log(data);
  }

  function handleError(error) {
    console.error(error);
  }
};
