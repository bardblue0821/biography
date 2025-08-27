import React from 'react';

const IconArea: React.FC<{ src: string }> = ({ src }) => (
  <div className="flex flex-col items-center justify-center w-1/3 h-full relative">
    <img
      src={src}
      alt="アイコン"
      className="w-64 h-64 object-cover rounded-full border-4 border-black shadow-lg"
    />
    <span className="mt-4 px-4 py-2 rounded text-gray-200 text-5xl font-semibold drop-shadow-lg">
      <h1 className="drop-shadow">Bardblue</h1>
      <p className="drop-shadow">バードブルー</p>
    </span>
  </div>
);

export default IconArea;
