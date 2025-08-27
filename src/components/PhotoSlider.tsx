import React from 'react';
import ArrowButton from './ArrowButton';


interface PhotoSliderProps {
  photos: string[];
  photoIndex: number;
  fade: string;
  nextIndex: number | null;
  handleWheel: (e: React.WheelEvent<HTMLDivElement>) => void;
  onPrev: () => void;
  onNext: () => void;
  disabled?: boolean;
}


const getPhotoClass = (fade: string, isCurrent: boolean) => {
  // out-left → in-right, out-right → in-left
  if (isCurrent) {
    if (fade === 'out-right') return 'opacity-0 translate-x-10';
    if (fade === 'out-left') return 'opacity-0 -translate-x-10';
    return 'opacity-100 translate-x-0';
  } else {
    if (fade === 'in-left') return 'opacity-100 translate-x-10';
    if (fade === 'in-right') return 'opacity-100 -translate-x-10';
    return 'opacity-100 translate-x-0';
  }
};

const getTextClass = (fade: string, isCurrent: boolean) => {
  if (isCurrent) {
    if (fade === 'out-right') return 'opacity-0 translate-x-10';
    if (fade === 'out-left') return 'opacity-0 -translate-x-10';
    return 'opacity-100 translate-x-0';
  } else {
    if (fade === 'in-left') return 'opacity-100 translate-x-10';
    if (fade === 'in-right') return 'opacity-100 -translate-x-10';
    return 'opacity-100 translate-x-0';
  }
};

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos, photoIndex, fade, nextIndex, handleWheel, onPrev, onNext, disabled }) => (
  <div className="flex items-center justify-center w-2/3 h-full relative" onWheel={handleWheel}>
    <div className="relative w-[90%] h-[80%] bg-white/70 rounded-xl shadow-xl border-2 border-white overflow-hidden">
      {/* 左右三角形ボタン */}
      <ArrowButton direction="left" onClick={onPrev} disabled={disabled} />
      <ArrowButton direction="right" onClick={onNext} disabled={disabled} />
      {/* 現在の写真 */}
      {(fade === 'inTransition' || fade.startsWith('out')) && (
        <img
          src={photos[photoIndex]}
          alt={`写真${photoIndex + 1}`}
          className={`object-cover w-full h-full absolute top-0 left-0 transition-all duration-300 ${getPhotoClass(fade, true)}`}
          style={{ zIndex: 2 }}
        />
      )}
      {/* 次の写真 */}
      {(fade === 'in-right' || fade === 'in-left') && nextIndex !== null && (
        <img
          src={photos[nextIndex]}
          alt={`写真${nextIndex + 1}`}
          className={`object-cover w-full h-full absolute top-0 left-0 transition-all duration-300 ${getPhotoClass(fade, false)}`}
          style={{ zIndex: 3 }}
        />
      )}
      {/* 現在の説明テキスト */}
      {(fade === 'inTransition' || fade.startsWith('out')) && (
        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-lg text-xl font-semibold pointer-events-none transition-all duration-300 ${getTextClass(fade, true)}`}
          style={{zIndex: 10}}
        >
          写真{photoIndex + 1}の説明テキスト
        </div>
      )}
      {/* 次の説明テキスト */}
      {(fade === 'in-right' || fade === 'in-left') && nextIndex !== null && (
        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-lg text-xl font-semibold pointer-events-none transition-all duration-300 ${getTextClass(fade, false)}`}
          style={{zIndex: 11}}
        >
          写真{nextIndex + 1}の説明テキスト
        </div>
      )}
    </div>
  </div>
);

export default PhotoSlider;
