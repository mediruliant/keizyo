import React from "react";
import Header from "../components/Header/Header";
import PageTransition from "../components/transitions/PageTransition";

const Home = () => {

    return (
        <PageTransition>
            <div className="h-32 w-screen absolute top-0">
                <Header />

            </div>
            <div className="h-[5000px]">
                <section id="hero" className="hero relative w-screen h-screen border-2 flex sm:items-center">

                    <div className="hero-content mx-auto p-2 flex flex-col md:flex-row justify-evenly sm:w-[95%]">

                        <div className="relative">
                            <div className="">
                                <p className="text-xl mx-4 mb-8">Sekarang: <span className="font-extrabold">Sabtu</span> 17-<span className="font-extrabold">Agustus</span>-2023</p>
                                <h1 className="font-extrabold md:font-bold font-sans md:text-9xl text-6xl">Crafting Beautiful Experiences for the Digital World</h1>
                                <p className="py-2 px-4 rounded-2xl bg-orange-600 text-white rotate-12 w-52 text-3xl font-semibold text-center my-5">With me'</p>
                                <h1 className="text-4xl font-extrabold font-mono border-2 pl-20 py-2 hover:text-white hover:bg-black duration-300 ease-in-out relative group
                                "><a href="/about" className="absolute right-52 top-2 text-transparent group-hover:text-white flex items-center text-lg opacity-0 translate-x-96 group-hover:opacity-100 group-hover:translate-x-0 duration-500">About me{'>'}</a>
                                    Medi Rudiant</h1>
                            </div>
                        </div>

                    </div>

                    <div className="background w-full h-full absolute top-0 -z-[100] flex items-center justify-center">
                        <h1 className="text-[400px] flex justify-center font-bold text-slate-100 overflow-hidden">
                            <div className="keizyo leading-[340px]">
                                Medmed:)
                            </div>
                        </h1>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}

export default Home;
