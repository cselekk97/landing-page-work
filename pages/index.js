import React from "react";
import FirstContent from "../components/contents/1-content/first-content";
import SecondContent from "../components/contents/2-content/second-content";
import Header from "../components/header/header";
import Layout from "../components/layout";

function HomePage() {
  return (
    <Layout>
      <Header></Header>
      <FirstContent></FirstContent>
      <SecondContent></SecondContent>
    </Layout>
  );
}

export default HomePage;
