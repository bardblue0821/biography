import React from 'react';

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? 'left-2' : 'right-2'} bg-black/40 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center z-20 transition-colors duration-200`}
    style={{ pointerEvents: disabled ? 'none' : 'auto' }}
    aria-label={direction === 'left' ? '前の写真' : '次の写真'}
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {direction === 'left' ? (
        <polygon points="22,6 10,16 22,26" fill="white" />
      ) : (
        <polygon points="10,6 22,16 10,26" fill="white" />
      )}
    </svg>
  </button>
);

export default ArrowButton;
