
import React from 'react';
import BackgroundImage from './components/BackgroundImage';
import IconArea from './components/IconArea';
import iconImage from '/src/assets/icon.jpg';



function App() {
  // ページロード後に.fade-inへ.loadedクラスを追加
  React.useEffect(() => {
    const main = document.querySelector('.fade-in');
    setTimeout(() => {
      main?.classList.add('loaded');
    }, 1000);
  }, []);

  // 写真関連のstate・関数はすべて削除済み

  return (
    <main className="fade-in relative">
      {/*ウェルカムメッセージ*/}
      <div className="fade-black absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
        <span className="welcome-text text-white text-5xl font-bold tracking-wide">Welcome</span>
      </div>

      {/* 画面分割レイアウト */}
      <section className="relative h-screen w-full overflow-hidden flex">
        <BackgroundImage />
        <IconArea src={iconImage} />
  {/* PhotoSliderは削除済み */}
      </section>
    </main>
  );
}

export default App;
