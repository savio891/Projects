import React from "react";
import Header from "./components/header"
import Aside from "./components/aside";
import AsidePublicity from "./components/aside_publicty";
import Section from "./components/section";
import Footer from "./components/footer";

export default function App() {
  return(
    <>
      <Header />
      <Aside />
      <AsidePublicity />
      <Section />
      <Footer />
    </>
  )
}