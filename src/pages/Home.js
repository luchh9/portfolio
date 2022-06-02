import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
