import React from 'react';
import BackgroundVideo from '../assets/52083_1280x720.mp4';

const BackgroundImage: React.FC = () => (
    <div className="absolute top-0 left-0 w-full h-full bg-[#030308]">
        <video
            src={BackgroundVideo}
            className="w-full h-full object-cover filter brightness-50 grayscale-50 blur-xs -z-10"
            autoPlay
            loop
            muted
        />
    </div>
);

export default BackgroundImage;
