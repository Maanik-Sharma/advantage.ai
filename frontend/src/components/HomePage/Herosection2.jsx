import React from "react";
import { motion } from "framer-motion";

const Herosection2 = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden ">
    {/* <img src="src/assets/tv_old.png" alt="Old TV" className="w-full h-auto" /> */}
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
//     <div className="relative w-full max-w-md mx-auto">
//   {/* TV Image */}
//   <img src="src/assets/tv_old.png" alt="Old TV" className="w-full h-auto" />

//   {/* Noise Animation, positioned inside the TV screen */}
//   <motion.div
//     initial={{ transform: "translateX(-10%) translateY(-10%)" }}
//     animate={{
//       transform: "translateX(10%) translateY(10%)",
//     }}
//     transition={{
//       repeat: Infinity,
//       duration: 0.2,
//       ease: "linear",
//       repeatType: "mirror",
//     }}
//     style={{
//       backgroundImage: 'url("src/assets/noise.png")',
//     }}
//     className="pointer-events-none absolute inset-x-[10%] inset-y-[20%] w-[80%] h-[60%] opacity-[15%]"
//   />
// </div>


    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        // backgroundImage: 'url("src/assets/tv_old.png")',
        // backgroundImage: 'url("src/assets/black-noise.png")',
        backgroundImage: 'url("/assets/noise.png")',

      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 pb-10">
      <p className="text-center text-7xl font-black text-neutral-50">
      Automate any workflow with AI
      </p>
      <p className="text-center text-neutral-400">
      Create content, generate leads, and run campaigns at scale—just like the big companies do, but with the agility of a small team. 📺
      </p>
      <div className="flex items-center justify-center gap-3">
      <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
          Pricing
       </button>
        <button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
          Try it free
        </button>
      </div>
    </div>
  );
};

export default Herosection2;


// import React from "react";
// import { motion } from "framer-motion";
// import oldTVImage from "../assets/tv_old.png"; // Adjust the path if needed

// const Herosection2 = () => {
//   return (
//     <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
//       <div className="relative w-[800px]">
//         {/* Old TV Image */}
//         <img
//           src={oldTVImage}
//           alt="Old TV"
//           className="w-full h-auto"
//         />
//         {/* TV Screen Content */}
//         <div className="absolute top-[12%] left-[17%] w-[66%] h-[54%] overflow-hidden bg-black rounded-lg">
//           <div className="relative w-full h-full">
//             <ExampleContent />
//             <FuzzyOverlay />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FuzzyOverlay = () => {
//   return (
//     <motion.div
//       initial={{ transform: "translateX(-10%) translateY(-10%)" }}
//       animate={{
//         transform: "translateX(10%) translateY(10%)",
//       }}
//       transition={{
//         repeat: Infinity,
//         duration: 0.2,
//         ease: "linear",
//         repeatType: "mirror",
//       }}
//       style={{
//         backgroundImage: 'url("../assets/black-noise.png"), url("../assets/noise.png")',
//       }}
//       className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
//     />
//   );
// };

// const ExampleContent = () => {
//   return (
//     <div className="flex flex-col justify-center items-center h-full p-4 text-white">
//       <h2 className="text-2xl font-bold mb-2">Fuzzy Overlay Example</h2>
//       <p className="text-sm mb-4 text-center">
//         This is a basic example of using a lo-fi fuzzy overlay 📺
//       </p>
//       <div className="flex space-x-2">
//         <button className="px-3 py-1 text-sm border border-white hover:bg-white hover:text-black transition-colors">
//           Pricing
//         </button>
//         <button className="px-3 py-1 text-sm bg-white text-black hover:bg-gray-200 transition-colors">
//           Try it free
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Herosection2;