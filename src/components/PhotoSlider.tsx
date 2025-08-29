import React, { useState } from 'react';
import Photo from './Photo';
import photo1 from '../assets/4c8C0BKg.jpg';
import photo2 from '../assets/VRChat_2023-10-04_23-15-08.604_1920x1080.png';
import photo3 from '../assets/VRChat_2024-01-15_15-25-12.422_3840x2160.png';
import photo4 from '../assets/VRChat_2024-02-07_00-14-01.583_1280x720.png';
import photo5 from '../assets/VRChat_2024-02-13_01-03-33.799_3840x2160.png';
import photo6 from '../assets/VRChat_2024-02-21_01-49-55.853_3840x2160.png';
import photo7 from '../assets/VRChat_2024-02-23_19-41-10.234_3840x2160.png';

function PhotoSlider() {
  const [moved, setMoved] = useState(false);
  const [i, setI] = useState(0);
  const photos = [
    { src: photo1, alt: 'Photo 1', text: '友達と一緒に撮った写真です。' },
    { src: photo2, alt: 'Photo 2', text: 'VRChatで初めてイベントに参加した時の写真です。' },
    { src: photo3, alt: 'Photo 3', text: '新しいワールドを探索した時の思い出です。' },
    { src: photo4, alt: 'Photo 4', text: 'お気に入りのアバターで撮影しました。' },
    { src: photo5, alt: 'Photo 5', text: 'みんなで集まって楽しい時間を過ごしました。' },
    { src: photo6, alt: 'Photo 6', text: '夜遅くまで語り合った日の写真です。' },
    { src: photo7, alt: 'Photo 7', text: '特別なイベントで撮った記念写真です。' },
  ];

  
  

  return (
    <div className="h-full w-full pr-18 pl-12 flex items-center justify-center">
      <div
        className="flex flex-col gap-4 items-center justify-center w-full"
        onClick={() => {
          setMoved(true);
        }}
        onTransitionEnd={() => {
          if (moved) {
            setI(i + 1);
            setMoved(false);
          }
        }}
        style={{
          transition: moved ? '0.5s' : 'none',
          transform: moved ? 'translateY(-20%)' : 'translateY(0)',
        }}
      >
        <div
          className="relative px-8 aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full"
        >
          <Photo src={photos[(i) % photos.length].src} alt={photos[(i) % photos.length].alt} className="object-cover w-full h-full" />
        </div>

        <div
          className="relative px-8 aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full"
        >
          <Photo src={photos[(i + 1) % photos.length].src} alt={photos[(i + 1) % photos.length].alt} className="object-cover w-full h-full" />
        </div>

        <div
          className={`relative ${moved ? ' duration-500 px-8' : ''} aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full`}
        >
          <Photo src={photos[(i + 2) % photos.length].src} alt={photos[(i + 2) % photos.length].alt} className="object-cover w-full h-full" />
        </div>

        <div
          className={`relative ${moved ? ' duration-500' : ' px-8'} aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full`}
        >
          <Photo src={photos[(i + 3) % photos.length].src} alt={photos[(i + 3) % photos.length].alt} className="object-cover w-full h-full" />
        </div>

        <div
          className="relative px-8 aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full"
        >
          <Photo src={photos[(i + 4) % photos.length].src} alt={photos[(i + 4) % photos.length].alt} className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default PhotoSlider;