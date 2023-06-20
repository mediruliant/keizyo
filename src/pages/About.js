import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import PageTransition from "../components/transitions/PageTransition";
import Aboutme from "../components/Aboutme.js/Aboutme";

const About = () => {
  
    useEffect(() => {
      
    }, []);
  
    return (
      <PageTransition>
        <Header />
        <div className="w-screen h-screen flex items-center justify-center">
          <section className="about-hero">
            <Aboutme />
          </section>
        </div>
      </PageTransition>
    );
  };

export default About;
