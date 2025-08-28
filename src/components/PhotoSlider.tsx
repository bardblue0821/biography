// ウィンドウに重ねて表示する文字用の子コンポーネント
import React, { useState } from 'react';
import Photo from './Photo';
import photo1 from '../assets/4c8C0BKg.jpg';
import photo2 from '../assets/VRChat_2023-10-04_23-15-08.604_1920x1080.png';
import photo3 from '../assets/VRChat_2024-01-15_15-25-12.422_3840x2160.png';
import photo4 from '../assets/VRChat_2024-02-07_00-14-01.583_1280x720.png';
import photo5 from '../assets/VRChat_2024-02-13_01-03-33.799_3840x2160.png';
import photo6 from '../assets/VRChat_2024-02-21_01-49-55.853_3840x2160.png';
import photo7 from '../assets/VRChat_2024-02-23_19-41-10.234_3840x2160.png';

const OverlayText: React.FC<{ text: string, index: number }> = ({ text, index }) => (
  <span
    className="text-white font-extrabold select-none"
    style={{
      fontSize: 'clamp(2rem, 8vw, 6rem)',
      lineHeight: 1.1,
      textAlign: 'left',
      display: 'block',
      textShadow: '0 4px 16px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.5)',
    }}
  >
    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', margin: 0, textAlign: 'left', textShadow: '0 4px 16px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.5)' }}>
      {index.toString().padStart(2, '0')}
    </h1>
    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', margin: 0, textAlign: 'left', textShadow: '0 4px 16px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.5)' }}>
      {text}
    </h1>
  </span>
);

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

const PhotoSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // 写真とテキストのリスト
  const photoData = [
    { src: photos[0], text: 'Biography', index: 1 },
    { src: photos[1], text: 'Dokoiku VR', index: 2 },
    { src: photos[2], text: 'VRChat', index: 3 },
    { src: photos[3], text: 'VRChat', index: 4 },
    { src: photos[4], text: 'VRChat', index: 5 },
    { src: photos[5], text: 'VRChat', index: 6 },
    { src: photos[6], text: 'VRChat', index: 7 },
  ];

  // クリックで次の写真へ
  const handleClick = () => {
    setCurrent((prev) => (prev + 1) % photoData.length);
  };

  // 前後のインデックス計算（ループ）
  const prevIdx = (current - 1 + photoData.length) % photoData.length;
  const nextIdx = (current + 1) % photoData.length;

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center relative cursor-pointer"
      onClick={handleClick}
      style={{ userSelect: 'none', minHeight: '500px' }}
      title="クリックで次の写真へ"
    >
      {/* 前の写真（上、中央に少し重なる） */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full scale-70 w-full aspect-[3/2] opacity-50 blur-xs grayscale pointer-events-none transition-all z-5">
        <Photo
          src={photoData[prevIdx].src}
          alt={`photo-prev`}
          className="w-full aspect-[3/2] object-cover rounded-md"
        />
      </div>

      {/* 現在の写真（中央） */}
      <div className="relative z-10 w-[90%] aspect-[3/2] flex items-center justify-center hover:scale-105 transition-transform duration-500">
        <Photo
          src={photoData[current].src}
          alt={`photo${current + 1}`}
          className="w-full aspect-[3/2] object-cover rounded-md shadow-lg brightness-[0.85] grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute left-0 bottom-0 w-full p-8 z-25 pointer-events-none flex items-end justify-start box-border">
          <OverlayText text={photoData[current].text} index={photoData[current].index} />
        </div>
      </div>

      {/* 次の写真（下、中央に少し重なる） */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 scale-70 w-full aspect-[3/2] opacity-50 blur-xs grayscale pointer-events-none transition-all z-5">
        <Photo
          src={photoData[nextIdx].src}
          alt={`photo-next`}
          className="w-full aspect-[3/2] object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export default PhotoSlider;
