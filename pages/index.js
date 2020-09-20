import React from "react";
import FirstContent from "../components/contents/1-content/first-content";
import Header from "../components/header/header";
import Layout from "../components/layout";

function HomePage() {
  return (
    <Layout>
      <Header></Header>
      <FirstContent></FirstContent>
    </Layout>
  );
}

export default HomePage;
