import React from "react";

const Filter = ({ name, filters, setFilter, valueArray, setIsPending }) => {
  return (
    <div>
      <p className="text-lg mb-1 text-slate-500 font-bold">{name}</p>
      <div className="w-40 h-8 flex  shadow-lg bg-blue-50 select">
        <select
          className="outline-none bg-blue-50 px-3 w-40 rounded-lg text-sm"
          value={filters}
          onChange={(e) => {
            setIsPending(true);
            if (e.target.value == "undefined") setFilter(undefined);
            else setFilter(e.target.value);
          }}
        >
          <option value={"undefined"}>Any</option>
          {valueArray.map((item, index) => {
            return (
              <option
                key={index}
                value={item}
                className="bg-slate-500 text-gray-50"
              >
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
