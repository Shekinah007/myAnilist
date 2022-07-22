import React, { useEffect, useState } from "react";
import { SpinnerDiamond } from "spinners-react";

import AnimeCard from "../components/AnimeCard";
import { filter } from "../graphql/HomeQuery";
import Filter from "../components/Filter";
import { genreFilterOptions } from "../filerOptions/allFilterOptions";
import { formatFilterOptions } from "../filerOptions/allFilterOptions";
import { yearFilterOptions } from "../filerOptions/allFilterOptions";
import { isSpecifiedDirective } from "graphql";

const Home = () => {
  const [animeList, setAnimeList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState();
  const [format, setFormat] = useState(undefined);
  const [seasonYear, setSeasonYear] = useState(undefined);
  const [genre, setGenre] = useState(undefined);
  const [isPending, setIsPending] = useState(true);

  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);

  useEffect(() => {
    filter(
      setAnimeList,
      setIsPending,
      currentPage,
      format,
      search,
      seasonYear,
      genre
    );
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
    <div className="flex flex-col bg-blue-100 min-h-screen">
      <div className="nav bg-blue-900  h-20 flex justify-between px-4 items-center text-orange-50 text-lg">
        <h1 className="text-2xl">My Ani List</h1>
      </div>
      <div className="h-20 md:h-24 flex place-items-center justify-between px-4 lg:px-16 overflow-scroll md:overflow-hidden gap-10 scroll-m-2 sticky top-0 md:-top-3 bg-blue-100 shadow-lg">
        <div>
          <p className="text-lg mb-1 text-slate-500 font-bold">Search</p>
          <input
            className="rounded text-sm h-8 w-40  z-20 shadow-lg bg-blue-50 p-2"
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
          setIsPending={setIsPending}
        />
        <Filter
          name="Year"
          filters={seasonYear}
          setFilter={setSeasonYear}
          valueArray={yearFilterOptions}
          setIsPending={setIsPending}
        />
        <Filter
          name="Genre"
          filters={genre}
          setFilter={setGenre}
          valueArray={genreFilterOptions}
          setIsPending={setIsPending}
        />
      </div>
      <div className="flex flex-wrap place-content-evenly  md:w-11/12  min-h-screen pt-6  self-center ">
        {animeList &&
          animeList.data.Page.media.map((anime) => (
            <AnimeCard
              id={anime.id}
              title={anime.title}
              coverImage={anime.coverImage}
              key={anime.id}
            />
          ))}
        {isPending && (
          <div className="fixed left-1/2 top-1/2">
            <SpinnerDiamond
              size={87}
              thickness={166}
              speed={117}
              color="rgba(54, 173, 71, 1)"
              secondaryColor="rgba(0, 0, 0, 1)"
            />
          </div>
        )}
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
        <p>{currentPage}</p>
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
