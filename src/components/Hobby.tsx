import React from 'react';

const Hobby: React.FC = () => {
    return (
        <div className="flex  items-center h-screen w-full">
          <div className="w-[90%] h-[80%] bg-gray-900 opacity-80 p-10 flex flex-col justify-center items-center overflow-auto scrollbar-hide">
            <h1 className="text-sky-300 text-7xl">Hobby</h1>
            <h2 className="text-gray-200 text-4xl mt-8">XR Technology</h2>
            <p className="text-gray-200 mt-2">Creating 3D Worlds by Unity for VRChat</p>

            <h2 className="text-white text-4xl mt-8">Audio Signal Processing</h2>
            <p className="text-white mt-2">Making a software synthesizer and effects</p>
            <h2 className="text-white text-4xl mt-8">Creative Activity</h2>
            <p className="text-white mt-2">Composing Music / Illustrating</p>
            <h2 className="text-gray-200 text-4xl mt-8">Smile Together 😊</h2>
          </div>
        </div>
      );
};

export default Hobby;