import React, { useState, useEffect } from 'react';
import DokoikuVR from './portofolio/DokoikuVR';
import SuperTodo from './portofolio/SuperTodo';
import Biography from './portofolio/Biography';

type PortfolioType = '' | 'DokoikuVR' | 'SuperTodo' | 'Biography';

interface PortfolioContentProps {
  content: PortfolioType;
  onChange: (value: PortfolioType) => void;
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
      <div style={{opacity: fadeIn ? 1 : 0, transition: 'opacity 0.4s'}}
        className="w-[90%] h-[90%] bg-gray-900 opacity-60 rounded-xl 
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          flex flex-col justify-center z-60">

        {/* 閉じるボタン */}
        <div className="w-full flex justify-end p-4">
          <button
            className="bg-transparent border-none text-2xl cursor-pointer leading-none"
            onClick={() => onChange('')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Close" style={{ color: 'white' }}>
              <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ポートフォリオコンテンツ */}
        <div className="overflow-auto scrollbar-hide pl-8 pb-8">
          {content === 'DokoikuVR' && <DokoikuVR />}
          {content === 'SuperTodo' && <SuperTodo />}
          {content === 'Biography' && <Biography />}
        </div>
      </div>
    </>
  );
};

export default PortfolioContent;