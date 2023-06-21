import React from "react";
import Header from "../../components/Header/Header";
import PageTransition from "../../components/transitions/PageTransition";
import HeroHome from "./HomeSections/Hero";
import Section2Home from "./HomeSections/Section2Home";
import Section3Home from "./HomeSections/Section3Home";

const Home = () => {

    return (
        <PageTransition>
            <div className="h-32 w-screen absolute top-0">
                <Header />

            </div>
            <div className="overflow-hidden">
                <HeroHome />
                <Section2Home />
                <Section3Home />
            </div>
        </PageTransition>
    )
}

export default Home;
