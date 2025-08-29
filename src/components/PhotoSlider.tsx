import React, { useState } from 'react';
import Photo from './Photo';
import photo1 from '../assets/4c8C0BKg.jpg';
import photo2 from '../assets/VRChat_2023-10-04_23-15-08.604_1920x1080.png';
import photo3 from '../assets/VRChat_2024-01-15_15-25-12.422_3840x2160.png';
//import photo4 from '../assets/VRChat_2024-02-07_00-14-01.583_1280x720.png';
//import photo5 from '../assets/VRChat_2024-02-13_01-03-33.799_3840x2160.png';
// import photo6 from '../assets/VRChat_2024-02-21_01-49-55.853_3840x2160.png';
// import photo7 from '../assets/VRChat_2024-02-23_19-41-10.234_3840x2160.png';

function returnIndex(index: number, photoLength: number): number {
  return (((index % photoLength) + photoLength) % photoLength);
}

const PhotoSlider: React.FC = () => {
  const [moved, setMoved] = useState<boolean>(false);
  const [direction, setDirection] = useState<1 | 0 | -1>(0);  // 1: scroll down, -1: scroll up
  const [i, setI] = useState<number>(0);
  type PhotoType = { src: string; alt: string; number: string; text: string };
  const photos: PhotoType[] = [
    { src: photo1, alt: 'Photo 1', number: '02', text: 'Super Todo' },
    { src: photo2, alt: 'Photo 2', number: '03', text: 'Biography' },
    { src: photo3, alt: 'Photo 3', number: '01', text: 'DokoIku VR' },
    //{ src: photo4, alt: 'Photo 4', number: '02', text: 'Super Todo (beta)' },
    //{ src: photo5, alt: 'Photo 5', number: '03', text: 'Biography' },
    //{ src: photo6, alt: 'Photo 6', number: '04', text: 'VRChat' },
    //{ src: photo7, alt: 'Photo 7', number: '05', text: 'VRChat' },
  ];

  return (
    <>
      <div className="h-full w-full pr-18 pl-4 flex items-center justify-center">
        <div
          className="flex flex-col gap-4 items-center justify-center w-full"
          onWheel={(e: React.WheelEvent<HTMLDivElement>) => {
            if (e.deltaY > 0 && !moved) {
              setMoved(true);
              setDirection(1);
            } else if (e.deltaY < 0 && !moved) {
              setMoved(true);
              setDirection(-1);
            }
          }}
          onTransitionEnd={() => {
            if (moved) {
              setI(i + direction);
              setMoved(false);
              setDirection(0);
            }
          }}
          style={{
            transition: moved ? '0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
            transform: moved
              ? direction === 1
                ? 'translateY(-20%)'
                : direction === -1
                ? 'translateY(20%)'
                : 'translateY(0)'
              : 'translateY(0)',
          }}
        >
          {/* 前の前の写真 */}
          <div
            className="relative px-8 grayscale-[70%]
            aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full"
          >
            <Photo
              src={photos[returnIndex(i, photos.length)].src}
              alt={photos[returnIndex(i, photos.length)].alt}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* 前の写真 */}
          <div
            className={`relative ${moved && direction === -1 ? 'duration-500' : 'px-8 grayscale-[70%]'} 
            aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full cursor-pointer hover:grayscale-[40%]`}
            onClick={() => {
              setMoved(true);
              setDirection(-1);
            }}
          >
            <Photo
              src={photos[returnIndex(i + 1, photos.length)].src}
              alt={photos[returnIndex(i + 1, photos.length)].alt}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* 現在の写真 */}
          <div
            className={`relative ${moved ? 'duration-500 px-8 grayscale-[70%]' : ''} 
            aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full cursor-pointer`}
          >
            <Photo
              src={photos[returnIndex(i + 2, photos.length)].src}
              alt={photos[returnIndex(i + 2, photos.length)].alt}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* 次の写真 */}
          <div
            className={`relative ${moved && direction === 1 ? 'duration-500' : 'px-8 grayscale-[70%]'} 
            aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full cursor-pointer hover:grayscale-[40%]`}
            onClick={() => {
              setMoved(true);
              setDirection(1);
            }}
          >
            <Photo
              src={photos[returnIndex(i + 3, photos.length)].src}
              alt={photos[returnIndex(i + 3, photos.length)].alt}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* 次の次の写真 */}
          <div
            className="relative px-8 grayscale-[70%]
            aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full"
          >
            <Photo
              src={photos[returnIndex(i + 4, photos.length)].src}
              alt={photos[returnIndex(i + 4, photos.length)].alt}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>

      {/*説明テキスト*/}
      <div
        className="absolute w-2/3 h-full flex items-center justify-center z-10 pointer-events-none"
        style={{
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)',
          transform: moved ? 'translateX(100%)' : 'translateX(0%)',
          opacity: moved ? 0 : 1,
        }}
      >
        <h1
          className="absolute right-10 bottom-[30vh] lg:bottom-[20vh] bg-opacity-100 text-white px-4 py-2 rounded text-5xl lg:text-8xl font-bold text-right"
        >
          {photos[returnIndex(i + 2, photos.length)].number}
          <br />
          {photos[returnIndex(i + 2, photos.length)].text}
        </h1>
      </div>
    </>
  );
};

export default PhotoSlider;