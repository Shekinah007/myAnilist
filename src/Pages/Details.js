import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { detailsQuery } from "../graphql/DetailsQuery";

const Details = () => {
  const [animeDetails, setAnimeDetails] = useState("");
  const { id } = useParams();

  useEffect(() => {
    detailsQuery(id, setAnimeDetails);
    console.log("Anime Details: ", animeDetails);
  }, []);
  return (
    animeDetails && (
      <div className="h-screen flex flex-col bg-slate-900 text-slate-200 items-center">
        {/* ------------------------------------------------------------------------------------------- */}
        <div className="top bg-slate-800 w-full flex flex-col gap-4 p-2 md:p-3 lg:p-3 rounded-b-lg items-end justify-between">
          <div className="flex gap-1 mid:gap-10 w-full">
            <img
              src={animeDetails.coverImage.extraLarge}
              className="w-44 md:w-52"
            />
            <img
              src={animeDetails.bannerImage}
              className="absolute top-0 opacity-10 h-64 md:h-80 w-full"
            />

            <div className="self-start hidden md:block lg:block md:self-end lg:self-end">
              <h1 className="font-bold text-2xl">
                {animeDetails.title.romaji}
              </h1>
              <p>
                {animeDetails.description
                  ? animeDetails.description.replace(/(<([^>]+)>)/gi, "")
                  : "Description not available 😥"}
              </p>
            </div>

            <div className="flex flex-col text-sm lg:text-xl md:hidden lg:hidden text-slate-400 gap-0.4">
              <h1>
                Type:
                <span className="text-blue-500">
                  {" "}
                  {animeDetails.format}
                </span>{" "}
                <hr />
              </h1>
              <h1>
                Season:
                <span className="text-blue-500">
                  {" "}
                  {animeDetails.season}
                </span>{" "}
                <hr />
              </h1>
              <h1>
                Average Score:{" "}
                <span className="text-blue-500"> {animeDetails.meanScore}</span>{" "}
                <hr />
              </h1>
              <h1>
                Genres:{" "}
                <span className="text-blue-500">
                  {/* {String(animeDetails.genres)}{" "} */}
                  {animeDetails.genres.join(", ")}
                </span>
                <hr />
              </h1>
              <h1>
                Episodes:{" "}
                <span className="text-blue-500">{animeDetails.episodes}</span>
                <hr />
              </h1>
              <h1>
                Start Date:{" "}
                <span className="text-blue-500">
                  {animeDetails.startDate.day}, {animeDetails.startDate.month},{" "}
                  {animeDetails.startDate.year}
                </span>
                <hr />
              </h1>
              <h1>
                End Date:{" "}
                <span className="text-blue-500">
                  {animeDetails.endDate.day}, {animeDetails.endDate.month},{" "}
                  {animeDetails.endDate.year}
                </span>
                <hr />
              </h1>
              <h1>
                Runtime:{" "}
                <span className="text-blue-500">
                  {animeDetails.duration} mins
                </span>
                <hr />
              </h1>
              <h1>
                Status:{" "}
                <span className="text-blue-500">{animeDetails.status}</span>{" "}
                {/* <hr /> */}
              </h1>
              <button className="bg-blue-200 active:bg-green-200  text-green-900 mt-2">
                Add
              </button>
            </div>
          </div>

          <div className="self-start md:self-end lg:self-end lg:hidden md:hidden ">
            <h1 className="font-bold text-2xl">{animeDetails.title.romaji}</h1>
            <p>
              {animeDetails.description
                ? animeDetails.description.replace(/(<([^>]+)>)/gi, "")
                : "Description not available 😥"}
            </p>
          </div>
        </div>

        <div className="text-sm p-4 hidden md:flex gap-4 text-zinc-500 justify-between text-center  lg:w-5/8 bg-slate-800 rounded-b-xl">
          {/* <div className="">
            <h2>Episode Duration</h2>
            <p>{animeDetails.duration} mins</p>
          </div>
          
          <div className="">
            <h2>Episode Duration</h2>
            <p>{animeDetails.duration} mins</p>
          </div>

          <div className="">
            <h2>Type</h2>
            <p>{animeDetails.format}</p>
          </div>
          <div className="">
            <h2>Format</h2>
            <p>{animeDetails.format}</p>
          </div>
          <div className="">
            <h2>Format</h2>
            <p>{animeDetails.format}</p>
          </div>
          <div>
            <h2>No of Episodes</h2>
            <p>{animeDetails.episodes} </p>
          </div>
          <div>
            <h2>Status</h2>
            <p>{animeDetails.status}</p>
          </div> */}
          <h1>
            Type
            <br />
            <span className="text-blue-500"> {animeDetails.format}</span>{" "}
            {/* <hr /> */}
          </h1>
          <div className="bg-slate-300 w-[0.4px] h-[25px] self-center"></div>

          <h1>
            Season
            <br />
            <span className="text-blue-500"> {animeDetails.season}</span>{" "}
            {/* <hr /> */}
          </h1>
          <div className="bg-slate-300 w-[0.4px] h-[25px] self-center"></div>

          <h1>
            Average Score <br />
            <span className="text-blue-500">
              {" "}
              {animeDetails.meanScore}
            </span>{" "}
            {/* <hr /> */}
          </h1>
          <div className="bg-slate-300 w-[0.4px] h-[25px] self-center"></div>

          <h1>
            Episodes <br />
            <span className="text-blue-500">{animeDetails.episodes}</span>
            {/* <hr /> */}
          </h1>
          <div className="bg-slate-300 w-[0.4px] h-[25px] self-center"></div>
          <h1>
            Start Date <br />
            <span className="text-blue-500">
              {animeDetails.startDate.day}, {animeDetails.startDate.month},{" "}
              {animeDetails.startDate.year}
            </span>
          </h1>
          <div className="bg-slate-300 w-[0.4px] h-[25px] self-center"></div>

          <h1>
            End Date <br />
            <span className="text-blue-500">
              {animeDetails.endDate.day}, {animeDetails.endDate.month},{" "}
              {animeDetails.endDate.year}
            </span>
          </h1>
          <div className="bg-slate-300 w-[0.4px] h-[25px] self-center"></div>

          <h1>
            Runtime <br />
            <span className="text-blue-500">{animeDetails.duration} mins</span>
            {/* <hr /> */}
          </h1>
          <div className="bg-slate-300 w-[0.4px] h-[25px] self-center"></div>

          <h1>
            Status
            <br />
            <span className="text-blue-500">{animeDetails.status}</span>{" "}
            {/* <hr /> */}
          </h1>
        </div>
        <div className="text-sm p-4 hidden md:flex gap-2 text-zinc-500 justify-between text-center  lg:w-5/8 bg-slate-800 rounded-b-xl">
          <h1>
            Genre(s) <br />
            <span className="text-blue-500">
              {/* {String(animeDetails.genres)}{" "} */}
              {animeDetails.genres.join(", ")}
            </span>
            {/* <hr /> */}
          </h1>
        </div>
      </div>
    )
  );
};

export default Details;
