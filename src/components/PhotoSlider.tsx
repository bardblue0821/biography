import React from 'react';
import photo1 from '../assets/4c8C0BKg.jpg';
import photo2 from '../assets/VRChat_2023-10-04_23-15-08.604_1920x1080.png';
import photo3 from '../assets/VRChat_2024-01-15_15-25-12.422_3840x2160.png';

const photos = [photo1, photo2, photo3];

const PhotoSlider: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative">
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
      zIndex: 1,
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'translateX(-50%)';
      }}
      />
      <img
      src={photos[1]}
      alt="photo2"
      style={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        width: '100%',
        aspectRatio: '3/2',
        objectFit: 'cover',
        borderRadius: '0.5rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        filter:
        'grayscale(1) sepia(1) hue-rotate(190deg) saturate(3)',
        transition: 'transform 0.5s, filter 0.2s',
        zIndex: 2,
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.05)';
        e.currentTarget.style.filter =
        'grayscale(0) sepia(0) hue-rotate(0deg) saturate(1)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'translate(-50%, -50%)';
        e.currentTarget.style.filter =
        'grayscale(1) sepia(1) hue-rotate(190deg) saturate(3)';
      }}
      />
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
        zIndex: 1,
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'translateX(-50%)';
      }}
      />
    </div>
  );
};

export default PhotoSlider;
