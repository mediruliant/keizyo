import React from "react";

const HeroHome = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const parallaxDiv = document.getElementById('with-me');
      const offsetY = window.pageYOffset;
      parallaxDiv.style.rotate = 12 + offsetY/10 + 'deg';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section
      id="hero"
      className="hero relative w-screen py-5 border-2 flex sm:items-center"
    >
      <div className="hero-content mx-auto p-2 pt-20 flex flex-col md:flex-row justify-evenly sm:w-[95%]">
        <div className="relative">
          <div className="">
            <p className="text-xl mx-4 mb-8">
              Sekarang: <span className="font-extrabold">Sabtu</span> 17-
              <span className="font-extrabold">Agustus</span>-2023
            </p>
            <h1 className="font-extrabold md:font-bold font-sans lg:text-9xl md:text-8xl text-6xl">
              Crafting Beautiful Experiences for the Digital World
            </h1>
            <p id="with-me" className="py-2 px-4 rounded-2xl bg-orange-600 text-white rotate-12 w-52 text-3xl font-semibold text-center my-5">
              With me'
            </p>
            <h1
              className="text-3xl md:text-4xl font-extrabold font-mono border-2 pl-20 py-2 hover:text-white hover:bg-black duration-300 ease-in-out relative group
                                "
            >
              <a
                href="/about"
                className="absolute right-52 top-2 text-transparent group-hover:text-white flex items-center text-lg opacity-0 translate-x-96 group-hover:opacity-100 group-hover:translate-x-0 duration-500"
              >
                About me{">"}
              </a>
              Medi Rudiant
            </h1>
          </div>
        </div>
      </div>

      <div className="background w-full h-full absolute top-0 -z-[100] flex items-center justify-center">
        <h1 className="text-[400px] flex justify-center font-bold text-slate-100 overflow-hidden">
          <div className="keizyo leading-[340px]">Medmed:)</div>
        </h1>
      </div>
    </section>
  );
};

export default HeroHome;
