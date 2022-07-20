import React from "react";

const searchInput = ({}) => {
  return (
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
  );
};

export default searchInput;
