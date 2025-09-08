import React, { useState, useEffect} from 'react';
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

const Icons = () => {
  return (
    <div className="mt-2">
      <div className="mt-4 flex space-x-4 justify-center items-center">
        <span><SiPython size={40} color="#3776AB" /></span>
        <span><SiCplusplus size={40} color="#00599C" /></span>
        <span><SiLaravel size={40} color="#FF2D20" /></span>
        <span><SiPhp size={54} color="#777BB4" /></span>
        <span><SiMysql size={56} color="#4479A1" /></span>
        <span><SiGit size={40} color="#F1502F" /></span>
      </div>
      <div className="mt-2 flex space-x-4 justify-center items-center">
        <span><SiReact size={40} color="#61DAFB" /></span>
        <span><SiNextdotjs size={40} color="#868686" /></span>
        <span><SiTailwindcss size={40} color="#06B6D4" /></span>
        <span><SiTypescript size={40} color="#3178C6" /></span>
        <span><SiDocker size={40} color="#2496ED" /></span>
        <span><FaAws size={40} color="#FF9900" /></span>
      </div>
    </div>
  )
}

const JobDescEng = () => {
  return (
    <div className="text-gray-200 h-full">
      <h1 className="text-sky-300 xl:text-8xl text-7xl zen-kaku-gothic-new-black">Career</h1>
      <h2 className="xl:text-5xl text-4xl mt-12 zen-kaku-gothic-new-bold">App Dev Engineer</h2>
      <ul className="text-xl list-disc list-inside mt-4 zen-kaku-gothic-new-regular">
      <li>New Product Dev / New Market Research</li>
      <li>Measurement Data Analysis Applications</li>
      <li>Factory Automation Software</li>
      </ul>
      
      <Icons />

      <h2 className="xl:text-5xl text-4xl mt-8 zen-kaku-gothic-new-bold">Achievements</h2>
      <ul className="list-disc text-xl list-inside mt-2 xl:mt-4 zen-kaku-gothic-new-regular">
      <li>
        Award for Outstanding Performance - New Market/New Product Development (2023)
      </li>
      <li>
        Patent: Non-destructive Inspection Method - Acoustic Signal Processing (2019)
      </li>
      <li>Acoustical Society of Japan Student Presentation Award (2017)</li>
      </ul>
    </div>
  );
};

const JobDescJpn = () => {
  return (
    <div className="text-gray-200 h-full">
      <h1 className="text-sky-300 text-7xl zen-kaku-gothic-new-black tracking-[-0.20em]">職務経歴</h1>
      <h2 className="text-4xl mt-12 zen-kaku-gothic-new-bold">職務内容</h2>
      <ul className="text-xl mt-4 list-disc list-inside zen-kaku-gothic-new-regular">
        <li>半導体試験アプリケーション開発</li>
        <li>新規製品開発 ／ 新規市場調査</li>
        <li>測定データ解析アプリケーション開発</li>
        <li>工場自動化ソフトウェア運用保守</li>
      </ul>
      
      <Icons />

      <h2 className="text-4xl mt-8 zen-kaku-gothic-new-bold">実績</h2>
      <ul className="text-xl mt-4 list-disc list-inside zen-kaku-gothic-new-regular">
        <li>
          表彰 - 新規市場/新規製品開発 (2023)
        </li>
        <li>
          特許: 非破壊検査法 - 音響信号処理 (2019)
        </li>
        <li>日本音響学会 学生優秀発表賞 (2017)</li>
      </ul>
    </div>
  );
};

const Career: React.FC<{ lang: 'ja' | 'en' }> = ({ lang }) => {
  const [displayLang, setDisplayLang] = useState(lang);
    const [fade, setFade] = useState(false);
  
    useEffect(() => {
      setFade(true);
      const timer = setTimeout(() => {
        setDisplayLang(lang);
        setFade(false);
      }, 400);
      return () => clearTimeout(timer);
    }, [lang]);
  
  return (
    <div className="flex items-center h-[95%] w-full relative">
      <div className="w-[90%] h-[80%] bg-gray-900 bg-opacity-80 p-10  overflow-auto scrollbar-hide rounded-xl">
        <div className={`transition-opacity duration-400 ${fade ? 'opacity-0' : 'opacity-100'} w-full`}>
          {displayLang === 'ja' ? <JobDescJpn /> : <JobDescEng />}
        </div>
      </div>
    </div>
  );
};

export default Career;