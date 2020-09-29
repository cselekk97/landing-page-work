import React from "react";
import ReactDOM from 'react-dom';
import FirstContent from "../components/contents/1-content/first-content";
import SecondContent from "../components/contents/2-content/second-content";
import ThirtContent from "../components/contents/3-content/third-content";
import Progress from "../components/contents/4-content/cont-progress";
import Header from "../components/header/header";
import Layout from "../components/layout";

function HomePage() {
  return (
    
    <Layout>
      <Header></Header>
      <FirstContent></FirstContent>
      <SecondContent></SecondContent>
      <ThirtContent></ThirtContent>
      <Progress></Progress>
    </Layout>

    
    
  );
}

export default HomePage;
