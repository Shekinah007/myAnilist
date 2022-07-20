import React from "react";

const Filter = ({ genre, setGenre, valueArray }) => {
  let genreArray = ["Action", "Comedy", "Romance"];
  return (
    <div className="w-40 h-12 flex  shadow-lg bg-blue-50 select">
      <select
        className="outline-none bg-blue-50 p-3 w-40 rounded-lg"
        value={genre}
        onChange={(e) => {
          if (e.target.value == "undefined") setGenre(undefined);
          else setGenre(e.target.value);
        }}
      >
        <option value={"undefined"}>Genre</option>
        {valueArray.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Filter;
