import React, { useEffect, useState } from "react";

import AnimeCard from "../components/AnimeCard";
import { filter } from "../graphql/HomeQuery";
import Filter from "../components/Filter";
import { genreFilterOptions } from "../filerOptions/allFilterOptions";
import { formatFilterOptions } from "../filerOptions/allFilterOptions";
import { yearFilterOptions } from "../filerOptions/allFilterOptions";

const Home = () => {
  const [animeList, setAnimeList] = useState();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState();
  const [format, setFormat] = useState(undefined);
  const [seasonYear, setSeasonYear] = useState(undefined);
  const [genre, setGenre] = useState(undefined);

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
        <Filter
          name="Format"
          filters={format}
          setFilter={setFormat}
          valueArray={formatFilterOptions}
        />
        <Filter
          name="Year"
          filters={seasonYear}
          setFilter={setSeasonYear}
          valueArray={yearFilterOptions}
        />
        <Filter
          name="Genre"
          filters={genre}
          setFilter={setGenre}
          valueArray={genreFilterOptions}
        />
      </div>
      <div className="flex flex-wrap place-content-center ">
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
