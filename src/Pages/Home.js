import React, { useEffect, useState } from "react";

import AnimeCard from "../components/AnimeCard";
import { filter } from "../graphql/HomeQuery";
import Filter from "../components/Filter";
import { genreFilterOptions } from "../filerOptions/allFilterOptions";
import { formatFilterOptions } from "../filerOptions/allFilterOptions";
import { yearFilterOptions } from "../filerOptions/allFilterOptions";

const Home = () => {
  const [animeList, setAnimeList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState();
  const [format, setFormat] = useState(undefined);
  const [seasonYear, setSeasonYear] = useState(undefined);
  const [genre, setGenre] = useState(undefined);

  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);

  useEffect(() => {
    filter(setAnimeList, currentPage, format, search, seasonYear, genre);
  }, [currentPage, format, search, seasonYear, genre]);

  useEffect(() => {
    setCurrentPage(1);
  }, [format, search, seasonYear, genre]);
  function navigatePage(e) {
    console.log(e.target.value);
    const pageInformation = animeList.data.Page.pageInfo;
    console.log(pageInformation);

    if (e.target.id === "prev") {
      if (pageInformation.currentPage <= 1) {
        setPrevButtonDisabled(true);
      } else {
        setPrevButtonDisabled(false);
        setCurrentPage((prev) => prev - 1);
      }
    } else if (e.target.id === "next") {
      if (pageInformation.hasNextPage) {
        console.log("next!!");
        setCurrentPage((prev) => prev + 1);
      }
    }
  }

  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="nav bg-slate-800  h-20 flex justify-between px-4 items-center text-orange-50 text-lg">
        <h1 className="text-2xl">My Ani List</h1>
      </div>
      <div className="h-20 flex place-items-center justify-between px-4 overflow-scroll md:overflow-hidden gap-10 scroll-m-2 sticky top-0 bg-blue-100">
        <div className="">
          <p className="text-lg mb-1 text-slate-500 font-bold">Search</p>
          <input
            className="rounded w-40 h-12 shadow-lg bg-blue-50 p-2"
            placeholder="Search"
            type="text"
            value={search}
            onChange={(e) => {
              if (e.target.value === "") {
                setSearch(undefined);
              } else setSearch(e.target.value);
            }}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     setCurrentPage(1);
            //     setSearchAction((prev) => !prev);
            //   }
            // }}
          />
        </div>
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
      <div className="flex  justify-center gap-2 py-2">
        <button
          className="bg-slate-800 p-1 px-3 rounded active:text-blue-700 text-gray-200"
          id="prev"
          onClick={(e) => navigatePage(e)}
          disabled={prevButtonDisabled}
        >
          Prev
        </button>
        <button
          className="bg-slate-800 p-1 px-3 rounded active:text-blue-700 text-gray-200"
          id="next"
          onClick={(e) => navigatePage(e)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
