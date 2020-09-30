import React from "react";
import ReactDOM from 'react-dom';
import FirstContent from "../components/contents/1-content/first-content";
import SecondContent from "../components/contents/2-content/second-content";
import ThirtContent from "../components/contents/3-content/third-content";
import FourthContent from "../components/contents/4-content/fourth-content";
import Header from "../components/header/header";
import Layout from "../components/layout";

function HomePage() {
  return (
    
    <Layout>
      <Header></Header>
      <FirstContent></FirstContent>
      <SecondContent></SecondContent>
      <ThirtContent></ThirtContent>
      <FourthContent></FourthContent>
    </Layout>

    
    
  );
}

export default HomePage;
