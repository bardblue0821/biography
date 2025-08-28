import React from 'react';
import photo1 from '../assets/4c8C0BKg.jpg';
import photo2 from '../assets/VRChat_2023-10-04_23-15-08.604_1920x1080.png';
import photo3 from '../assets/VRChat_2024-01-15_15-25-12.422_3840x2160.png';

const photos = [photo1, photo2, photo3];

const PhotoSlider: React.FC = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-40 flex flex-col items-center justify-center overflow-hidden" style={{ pointerEvents: 'auto' }}>
      <div className="flex flex-col items-center justify-center h-full w-full gap-8">
        <img
          src={photos[0]}
          alt="photo1"
          className="object-cover rounded shadow"
          style={{ width: '100%', height: 'calc(33.333% - 16px)', aspectRatio: '3/2', maxWidth: '100%' }}
        />
        <img
          src={photos[1]}
          alt="photo2"
          className="object-cover rounded shadow"
          style={{ width: '100%', height: 'calc(33.333% - 16px)', aspectRatio: '3/2', maxWidth: '100%' }}
        />
        <img
          src={photos[2]}
          alt="photo3"
          className="object-cover rounded shadow"
          style={{ width: '100%', height: 'calc(33.333% - 16px)', aspectRatio: '3/2', maxWidth: '100%' }}
        />
      </div>
    </div>
  );
};

export default PhotoSlider;
