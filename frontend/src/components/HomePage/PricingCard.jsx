import React from 'react';

const PricingCard = ({ title, price, features }) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col h-full w-full">
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    <div className="text-4xl font-bold text-white mb-6">${price}<span className="text-lg font-normal">/month</span></div>
    <ul className="space-y-2 mb-6 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className={`flex items-center ${feature.included ? 'text-white' : 'text-gray-500 line-through'}`}>
          {feature.included ? (
            <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
          {feature.text}
        </li>
      ))}
    </ul>
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
      Choose plan
    </button>
  </div>
);

const PricingPlans = () => {
  const plans = [
    {
      title: "Basic plan (Free)",
      price: 0,
      features: [
        { text: "1 team member", included: true },
        { text: "Unlimited use", included: true },
        { text: "Basic support", included: true },
        { text: "Collaborative support", included: false },
        { text: "10GB Cloud storage", included: false },
      ],
    },
    // {
    //   title: "Standard plan",
    //   price: 49,
    //   features: [
    //     { text: "2 team members", included: true },
    //     { text: "20GB Cloud storage", included: true },
    //     { text: "Integration help", included: true },
    //     { text: "Sketch Files", included: false },
    //     { text: "API Access", included: false },
    //   ],
    // },
    // {
    //   title: "Premium plan",
    //   price: 99,
    //   features: [
    //     { text: "5 team members", included: true },
    //     { text: "50GB Cloud storage", included: true },
    //     { text: "24/7 phone & email support", included: true },
    //     { text: "Sketch Files", included: true },
    //     { text: "API Access", included: true },
    //   ],
    // },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-neutral-950">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div> */}
      <h1 className="text-3xl font-bold mb-8 text-white">About Pricing?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
       <div className="md:col-start-2">
        
    {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default PricingPlans;