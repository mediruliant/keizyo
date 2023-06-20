import React from "react";
import FloatImage1 from "./FloatImage1";
import WhereTo from "./WhereTo";

const Section2Home = () => {
    
    React.useEffect(() => {
        const handleScroll = () => {
          const parallaxDiv = document.getElementById('text-section2-home');
          const offsetY = window.pageYOffset;
          parallaxDiv.style.transform = `translateY(-${offsetY * 0.12}px)`;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <section className="w-screen p-5 h-[1000px] bg-black relative">
      <WhereTo />
      <FloatImage1 />
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h3 id="text-section2-home" className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 invert absolute bottom-0 md:bottom-64">
            Bridging Artistry and Functionality
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Section2Home;
