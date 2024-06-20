import React from 'react';
import { motion, useInView } from 'framer-motion';
import codeicon from '../../assets/code-fork.gif';
import eyeicon from '../../assets/eye.gif';

function Project({ imgSrc, title, description, codeLink, liveLink, languages }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.3 }}
      className="w-80 card rounded sm:w-3/6"
    >
      <div>
        <img className='rounded lazy-load-image-background lazy-load-image-loaded' src={imgSrc} alt="project-img" />
      </div>
      <div className='mx-3 my-3 px-3 py-3 flex gap-3 flex-col'>
        <p className='text-lg font-semibold'>{title}</p>
        <p className='text-gray-300'>{description}</p>
        <p className='  font-semibold'>{languages}</p>
        <div className="flex items-center gap-10">
          <div>
            <div className='flex items-center gap-1'>
              <img className='w-8' src={codeicon} alt="icon" />
              <div>
                <a href={codeLink}>View Code</a>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <img className='w-6' src={eyeicon} alt="icon" />
            <div>
              <a href={liveLink}>Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
