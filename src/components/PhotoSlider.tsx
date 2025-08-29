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

  return (
    <div className="h-full w-full pr-18 pl-12 flex items-center justify-center">
      <div
        className="flex flex-col gap-4 items-center justify-center w-full transition-transform duration-500"
        onClick={() => {
          setMoved(true);
        }}
        style={{
          transform: moved ? 'translateY(-20%)' : 'translateY(0)',
        }}
      >
        <div
          className="relative px-8 aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full"
        >
          <Photo src={photo1} alt="Photo 1" className="object-cover w-full h-full" />
        </div>

        <div
          className="relative px-8 aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full transition-all duration-500"
        >
          <Photo src={photo2} alt="Photo 2" className="object-cover w-full h-full" />
        </div>

        <div
          className={`relative aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full duration-500${moved ? ' px-8' : ''}`}
        >
          <Photo src={photo3} alt="Photo 3" className="object-cover w-full h-full" />
        </div>

        <div
          className={`relative aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full transition-all duration-500${moved ? '' : ' px-8'}`}
        >
          <Photo src={photo4} alt="Photo 3" className="object-cover w-full h-full" />
        </div>

        <div
          className="relative px-8 aspect-[3/2] overflow-hidden flex items-center justify-center max-h-[60vh] w-full"
        >
          <Photo src={photo5} alt="Photo 3" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default PhotoSlider;