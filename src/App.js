import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Navbar from "./Pages/Navigator";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Error from "./Pages/Error";
import Comedy from "./Pages/GENRE/Comedy";
import Action from "./Pages/GENRE/Action";
import Romance from "./Pages/GENRE/Romance";
import Mystery from "./Pages/GENRE/Mystery";
import Crime from "./Pages/GENRE/Crime";
import Thriller from "./Pages/GENRE/Thriller";
import Fantasy from "./Pages/GENRE/Fantasy";
import Drama from "./Pages/GENRE/Drama";
import Scifi from "./Pages/GENRE/Sci-fi";
import Horror from "./Pages/GENRE/Horror";
import Searchresult from "./Pages/Searchresult";
import Contact from "./Pages/Contact";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index path="/home" element={<Home />} />

            <Route path="/movie" element={<Movie />} />
            <Route path="/searchresult" element={<Searchresult />} />
            <Route path="/comedy" element={<Comedy />} />
            <Route path="/romance" element={<Romance />} />
            <Route path="/mystery" element={<Mystery />} />
            <Route path="/crime" element={<Crime />} />
            <Route path="/thriller" element={<Thriller />} />
            <Route path="/fantasy" element={<Fantasy />} />
            <Route path="/drama" element={<Drama />} />
            <Route path="/scifi" element={<Scifi />} />
            <Route path="/action" element={<Action />} />
            <Route path="/horror" element={<Horror />} />
            <Route path="/*" element={<Error />} />

            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
       
    </>
  );
}
