import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
  } from "framer-motion";
  import React, { useRef } from "react";
  
  export const Textslider = () => {
    const targetRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
    const scrollVelocity = useVelocity(scrollYProgress);
  
    const skewXRaw = useTransform(
      scrollVelocity,
      [-0.5, 0.5],
      ["45deg", "-45deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 200, damping: 10 });
  
    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 40, damping: 50 });
  
    return (
      <section
        ref={targetRef}
        className="h-[100vh] bg-neutral-50 text-neutral-950"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.p
            style={{ skewX, x }}
            className="origin-bottom-right whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
          >
            Nothing in this world can take the place of persistence. Talent will
            not; nothing is more common than unsuccessful men with talent. Genius
            will not; unrewarded genius is almost a proverb. Education will not;
          </motion.p>
        </div>
      </section>
    );
  };