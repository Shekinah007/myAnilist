import React from "react";
import { Link } from "react-router-dom";

const AnimeCard = ({ id, title, coverImage }) => {
  let animeTitle = "";
  // if(title.length > 2)
  return (
    <Link
      to={`/details/${id}`}
      className="m-2 flex flex-col-reverse justify-between w-[100px] md:h-72 md:w-40 md:m-3"
    >
      <h2 className="leading-4 text-sm">{title && title.romaji}</h2>
      <img
        src={coverImage ? coverImage.extraLarge : ""}
        className="rounded-lg h-36 md:h-64 z-1  hover:-translate-y-2 duration-200 shadow-md shadow-slate-400"
      ></img>
    </Link>
  );
};

export default AnimeCard;
