import React from 'react';
import {
  SiPython,
  SiCplusplus,
  SiGit,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiDocker,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const Career: React.FC = () => {
  return (
    <div className="flex  items-center h-screen w-full">
      <div className="w-[90%] h-[80%] bg-gray-900 opacity-80 p-10 flex flex-col justify-center items-center overflow-auto scrollbar-hide">
        <h1 className="text-sky-300 text-7xl">Career</h1>
        <h1 className="text-white text-5xl mt-4">App Dev Engineer</h1>
        <h2 className="text-gray-200 text-3xl mt-8">5 years</h2>
        <ul className="text-gray-200 list-disc list-inside mt-2">
          <li>Semiconductor Production Test App Dev</li>
          <li>New Product Dev and Market Research</li>
          <li>Measurement Data Analysis App Dev</li>
          <li>Factory Automation Dev/Ops Engineering</li>
        </ul>
        <div className="mt-2">
          <div className="mt-4 flex space-x-4 justify-center items-center">
            <span><SiPython size={40} color="#3776AB" /></span>
            <span><SiCplusplus size={40} color="#00599C" /></span>
            <span><SiLaravel size={40} color="#FF2D20" /></span>
            <span><SiPhp size={40} color="#777BB4" /></span>
            <span><SiMysql size={40} color="#4479A1" /></span>
            <span><SiGit size={40} color="#F1502F" /></span>
          </div>
          <div className="mt-4 flex space-x-4 justify-center items-center">
            <span><SiReact size={40} color="#61DAFB" /></span>
            <span><SiNextdotjs size={40} color="#000000" /></span>
            <span><SiTailwindcss size={40} color="#06B6D4" /></span>
            <span><SiTypescript size={40} color="#3178C6" /></span>
            <span><SiDocker size={40} color="#2496ED" /></span>
            <span><FaAws size={40} color="#FF9900" /></span>
          </div>
        </div>
        <h2 className="text-white text-3xl mt-8">Accomplishments</h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>
            Recognition Award for Outstanding Performance <br />
            - New Market/Product Development (2023)
          </li>
          <li>
            Patent: Nondestructive Testing Method <br />
            - Acoustic Signal Processing (2019)
          </li>
          <li>Acoustical Society of Japan Student Excellence Award (2017)</li>
        </ul>
      </div>
    </div>
  );
};

export default Career;