import React, { useEffect, useState } from "react";

import AnimeCard from "../components/AnimeCard";
import { filter } from "../graphql/HomeQuery";
import Filter from "../components/Filter";
import { genreFilterOptions } from "../filerOptions/allFilterOptions";

const Home = () => {
  const [animeList, setAnimeList] = useState();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState();
  const [format, setFormat] = useState("TV");

  const [seasonYear, setSeasonYear] = useState(undefined);
  const [genre, setGenre] = useState(undefined);

  const genresList = ["Action", "Comedy"];

  const undefinedValue = undefined;
  useEffect(() => {
    filter(setAnimeList, page, format, search, seasonYear, genre);
  }, [page, format, search, seasonYear, genre]);

  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="nav bg-slate-800  h-20 flex justify-between px-4 items-center text-orange-50 text-lg">
        <h1 className="text-2xl">My Ani List</h1>
        <input
          className="rounded bg-blue-200"
          placeholder="Search"
          type="text"
          //   value={searchItem}
          onChange={(e) => {
            // setSearchItem(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setPage(1);
              //   setSearchAction((prev) => !prev);
            }
          }}
        />
      </div>
      <div className="h-20 flex place-items-center justify-between px-4 overflow-scroll md:overflow-hidden gap-10 scroll-m-2 sticky top-0 bg-blue-100">
        {/* <div className="w-40 h-12 flex  shadow-lg bg-blue-50 select rounded-lg">
          <select
            id="genre"
            className="outline-none bg-blue-50 p-3 w-40 rounded-lg"
            onChange={(e) => {
              if (e.target.value == "undefined") {
                setGenre(undefined);
              } else setGenre(e.target.value);
            }}
            value={genre}
          >
            <option value={"undefined"} className="">
              Genre
            </option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Ecchi">Ecchi</option>
            <option value="Romance">Romance</option>
            <option value="Sports">Sports</option>
          </select>
        </div> */}
        <div className="w-40 h-12 flex  shadow-lg bg-blue-50 select">
          <select
            id="genre"
            className="outline-none bg-blue-50 p-3 w-40 rounded-lg"
            onChange={(e) => {
              setFormat(e.target.value);
            }}
            value={format}
          >
            <option value={undefined} className="">
              Format
            </option>
            <option value="TV">TV</option>
            <option value="MOVIE">Movie</option>
            <option value="TV_SHORT">TV Short</option>
            <option value="OVA">OVA</option>
            <option value="ONA">ONA</option>
            <option value="SPECIAL">Special</option>
            <option value="MUSIC">Music</option>
          </select>
        </div>

        <Filter
          genre={genre}
          setGenre={setGenre}
          valueArray={genreFilterOptions}
        />
      </div>
      <div className="flex flex-wrap place-content-center">
        {animeList &&
          animeList.data.Page.media.map((anime) => (
            <AnimeCard
              id={anime.id}
              title={anime.title}
              coverImage={anime.coverImage}
              key={anime.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
