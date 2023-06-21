import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectsSections from "./ProjectsSections";
import yoland from "../../../utilities/img/yoland2.png";
import accounting from "../../../utilities/img/Bootstrap demo.png";
import akira from "../../../utilities/img/Akira Fushan.png";
import Section3HomeTitle from "./Section3HomeTitle";

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const updateTranslateX = () => {
      const vwValue = window.innerWidth < 768 ? -300 : -140;
      return `${vwValue}vw`;
    };

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: updateTranslateX(),
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="scroll-section-outer mt-20">
      <div ref={triggerRef} className="relative">
        <Section3HomeTitle />
        <div
          ref={sectionRef}
          className="scroll-section-inner h-[650px] w-[400vw] md:w-[320vw] flex relative"
        >
          <div className="scroll-section h-full w-[100vw] md:w-[60vw] flex items-center justify-center">
            <ProjectsSections />
          </div>
          <div className="scroll-section h-full w-[100vw] md:w-[60vw] flex items-center justify-center">
            <ProjectsSections
              bgColor="bg-orange-200"
              img={yoland}
              name="Yoland Milk Website"
            />
          </div>
          <div className="scroll-section h-full w-[100vw] md:w-[60vw] flex items-center justify-center">
            <ProjectsSections
              bgColor="bg-teal-600"
              img={akira}
              name="Personal Portfolio"
            />
          </div>
          <div className="scroll-section h-full w-[100vw] md:w-[60vw] flex items-center justify-center 0">
            <ProjectsSections
              bgColor="bg-orange-600"
              img={accounting}
              name="Accounting Consultant"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
