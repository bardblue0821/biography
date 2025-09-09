import React, { useEffect, useState } from 'react';

const HobbyEng = () => {
  return (
    <div className="text-gray-200 h-full">
      <h1 className="text-sky-300 xl:text-8xl text-7xl zen-kaku-gothic-new-black">Hobby</h1>
      <h2 className="text-xl mt-2">Smile Together 😊</h2>
      <h2 className="xl:text-5xl text-4xl mt-12 zen-kaku-gothic-new-bold">Web App Dev</h2>
      <p className="xl:text-2xl text-xl mt-3 zen-kaku-gothic-new-regular">Aiming to share experiences and support efficiency</p>
      <h2 className="xl:text-5xl text-4xl mt-12 zen-kaku-gothic-new-bold">XR Technology</h2>
      <p className="xl:text-2xl text-xl mt-3 zen-kaku-gothic-new-regular">Creating 3D Worlds by Unity for VRChat</p>
      <p className="xl:text-2xl text-xl mt-1 zen-kaku-gothic-new-regular">Total users: 12,000+</p>
      <h2 className="xl:text-5xl text-4xl mt-12 zen-kaku-gothic-new-bold">Audio Signal Processing</h2>
      <p className="xl:text-2xl mt-3 text-xl zen-kaku-gothic-new-regular">Developing synthesizer and effect software</p>
      <h2 className="xl:text-5xl text-4xl mt-12 zen-kaku-gothic-new-bold">Creative Activity</h2>
      <p className="xl:text-2xl mt-3 text-xl zen-kaku-gothic-new-regular">Composing music / Illustrating</p>
    </div>
  );
};

const HobbyJpn = () => {
  return (
    <div className="text-gray-200 h-full">
      <h1 className="text-sky-300 xl:text-8xl text-7xl zen-kaku-gothic-new-black">趣味</h1>
      <h2 className="text-xl mt-2 zen-kaku-gothic-new-regular">みんなで笑うこと 😊</h2>
      <h2 className="xl:text-5xl text-4xl mt-12 zen-kaku-gothic-new-bold">Web アプリ開発</h2>
      <p className="xl:text-2xl text-xl mt-3 zen-kaku-gothic-new-regular">体験共有や効率化支援を目指す</p>
      <h2 className="xl:text-5xl text-4xl mt-12 zen-kaku-gothic-new-bold">XR 技術</h2>
      <p className="xl:text-2xl text-xl mt-3 zen-kaku-gothic-new-regular">Unity で VRChat 向け 3D モデルを制作</p>
      <p className="xl:text-2xl text-xl mt-1 zen-kaku-gothic-new-regular">総利用者数 12,000 人達成</p>
      <h2 className="xl:text-5xl text-4xl mt-12 zen-kaku-gothic-new-bold">音響信号処理</h2>
      <p className="xl:text-2xl mt-3 text-xl zen-kaku-gothic-new-regular">シンセサイザー・エフェクト ソフト開発</p>
      <h2 className="xl:text-5xl text-4xl mt-12 zen-kaku-gothic-new-bold">創作活動</h2>
      <p className="xl:text-2xl mt-3 text-xl zen-kaku-gothic-new-regular">作曲・イラスト制作</p>
    </div>
  );
};

const Hobby: React.FC<{ lang: 'ja' | 'en' }> = ({ lang }) => {
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
          {displayLang === 'ja' ? (<HobbyJpn />) : (<HobbyEng />)}
        </div>
      </div>
    </div>
  );
};

export default Hobby;