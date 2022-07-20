export const detailsQuery = (id, setAnimeDetails) => {
  var query = `
  query ($id: Int){
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      bannerImage
      coverImage {
        extraLarge
      }
      isAdult
      type
      format
      description 
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      seasonYear
      status
      genres
      episodes
      duration
      popularity
      meanScore
      trailer {
        id
        site
        thumbnail
      }
    }
  }
    `;

  var variables = {
    id: id,
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
    console.log(data.data.Media, ":Details");
    setAnimeDetails(data.data.Media);
  }

  function handleError(error) {
    console.error(error);
  }
};
