import React, { useState, useEffect } from 'react';
import DokoikuVR from './portofolio/DokoikuVR/DokoikuVR';
import SuperTodo from './portofolio/SuperTodo/SuperTodo';
import Biography from './portofolio/Biography/Biography';

type PortfolioType = '' | 'DokoikuVR' | 'SuperTodo' | 'Biography';

interface PortfolioContentProps {
  content: PortfolioType;
  onChange: (value: PortfolioType) => void;
}

interface CloseButtonProps {
  onChange: (value: PortfolioType) => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onChange }) => {
  return(
    <button
      className="bg-transparent border-none text-2xl cursor-pointer leading-none group"
      onClick={() => onChange('')}
    >
      <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Close"
      className="text-white group-hover:text-red-500 transition-colors duration-200"
      >
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  )
}

const PortfolioContent: React.FC<PortfolioContentProps> = ({ content, onChange }) => {
  {/* フェードイン・フェードアウトのエフェクト */}
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    if (content) {
      setFadeIn(false);
      setTimeout(() => setFadeIn(true), 10);
    } else {
      setFadeIn(false);
    }
  }, [content]);

  return (
    <>
      <div style={{opacity: fadeIn ? 0.5 : 0, transition: 'opacity 0.4s'}}
        className="absolute top-0 left-0 w-full h-full bg-black z-55"></div>
      <div style={{opacity: fadeIn ? 1 : 0, transition: 'opacity 0.4s'}}
        className="w-full max-w-[80%] h-[90%] bg-gray-900 bg-opacity-40 rounded-xl 
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          flex flex-col justify-center z-60">

        {/* 閉じるボタン */}
        <div className="w-full flex justify-end p-4">
          <CloseButton onChange={onChange} />
        </div>

        {/* ポートフォリオコンテンツ */}
        <div className="overflow-auto scrollbar-hide pl-16 pb-16 pr-16">
          {content === 'DokoikuVR' && <DokoikuVR />}
          {content === 'SuperTodo' && <SuperTodo />}
          {content === 'Biography' && <Biography />}
        </div>
      </div>
    </>
  );
};

export default PortfolioContent;