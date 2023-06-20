import React from "react";
import medmed from "../../img/medmed3.jpg"

const Aboutme = () => {

    return (
            <section className="head">
                        <div className="left-content relative flex items-center md:order-2">
                            <div className="relative mx-auto w-56 scale-75 md:scale-125 sm:scale-100">

                            <div className="border-4 border-teal-600 w-56 h-72 rounded-full p-5 shadow-2xl">
                                <div className="w-full h-full bg-white rounded-full flex overflow-hidden shadow-2xl">
                                    <img src={medmed} alt={medmed} className="w-full h-full object-cover"></img>
                                </div>
                            </div>
                            <div className="absolute top-3/4 -right-12 z-10 w-40 rounded-3xl p-5 backdrop-blur-sm bg-white/50 drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]">
                                <p className="text-xl font-bold">Front-end Web</p>
                            </div>
                            <div className="absolute drop-shadow-lg -z-10 -top-5 -left-10 rounded-3xl bg-violet-600 w-32 p-5">
                                <p className="text-xl font-bold text-white">Graphic Designer</p>
                            </div>
                            <div className="absolute drop-shadow-lg top-16 -right-16 rounded-3xl bg-orange-600 p-5">
                                <p className="text-lg font-bold text-white">Gamer</p>
                            </div>
                            <div className="absolute drop-shadow-lg -z-10 bottom-2 -left-14 rounded-3xl bg-blue-600 p-5">
                                <p className="text-lg font-bold text-white">Lampung</p>
                            </div>

                            </div>
                        </div>
            </section>
        
    )
}

export default Aboutme;
