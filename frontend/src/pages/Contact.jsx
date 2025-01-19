import React from 'react'
import { Textslider } from '../components/HomePage/Textslider';
import Loading from '../components/HomePage/Loading';
import PricingPlans from '../components/HomePage/PricingCard';
import AccordionAlwaysOpen from '../components/HomePage/Accordion';


  // src/pages/Contact.jsx
  const Contact = () => {
    return (
    //   <div className="min-h-screen w-full max-w-none px-4 py-8">
    //   <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      
    //   <iframe 
    //     src="https://advantage-ai.embed.clappia.com/app/OYZ046876" 
    //     className="w-full min-h-[600px]"
    //     allow="geolocation *; camera *; microphone *;" 
    //     frameBorder="0"
    //     marginHeight="0"
    //     marginWidth="0"
    //   > 
    //     Loading... 
    //   </iframe>
      
    //   <AccordionAlwaysOpen/>
    // </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        {/* <p className="text-gray-600">Get in touch with us.</p> */}
        
        <iframe src="https://advantage-ai.embed.clappia.com/app/OYZ046876" width="100%" height="600" allow="geolocation *; camera *; microphone *;" frameborder="0" marginheight="0" marginwidth="0"> Loading... </iframe>
        {/* <PricingPlans/> */}
       
        {/* <Loading/> */}
      </div>
    );
  };
  
  export default Contact;
