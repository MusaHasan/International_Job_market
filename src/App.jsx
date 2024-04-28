import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HomeCards } from "./components/HomeCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="Test Title" subtitle="Test SubTitle" />
      <HomeCards />
    </>
  );
};

export default App;
