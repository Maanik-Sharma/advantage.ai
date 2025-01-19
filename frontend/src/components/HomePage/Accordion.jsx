import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { useNavigate } from "react-router-dom";

export default function AccordionAlwaysOpen() {
  const [show, setShow] = useState({
    collapse1: false,
    collapse2: false,
    collapse3: false,
  });

  const toggleShow = (value) => {
    setShow({ ...show, ...value });
  };

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full bg-neutral-950">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-white">Curiosity Corner</h1>
        <div className="space-y-4">
          {/* First Item */}
          <div className="border border-neutral-600">
            <h2 className="mb-0">
              <button
                className="w-full px-6 py-4 text-left text-white flex items-center justify-between hover:bg-neutral-900 transition-colors"
                type="button"
                onClick={() => toggleShow({ collapse1: !show.collapse1 })}
                aria-expanded={show.collapse1}
                aria-controls="collapseOne"
              >
                How can we help you today?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 transform transition-transform ${
                    show.collapse1 ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </h2>
            <TECollapse show={show.collapse1}>
              <div className="px-6 py-4 text-white border-t border-neutral-600">
                <p>
                Elevate your brand. Engage your audience. Grow your business. We're here to help. Contact us 24/7.
                </p>
              </div>
            </TECollapse>
          </div>

          {/* Second Item */}
          <div className="border border-neutral-600">
            <h2 className="mb-0">
              <button
                className="w-full px-6 py-4 text-left text-white flex items-center justify-between hover:bg-neutral-900 transition-colors"
                type="button"
                onClick={() => toggleShow({ collapse2: !show.collapse2 })}
                aria-expanded={show.collapse2}
                aria-controls="collapseTwo"
              >
                What services do you offer?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 transform transition-transform ${
                    show.collapse2 ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </h2>
            <TECollapse show={show.collapse2}>
              <div className="px-6 py-4 text-white border-t border-neutral-600">
                <p>
                Consulting, development, design, & support. <br/> We tailor AI solutions for your needs:
                <ul>
                  <li>• Content generation</li>
                
                <li>• Personalized video</li>

                <li>• Customer engagement</li>

                <li>• Data-driven insights</li>
                 
                </ul>
                
                </p>
              </div>
            </TECollapse>
          </div>

          {/* Third Item */}
          <div className="border border-neutral-600">
            <h2 className="mb-0">
              <button
                className="w-full px-6 py-4 text-left text-white flex items-center justify-between hover:bg-neutral-900 transition-colors"
                type="button"
                onClick={() => toggleShow({ collapse3: !show.collapse3 })}
                aria-expanded={show.collapse3}
                aria-controls="collapseThree"
              >
                How can I get started?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 transform transition-transform ${
                    show.collapse3 ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </h2>
            <TECollapse show={show.collapse3}>
              <div className="px-6 py-4 text-white border-t border-neutral-600">
                <p>
                  Getting started is easy! Simply reach out to our team, and we'll guide you through the process. We'll assess your needs and create a customized plan for your success.
                </p>
              </div>
            </TECollapse>
          </div>
        </div>

        {/* Contact Button */}
        <button
      onClick={handleContactClick}
      className="mt-8 border border-neutral-600 px-6 py-2 text-sm uppercase text-white hover:bg-neutral-900 transition-colors"
    >
          CONTACT US
        </button>
      </div>
    </div>
  );
}
// import React, { useState } from "react";
// import { TECollapse } from "tw-elements-react";

// export default function Accordion() {
//   const [activeElement, setActiveElement] = useState("");

//   const handleClick = (value) => {
//     if (value === activeElement) {
//       setActiveElement("");
//     } else {
//       setActiveElement(value);
//     }
//   };

//   return (
//     <>
//       <div id="accordionExample" className="px-12 py-6 bg-neutral-950 mt-05">
//       <h1 className="text-slate-100 px-12 py-6 text-xl">FA Q's</h1>
//         <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 px-12 py-6">
//           <h2 className="mb-0" id="headingOne">
//             <button 
//               className={`${
//                 activeElement === "element1" &&
//                 `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
//               } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
//               type="button"
//               onClick={() => handleClick("element1")}
//               aria-expanded="true"
//               aria-controls="collapseOne"
//             >
//               Accordion Item #1
//               <span
//                 className={`${
//                   activeElement === "element1"
//                     ? `rotate-[-180deg] -mr-1`
//                     : `rotate-0 fill-[#212529] dark:fill-white`
//                 } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="h-6 w-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </h2>
//           <TECollapse
//             show={activeElement === "element1"}
//             className="!mt-0 !rounded-b-none !shadow-none"
//           >
//             <div className="px-5 py-4">
//               <strong>This is the first item's accordion body.</strong> Lorem
//               ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
//               rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
//               ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
//               ante. Pellentesque at odio euismod, mattis urna ac, accumsan
//               metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
//               Curabitur non sollicitudin neque.
//             </div>
//           </TECollapse>
//         </div>
//       {/* --------- */}
//       <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 px-12 py-6">
//         <h2 className="mb-0" id="headingTwo">
//           <button
//             className={`${
//               activeElement === "element2" &&
//               `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
//             } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
//             type="button"
//             onClick={() => handleClick("element2")}
//             aria-expanded="true"
//             aria-controls="collapseOne"
//           >
//             Accordion Item #2
//             <span
//               className={`${
//                 activeElement === "element2"
//                   ? `rotate-[-180deg] -mr-1`
//                   : `rotate-0 fill-[#212529] dark:fill-white`
//               } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="h-6 w-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                 />
//               </svg>
//             </span>
//           </button>
//         </h2>
//         <TECollapse
//           show={activeElement === "element2"}
//           className="!mt-0 !rounded-b-none !shadow-none"
//         >
//           <div className="px-5 py-4">
//             <strong>This is the second item's accordion body.</strong> Lorem
//             ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
//             rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
//             ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
//             ante. Pellentesque at odio euismod, mattis urna ac, accumsan metus.
//             Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
//             Curabitur non sollicitudin neque.
//           </div>
//         </TECollapse>
//       </div>
//       <div className="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 px-12 py-6">
//         <h2 className="accordion-header mb-0" id="headingThree">
//           <button
//             className={`${
//               activeElement === "element3"
//                 ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
//                 : `transition-none rounded-b-[15px]`
//             } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
//             type="button"
//             onClick={() => handleClick("element3")}
//             aria-expanded="true"
//             aria-controls="collapseOne"
//           >
//             Accordion Item #3
//             <span
//               className={`${
//                 activeElement === "element3"
//                   ? `rotate-[-180deg] -mr-1`
//                   : `rotate-0 fill-[#212529] dark:fill-white`
//               } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="h-6 w-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                 />
//               </svg>
//             </span>
//           </button>
//         </h2>
//         <TECollapse
//           show={activeElement === "element3"}
//           className="!mt-0 !shadow-none"
//         >
//           <div className="px-5 py-4">
//             <strong>This is the third item's accordion body.</strong> Lorem
//             ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
//             rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
//             ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
//             ante. Pellentesque at odio euismod, mattis urna ac, accumsan metus.
//             Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
//             Curabitur non sollicitudin neque.
//           </div>
//         </TECollapse>
//       </div>
//       </div>
//       {/* -------div replaced */}
//     </>
//   );
// }
