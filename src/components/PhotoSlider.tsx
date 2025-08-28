// ウィンドウに重ねて表示する文字用の子コンポーネント
import React, { useState } from 'react';
import photo1 from '../assets/4c8C0BKg.jpg';
import photo2 from '../assets/VRChat_2023-10-04_23-15-08.604_1920x1080.png';
import photo3 from '../assets/VRChat_2024-01-15_15-25-12.422_3840x2160.png';

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

const photos = [photo1, photo2, photo3];


const PhotoSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // 写真とテキストのリスト
  const photoData = [
    { src: photos[0], text: 'Biography', index: 1 },
    { src: photos[1], text: 'Dokoiku VR', index: 2 },
    { src: photos[2], text: 'VRChat', index: 3 },
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
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-100%) scale(0.7)',
          width: '100%',
          aspectRatio: '3/2',
          opacity: 0.5,
          filter: 'blur(2px) grayscale(0.7)',
          zIndex: 5,
          pointerEvents: 'none',
          transition: 'all 0.5s',
        }}
      >
        <img
          src={photoData[prevIdx].src}
          alt={`photo-prev`}
          style={{
            width: '100%',
            aspectRatio: '3/2',
            objectFit: 'cover',
            borderRadius: '0.5rem',
          }}
        />
      </div>

      {/* 現在の写真（中央） */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '90%',
          aspectRatio: '3/2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={photoData[current].src}
          alt={`photo${current + 1}`}
          style={{
            width: '100%',
            aspectRatio: '3/2',
            objectFit: 'cover',
            borderRadius: '0.5rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            filter: 'brightness(0.85) grayscale(0.5) saturate(2)',
            transition: 'transform 0.5s',
          }}
        />
        {/* テキストがあれば表示 */}
        {photoData[current].text && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              padding: '2rem',
              zIndex: 25,
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              boxSizing: 'border-box',
            }}
          >
            <OverlayText text={photoData[current].text} index={photoData[current].index} />
          </div>
        )}
      </div>

      {/* 次の写真（下、中央に少し重なる） */}
      <div
        style={{
          position: 'absolute',
          top: '50%', // 中央より少し下
          left: '50%',
          transform: 'translateX(-50%) scale(0.7)',
          width: '100%',
          aspectRatio: '3/2',
          opacity: 0.5,
          filter: 'blur(2px) grayscale(0.7)',
          zIndex: 5,
          pointerEvents: 'none',
          transition: 'all 0.5s',
        }}
      >
        <img
          src={photoData[nextIdx].src}
          alt={`photo-next`}
          style={{
            width: '100%',
            aspectRatio: '3/2',
            objectFit: 'cover',
            borderRadius: '0.5rem',
          }}
        />
      </div>
    </div>
  );
}

export default PhotoSlider;
