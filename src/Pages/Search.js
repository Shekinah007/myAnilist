import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";

import { search } from "../graphql/AnimeQueries";

function Search() {
  const [animeInfo, setAnimeInfo] = useState("");
  const [searchItem, setSearchItem] = React.useState("");
  const [searchAction, setSearchAction] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInformation, setPageInformation] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    search(searchItem, currentPage, setAnimeInfo, setPageInformation);
  }, [searchAction, currentPage]);

  function nextPage() {
    if (pageInformation.hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setIsDisabled(true);
    }
  }

  return (
    <div className="min-h-screen w-screen bg-blue-100 flex flex-row place-items-center place-content-center">
      <div>
        <input
          className="rounded bg-blue-200"
          placeholder="Search"
          type="text"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCurrentPage(1);
              setSearchAction((prev) => !prev);
            }
          }}
        />

        <div className="flex flex-wrap place-content-center">
          {animeInfo &&
            animeInfo.media.map((anime) => {
              return (
                <AnimeCard
                  id={anime.id}
                  title={anime.title}
                  coverImage={anime.coverImage}
                />
              );
            })}
        </div>
        <button
          onClick={nextPage}
          disabled={isDisabled}
          className="bg-red-900 rounded p-2"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Search;
