// src/pages/About.jsx
import React from "react";

import { About1 } from "../components/HomePage/About1";
import PricingPlans from "../components/HomePage/PricingCard";
import Heropage from "../components/HomePage/Heropage";

  const About = () => {
    return (
      <div className="w-full bg-neutral-950">
  

        <About1/>
        <Heropage/>
        <PricingPlans/>
      </div>
    );
  };
  
  export default About;
  
  