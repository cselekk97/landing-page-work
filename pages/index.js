import React from "react";
import FirstContent from "../components/contents/1-content/first-content";
import SecondContent from "../components/contents/2-content/second-content";
import ThirtContent from "../components/contents/3-content/third-content";
import Header from "../components/header/header";
import Layout from "../components/layout";

function HomePage() {
  return (
    
    <Layout>
      <Header></Header>
      <FirstContent></FirstContent>
      <SecondContent></SecondContent>
      <ThirtContent></ThirtContent>
    </Layout>

    
    
  );
}

export default HomePage;
