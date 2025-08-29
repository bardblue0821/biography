
import React from 'react';
import BackgroundImage from './components/BackgroundImage';
import IconArea from './components/IconArea';
import PhotoSlider from './components/PhotoSlider';
import iconImage from '/src/assets/icon.jpg';
import Footer from './components/Footer';



function App() {
  React.useEffect(() => {
    // bodyにもTailwindのoverflow-hiddenとh-screenを付与して、スクロールバーを消す
    document.body.classList.add('overflow-hidden', 'h-screen');
    const main = document.querySelector('.fade-in');
    setTimeout(() => {
      main?.classList.add('loaded');
    }, 1000);
    return () => {
      document.body.classList.remove('overflow-hidden', 'h-screen');
    };
  }, []);

  return (
    <main className="fade-in relative">
      {/*ウェルカムメッセージ*/}
      <div className="fade-black absolute inset-0 z-1000 pointer-events-none flex items-center justify-center">
        <span className="welcome-text text-white text-5xl font-bold tracking-wide"><h1>Welcome</h1></span>
      </div>

      {/* 画面分割レイアウト */}
      <section className="relative h-screen w-full flex">
        <BackgroundImage />
        <div className="flex h-full w-full">
          {/* アイコンエリア */}
          <div className="h-full w-1/3">
            <IconArea src={iconImage} />
          </div>
          {/* ポートフォリオエリア */}
          <div className="h-full w-2/3 lg:px-16">
            <PhotoSlider />
          </div>
        </div>
      </section>

  {/* フッターをウィンドウ下端に固定表示 */}
  <Footer />
    </main>
  );
}

export default App;
