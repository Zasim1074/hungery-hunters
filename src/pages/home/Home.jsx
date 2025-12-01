import React from "react";
import Layout from "../../components/layouts/Layout";
import "./../../styles/homeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home section Hero Banner */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Layout>
    </>
  );
};

export default Home;
