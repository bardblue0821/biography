
import React from 'react';
import BackgroundImage from './components/BackgroundImage';
import IconArea from './components/IconArea';
import PhotoSlider from './components/PhotoSlider';
import iconImage from '/src/assets/icon.jpg';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

function App() {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main className="relative h-screen w-full flex">
      {/*ウェルカムメッセージ*/}
      <Welcome />

      {/* 画面分割レイアウト */}
      <div className="flex h-full w-full">
        {/* アイコンエリア */}
        <div className="h-full w-1/3">
          <IconArea src={iconImage} />
        </div>
        {/* ポートフォリオエリア */}
        <div className="h-full w-2/3 z-10 flex flex-col justify-center items-center">
          <PhotoSlider />
        </div>
      </div>
      
      <BackgroundImage />
      <Footer />
    </main>
  );
}

export default App;
