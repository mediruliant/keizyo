import React from "react";
import Header from "../components/Header/Header";
import PageTransition from "../components/transitions/PageTransition";
import { motion as m } from "framer-motion";

const About = () => {

    return (
        <PageTransition>
            <Header />
            <div className="h-[5000px]">
                <section id="hero" className="hero relative w-screen h-screen border-2">
                    <div className="w-full h-full absolute top-0 -z-10 flex items-center justify-center">
                        <h1 className="text-[400px] flex justify-center font-bold text-slate-100 overflow-hidden">
                            <m.div
                              className="keizyo leading-[340px]"
                              initial={{y: 100}}
                              animate={{y: 0}}
                              exit={{y: 100}}
                            >
                                Keizyo
                            </m.div>
                        </h1>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}

export default About;
