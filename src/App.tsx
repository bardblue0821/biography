
import React, { useState, useCallback } from 'react';
import bgImage from '/src/assets/wolca_newspaper.jpg';
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
  const [fade, setFade] = useState<'none' | 'out-left' | 'in-left' | 'out-right' | 'in-right'>('none');
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  // ホイールイベントで写真切り替え
  const showPhoto = useCallback((direction: 'next' | 'prev') => {
    if (fade !== 'none') return;
    let next: number;
    if (direction === 'next') {
      setFade('out-left');
      setTimeout(() => {
        next = (photoIndex + 1) % photos.length;
        setNextIndex(next);
        setFade('in-right');
        setTimeout(() => {
          setPhotoIndex(next);
          setNextIndex(null);
          setFade('none');
        });
      }, 300);
    } else {
      setFade('out-right');
      setTimeout(() => {
        next = (photoIndex - 1 + photos.length) % photos.length;
        setNextIndex(next);
        setFade('in-left');
        setTimeout(() => {
          setPhotoIndex(next);
          setNextIndex(null);
          setFade('none');
        });
      }, 300);
    }
  }, [fade, photoIndex, photos.length]);

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

      {/* 背景画像 */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={bgImage}
          alt="背景"
          className="w-full h-full object-cover brightness-50"
        />

        {/* 右側に写真表示 */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center justify-center bg-white/70 rounded-xl shadow-xl border-2 border-white overflow-hidden max-w-[90vw] w-[60vw] h-[70vh] z-10"
          onWheel={handleWheel}
        >
          <div className="relative w-full h-full">
            {/* 現在の写真（フェードイン中は非表示） */}
            {(fade === 'none' || fade.startsWith('out')) && (
              <img
                src={photos[photoIndex]}
                alt={`写真${photoIndex + 1}`}
                className={`object-cover w-full h-full absolute top-0 left-0 transition-all duration-300
                  ${fade === 'out-left' ? 'opacity-0 -translate-x-10' : ''}
                  ${fade === 'out-right' ? 'opacity-0 translate-x-10' : ''}
                  ${fade === 'none' ? 'opacity-100 translate-x-0' : ''}`}
                style={{ zIndex: 2 }}
              />
            )}
            {/* 次の写真（フェードイン用） */}
            {(fade === 'in-right' || fade === 'in-left') && nextIndex !== null && (
              <img
                src={photos[nextIndex]}
                alt={`写真${nextIndex + 1}`}
                className={`object-cover w-full h-full absolute top-0 left-0 transition-all duration-300 opacity-100
                  ${fade === 'in-right' ? 'translate-x-10' : ''}
                  ${fade === 'in-left' ? '-translate-x-10' : ''}`}
                style={{ zIndex: 3 }}
              />
            )}
          </div>
        </div>

        {/* アイコン */}
        <img
          src={iconImage}
          alt="アイコン"
          className="absolute left-8 top-1/2 -translate-y-1/2 w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </section>
    </main>
  );
}

export default App;
