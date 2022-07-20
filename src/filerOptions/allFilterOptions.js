export const genreFilterOptions = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Mecha",
  // "Harem",
  "Romance",
  "Sci-Fi",
  "Sports",
];

export const formatFilterOptions = [
  "TV",
  "MOVIE",
  "TV_SHORT",
  "OVA",
  "ONA",
  "SPECIAL",
  "MUSIC",
];

let yearArray = () => {
  let array = [];
  for (let i = 2001; i <= 2022; i++) {
    array.push(i);
  }
  return array;
};

export const yearFilterOptions = yearArray();
// export const formatFilterOptions =
