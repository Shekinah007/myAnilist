import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import "./App.css";

import Search from "./Pages/Search";
import Details from "./Pages/Details";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <div className="min-h-screen w-screen bg-blue-100 flex flex-row place-items-center place-content-center"> */}
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
