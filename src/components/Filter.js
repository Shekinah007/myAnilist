import React from "react";

const Filter = ({ name, filters, setFilter, valueArray }) => {
  return (
    <div>
      <p className="text-lg mb-1 text-slate-500 font-bold">{name}</p>
      <div className="w-40 h-12 flex  shadow-lg bg-blue-50 select">
        <select
          className="outline-none bg-blue-50 p-3 w-40 rounded-lg"
          value={filters}
          onChange={(e) => {
            if (e.target.value == "undefined") setFilter(undefined);
            else setFilter(e.target.value);
          }}
        >
          <option value={"undefined"}>Any</option>
          {valueArray.map((item) => {
            return (
              <option value={item} className="bg-slate-500 text-gray-50">
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
