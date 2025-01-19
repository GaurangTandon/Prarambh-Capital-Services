import React, { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const LazyImage = lazy(() => import("../LazyLoader/Lazy"));

const logos = [
  "/carousel/axis.png",
  "/carousel/hdfc-logo.png",
  "/carousel/icici.png",
  "/carousel/kotak.png",
  "/carousel/motilal.png",
  "/carousel/nipponindia.png",
  "/carousel/nse.jpg",
  "/carousel/PPFAS-MF.png",
  "/carousel/sbi.png",
  "/carousel/tata.png",
  "/carousel/whiteoak.png",
];

const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const totalWidth = 250 * logos.length * 2;

    const animate = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition - 0.5;
        return newPosition <= -totalWidth / 2 ? 0 : newPosition;
      });
    };

    const intervalId = setInterval(animate, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="my-20 z-0"
    >
      <h1 className="text-xl lg:text-3xl font-bold text-center text-white mb-10">
        Associated with
      </h1>
      <div className="relative w-[90%] rounded-xl max-w-[960px] h-28 mx-auto overflow-hidden bg-white shadow-lg">
        <div
          className="absolute top-0 left-0 flex"
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-[250px] h-28 px-6 py-4">
              <Suspense
                fallback={<div className="w-[250px] h-full bg-gray-200"></div>}
              >
                <LazyImage
                  src={logo}
                  alt={`${logo}}`}
                  className="w-[250px] h-full object-contain"
                />
              </Suspense>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-0"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-0"></div>
      </div>
    </motion.div>
  );
};

export default Carousel;
