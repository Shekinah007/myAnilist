import React from "react";
import { useState, useEffect } from "react";

import { useLazyQuery } from "@apollo/client";
import { getWeatherQuery } from "../graphql/Queries";

const Home = () => {
  const [getWeather, { loading, data, error }] = useLazyQuery(getWeatherQuery, {
    variables: { name: "Vancouver" },
  });

  const [weatherInfo, setWeatherInfo] = useState("");
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (error) return <h1>Error found</h1>;
    if (data) {
      console.log(data);
      setWeatherInfo(data);
      console.log(number);
    }
  }, [number]);

  return (
    <div className="home">
      <h1>Search for weather</h1>
      <input type="text" placeholder="City name..."></input>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
          getWeather();
        }}
      >
        Search
      </button>
      <div>{weatherInfo && JSON.stringify(weatherInfo)}</div>
    </div>
  );
};

export default Home;
