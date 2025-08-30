import React, { useState } from 'react';
import iconImage from '/src/assets/icon.jpg';

type ChildProps = {
  onChange: (newValue: "portfolio" | "career" | "hobby") => void;
};

const IconArea: React.FC<ChildProps> = ({ onChange }: ChildProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full -mb-8">
        <h1
          className={`${isHovered ? 'text-gray-200' : 'text-transparent'} text-gray-200 font-semibold w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl transition-colors duration-500`}
          style={{
            textShadow: `
              -5px -5px 0 #fff, 
              5px -5px 0 #fff, 
              -5px 5px 0 #fff, 
              5px 5px 0 #fff, 
            `,
          }}
        >
          Hi! I'm<br />
          Bardblue
        </h1>
      </div>

      <div
        className="p-12 w-full flex justify-center items-center relative"
        style={{ minHeight: '220px', transition: 'all 0.5s ease-in-out' }}
      >
        <img
          src={iconImage}
          alt="アイコン"
          className="w-full max-w-xs h-auto object-cover rounded-full border-4 border-gray-200 shadow-lg transition-transform duration-700 hover:rotate-[10deg] z-10"
          style={{
            aspectRatio: '1/1',
            transition: 'all 0.5s ease-in-out',
          }}
        />
      </div>

      <div className={`${isHovered ? 'text-gray-200' : 'text-transparent'} w-full -mt-8 flex-col justify-center items-center relative`}>
        <div className="font-semibold w-full text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-300 hover:text-sky-300 cursor-pointer">
          <button onClick={() => onChange('portfolio')} className="cursor-pointer"><h1>Portfolio</h1></button>
        </div>
        <div className="font-semibold w-full text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-300 hover:text-sky-300 cursor-pointer">
          <button onClick={() => onChange('career')} className="cursor-pointer"><h1>Career</h1></button>
        </div>
        <div className="font-semibold w-full text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-300 hover:text-sky-300 cursor-pointer"> 
          <button onClick={() => onChange('hobby')} className="cursor-pointer"><h1>Hobby</h1></button>
        </div>
      </div>
    </div>

    
  );
};

export default IconArea;
