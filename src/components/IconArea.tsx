import React from 'react';

const IconArea: React.FC<{ src: string }> = ({ src }) => (
  <div className="flex flex-col items-center justify-center h-full relative w-full">
    <div className="w-full flex justify-center items-center">
      <img
        src={src}
        alt="アイコン"
        className="w-full max-w-xs h-auto object-cover rounded-full border-4 border-black shadow-lg"
        style={{ aspectRatio: '1/1' }}
      />
    </div>
    
    <div className="w-full mt-4">
      <h1
        className="px-4 drop-shadow text-gray-200 font-semibold w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        Bardblue
      </h1>
      <p
        className="px-4 drop-shadow text-gray-200 font-medium w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        バードブルー
      </p>
    </div>
    
  </div>
);

export default IconArea;
