import React from "react";
import Main from "./Main";
import BootstrapCarousel from "./Slider";
import Search from "./Search";
export default function Home() {
  return (
    <div>
      <Search/>
      <BootstrapCarousel />
      <Main />
    </div>
  );
}
