import React from "react";
import Header from "../../components/Header/Header";
import PageTransition from "../../components/transitions/PageTransition";
import HeroHome from "./HomeSections/Hero";
import Section2Home from "./HomeSections/Section2Home";

const Home = () => {

    return (
        <PageTransition>
            <div className="h-32 w-screen absolute top-0">
                <Header />

            </div>
            <div className="h-[5000px] overflow-hidden">
                <HeroHome />
                <Section2Home />
            </div>
        </PageTransition>
    )
}

export default Home;
