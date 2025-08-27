import React from 'react';
import bgImage from '/src/assets/VRChat_2024-02-21_01-49-55.853_3840x2160.png';
import iconImage from '/src/assets/icon.jpg';

const Landing: React.FC = () => (
  <section>
    <img
      src={bgImage}
      alt="背景"
      className="relative w-screen h-screen overflow-hidden inset-0 object-cover z-10"
    />
    <img
      src={iconImage}
      alt="アイコン"
      className="absolute w-[42px] h-[42px] left-4 top-4 z-20 object-cover"
    />
  </section>
);

export default Landing;
