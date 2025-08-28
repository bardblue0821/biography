import React from 'react';


interface ArrowButtonProps {
  direction: 'left' | 'right' | 'up' | 'down';
  onClick: () => void;
  disabled?: boolean;
}


const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, disabled }) => {
  // 位置とラベル
  let positionClass = '';
  let ariaLabel = '';
  if (direction === 'left') {
    positionClass = 'absolute top-1/2 -translate-y-1/2 left-2';
    ariaLabel = '前の写真';
  } else if (direction === 'right') {
    positionClass = 'absolute top-1/2 -translate-y-1/2 right-2';
    ariaLabel = '次の写真';
  } else if (direction === 'up') {
    positionClass = 'absolute left-1/2 -translate-x-1/2 top-2';
    ariaLabel = '上の写真';
  } else if (direction === 'down') {
    positionClass = 'absolute left-1/2 -translate-x-1/2 bottom-2';
    ariaLabel = '下の写真';
  }

  // アイコン
  let icon = null;
  if (direction === 'left') {
    icon = <polygon points="22,6 10,16 22,26" fill="white" />;
  } else if (direction === 'right') {
    icon = <polygon points="10,6 22,16 10,26" fill="white" />;
  } else if (direction === 'up') {
    icon = <polygon points="6,22 16,10 26,22" fill="white" />;
  } else if (direction === 'down') {
    icon = <polygon points="6,10 16,22 26,10" fill="white" />;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${positionClass} bg-black/40 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center z-20 transition-colors duration-200`}
      style={{ pointerEvents: disabled ? 'none' : 'auto' }}
      aria-label={ariaLabel}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {icon}
      </svg>
    </button>
  );
};

export default ArrowButton;
