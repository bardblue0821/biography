
import React, { useState, useCallback } from 'react';
import BackgroundImage from './components/BackgroundImage';
import IconArea from './components/IconArea';
import PhotoSlider from './components/PhotoSlider';
import iconImage from '/src/assets/icon.jpg';
import photo1 from '/src/assets/4c8C0BKg.jpg';
import photo2 from '/src/assets/VRChat_2023-10-04_23-15-08.604_1920x1080.png';
import photo3 from '/src/assets/VRChat_2024-01-15_15-25-12.422_3840x2160.png';
import photo4 from '/src/assets/VRChat_2024-02-07_00-14-01.583_1280x720.png';
import photo5 from '/src/assets/VRChat_2024-02-13_01-03-33.799_3840x2160.png';
import photo6 from '/src/assets/VRChat_2024-02-21_01-49-55.853_3840x2160.png';
import photo7 from '/src/assets/VRChat_2024-02-23_19-41-10.234_3840x2160.png';



function App() {
  // ページロード後に.fade-inへ.loadedクラスを追加
  React.useEffect(() => {
    const main = document.querySelector('.fade-in');
    setTimeout(() => {
      main?.classList.add('loaded');
    }, 1000);
  }, []);

  // 写真一覧
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
  ];
  const [photoIndex, setPhotoIndex] = useState(0);
  const [fade, setFade] = useState<'inTransition' | 'out-left' | 'in-left' | 'out-right' | 'in-right'>('inTransition');
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  // ホイールイベントで写真切り替え
    const showPhoto = useCallback((direction: 'next' | 'prev') => {
      if (fade !== 'inTransition') return;
      const isNext = direction === 'next';
      const outFade = isNext ? 'out-right' : 'out-left';
      const inFade = isNext ? 'in-right' : 'in-left';
      const next = isNext
        ? (photoIndex + 1) % photos.length
        : (photoIndex - 1 + photos.length) % photos.length;

      setFade(outFade);
      setTimeout(() => {
        setNextIndex(next);
        setFade(inFade);
        setTimeout(() => {
          setPhotoIndex(next);
          setNextIndex(null);
          setFade('inTransition');
        });
      }, 300);
    }, [fade, photoIndex, photos.length]);

  const handlePrev = useCallback(() => showPhoto('prev'), [showPhoto]);
  const handleNext = useCallback(() => showPhoto('next'), [showPhoto]);

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      showPhoto('next');
    } else if (e.deltaY < 0) {
      showPhoto('prev');
    }
  }, [showPhoto]);

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
        <PhotoSlider
          photos={photos}
          photoIndex={photoIndex}
          fade={fade}
          nextIndex={nextIndex}
          handleWheel={handleWheel}
          onPrev={handlePrev}
          onNext={handleNext}
          disabled={fade !== 'inTransition'}
        />
      </section>
    </main>
  );
}

export default App;
