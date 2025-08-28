// ウィンドウに重ねて表示する文字用の子コンポーネント
import React from 'react';
import photo1 from '../assets/4c8C0BKg.jpg';
import photo2 from '../assets/VRChat_2023-10-04_23-15-08.604_1920x1080.png';
import photo3 from '../assets/VRChat_2024-01-15_15-25-12.422_3840x2160.png';

const OverlayText: React.FC<{ text: string, index: number }> = ({ text, index }) => (
  <span
    className="text-white font-extrabold drop-shadow-lg select-none"
    style={{
      fontSize: 'clamp(2rem, 8vw, 6rem)',
      lineHeight: 1.1,
      textAlign: 'left',
      display: 'block',
    }}
  >
    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', margin: 0, textAlign: 'left' }}>
      {index.toString().padStart(2, '0')}
    </h1>
    <h1 style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', margin: 0, textAlign: 'left' }}>{text}</h1>
  </span>
);

const photos = [photo1, photo2, photo3];

const PhotoSlider: React.FC = () => {
  return (
    <>
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative" style={{ zIndex: 10 }}>
        <div>
          {/* 写真1 */}
          <img
            src={photos[0]}
            alt="photo1"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '-25%',
              width: '90%',
              aspectRatio: '3/2',
              objectFit: 'cover',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              filter:
                'brightness(0.75) grayscale(1) sepia(1) hue-rotate(190deg) saturate(3)',
              transition: 'transform 0.5s',
              zIndex: 10,
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateX(-50%) scale(1.03)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateX(-50%)';
            }}
          />
        </div>
        <div
          style={{ position: 'relative', width: '100%', height: '0', paddingTop: '66.6667%', transition: 'transform 0.5s, z-index 0.2s', zIndex: 20 }}
          onMouseOver={e => {
            const div = e.currentTarget as HTMLDivElement;
            div.style.transform = 'scale(1.03)';
            div.style.zIndex = '100';
            // 画像のフィルターも変化させる
            const img = div.querySelector('img');
            if (img) img.style.filter = 'grayscale(0) sepia(0) hue-rotate(0deg) saturate(1)';
          }}
          onMouseOut={e => {
            const div = e.currentTarget as HTMLDivElement;
            div.style.transform = '';
            div.style.zIndex = '20';
            // 画像のフィルターも戻す
            const img = div.querySelector('img');
            if (img) img.style.filter = 'grayscale(1) sepia(1) hue-rotate(190deg) saturate(3)';
          }}
        >
          {/* 写真2 */}
          <img
            src={photos[1]}
            alt="photo2"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              aspectRatio: '3/2',
              objectFit: 'cover',
              borderRadius: '0.5rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              filter:
                'grayscale(1) sepia(1) hue-rotate(190deg) saturate(3)',
              transition: 'filter 0.2s',
              zIndex: 20,
            }}
          />
          {/* OverlayTextを写真2の左下に絶対配置（画像の枠内） */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              padding: '2rem',
              zIndex: 30,
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              boxSizing: 'border-box',
              transition: 'transform 0.5s',
            }}
          >
            <OverlayText text="Dokoiku VR" index={1} />
          </div>
        </div>
        <div>
          {/* 写真3 */}
          <img
            src={photos[2]}
            alt="photo3"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '-25%',
              width: '90%',
              aspectRatio: '3/2',
              objectFit: 'cover',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              filter:
                'brightness(0.75) grayscale(1) sepia(1) hue-rotate(190deg) saturate(3)',
              transition: 'transform 0.5s',
              zIndex: 10,
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateX(-50%)';
            }}
          />
        </div>
  {/* OverlayTextの全体配置は削除（写真2内に移動済み） */}
      </div>
    </>
  );
};

export default PhotoSlider;
