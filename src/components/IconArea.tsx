import React, { useState } from 'react';
const IconArea: React.FC<{ src: string }> = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-full relative w-full">
      <div
        className="p-12 w-full flex justify-center items-center relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ minHeight: '220px', transition: 'all 0.5s ease-in-out' }}
      >
        <img
          src={src}
          alt="アイコン"
          className="w-full max-w-xs h-auto object-cover rounded-full border-4 border-gray-200 shadow-lg transition-transform duration-700 hover:rotate-[10deg] z-10"
          style={{
            aspectRatio: '1/1',
            transition: 'all 0.5s ease-in-out',
          }}
        />

        {/* ホバー時に右へ伸びるラベル */}
        {['Portfolio', 'Career', 'Award', 'Hobby'].map((label, i) => (
            <div
            key={label}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%,-50%) translateY(${(i - 1.5) * 48}px) translateX(100px)`,
              width: isHovered ? '100%' : '0px',
              maxWidth: '400px',
              height: '40px',
              background: '#fff',
              color: '#222',
              borderRadius: '16px',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.12)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: isHovered ? '20px' : '0px',
              fontWeight: 700,
              fontSize: '1.2rem',
              letterSpacing: '0.02em',
              opacity: isHovered ? 1 : 0,
              transition: 'width 0.5s cubic-bezier(.4,0,.2,1), opacity 0.4s, padding-right 0.5s',
              zIndex: 5,
            }}
            >
            {isHovered && label}
            </div>
        ))}
      </div>
      <div className="w-full -mt-8">
        <h1
          className={`text-gray-200 font-semibold w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl transition-colors duration-500 ${
        isHovered ? 'text-gray-200' : 'text-transparent'
          }`}
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
    </div>
  );
};

export default IconArea;
