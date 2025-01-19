import React from "react";

const Loading = () => {
  return (
    <div>
      <CutoutTextLoader
        height="450px"
        background="white"
        // NOTE: Using GIFs for the background looks super cool :)
        imgUrl="/imgs/random/11.jpg"
      />
    </div>
  );
};

const CutoutTextLoader = ({ height, background, imgUrl }) => {
  return (
    <div className="relative" style={{ height }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/assets/black-noise.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      
      {/* Pulsing Background */}
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      
      {/* Cutout Text */}
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url(/assets/noise.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)", // Responsive font size
          lineHeight: height, // Line height based on passed height
        }}
      >
        Loading...
      </span>
    </div>
  );
};

export default Loading;
