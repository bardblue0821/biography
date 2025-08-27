
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
  const [fade, setFade] = useState(false);

  // ホイールイベントで写真切り替え
  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (fade) return; // フェード中は無視
    setFade(true);
    setTimeout(() => {
      setFade(false);
      setPhotoIndex(i => {
        if (e.deltaY > 0) {
          return (i + 1) % photos.length;
        } else if (e.deltaY < 0) {
          return (i - 1 + photos.length) % photos.length;
        }
        return i;
      });
    }, 300);
  }, [fade, photos.length]);

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
            <img
              src={photos[photoIndex]}
              alt={`写真${photoIndex + 1}`}
              className={`object-cover w-full h-full transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-lg text-xl font-semibold pointer-events-none">
              写真{photoIndex + 1}の説明テキスト
            </div>
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
