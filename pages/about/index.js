/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// import CountUp from "react-countup";
import CountUp from "react-countup";


// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiSpringboot,
  SiKubernetes,
  SiAmazonaws,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title: 'Backend & DevOps',
        icons: [
          <FaNodeJs />,
          <SiSpringboot />,
          <FaDocker />,
          <SiKubernetes />,
          <FaJava />, 
          <SiAmazonaws />, 
        ],
      },
      
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Entrepreneurial Leader - Proxy Minds',
        stage: '2022 - present',
      },
      {
        title: 'Senior Engineer - Mindtree Limited',
        stage: '2021 - 2022',
      },
      {
        title: 'Executive SDE-1 - Ninjacart',
        stage: '2020 - 2021',
      },
      {
        title: 'Programmer Analyst - UX/UI - Cognizant',
        stage: '2018 - 2020',
      },  
    ],
  },
  {
    title: 'Qualifications',
    info: [
      {
        title: 'Computer Science & Engineering',
        stage: '2014 - 2018',
      },
    ],
  },
];



const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        {/* <Avatar /> */}
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            variants={fadeIn('right', 0.2)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2">Captivating<span className="text-accent"> stories</span> give rise to magnificent designs.</motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              Two years ago, I embarked on my freelancing journey as a developer. Since then, I've engaged in 
              remote work for agencies, consulted for startups, and collaborated on digital products for both 
              business and consumer use.
            </motion.p>
            <motion.div 
              variants={fadeIn('right', 0.6)} 
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
              <div className="flex flex-1 xl:gap-x-6">
                <div className="relative flex-1 after:w[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={5} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
                </div>
                {/* Clients */}
                <div className="relative flex-1 after:w[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={25} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
                </div>
                {/* Projects */}
                <div className="relative flex-1 after:w[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={40} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
                </div>
              </div>
            </motion.div>
        </div>
        <motion.div 
          variants={fadeIn('left', 0.4)} 
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return(
                <div key={itemIndex} 
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                      } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                      onClick={() => setIndex(itemIndex)}
                    >
                    {item.title}
                </div>
              )
            })}
          </div>
          <div className="py-2  xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex)=>{
                    return <div key={itemIndex} className="text-2xl text-white">{icon}</div>;
                  })}
                </div>
                </div>
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
