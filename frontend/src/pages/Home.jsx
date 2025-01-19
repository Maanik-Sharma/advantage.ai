import React from 'react'
import Heropage from '../components/HomePage/Heropage';
import Textbubble from '../components/HomePage/Textbubble';
import Herosection2 from '../components/HomePage/Herosection2';
import { About1 } from '../components/HomePage/About1';
import { HeroAlternate } from '../components/HomePage/HeroAlternate';
import Accordion from '../components/HomePage/Accordion';
import Footer from '../components/HomePage/footer';

// src/pages/Home.jsx
const Home = () => {
    return (
        <div className="w-full">
        <HeroAlternate/>
        <Herosection2 />
        <About1/>
        <Heropage />
        {/* <Textbubble /> */}
        <Accordion/>
        <Footer/>
        {/* <Textbubble/>
        <Herosection2/> */}
        
      </div>
      
    );
  };
  
  export default Home;
