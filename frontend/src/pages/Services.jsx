import React from 'react'
import ProductCard from '../components/HomePage/ProductCard';
import SummarizePage from './Products/SummarizePage';
import QaBot from './Products/QaBot';
import BlogWriter from './Products/BlogWriter';


const Services = () => {
    return (
      <div className="w-full">
        <ProductCard/>
        {/* <SummarizePage/>
        <QaBot/>
        <BlogWriter/> */}
      </div>
    );
  };
  
  export default Services;
