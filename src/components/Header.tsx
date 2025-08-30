import React from 'react';

interface HeaderProps {
  lang: 'ja' | 'en';
  onChange: (lang: 'ja' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ lang, onChange }) => {
  return (
    <header className="flex justify-between items-center text-xl px-10 py-8 fixed left-0 top-0 w-full z-50 text-gray-200 bg-transparent pointer-events-none">
      <div className="text-left">
        <h1>Bardblue</h1>
      </div>
      <div className="text-right">
        {lang === 'ja' && <button
          className="text-gray-200 pointer-events-auto hover:text-sky-300 cursor-pointer"
          onClick={() => onChange('en')}
        >
          <h1>JPN</h1>
        </button>}
        {lang === 'en' && <button
          className="text-gray-200 pointer-events-auto hover:text-sky-300 cursor-pointer"
          onClick={() => onChange('ja')}
        >
          <h1>ENG</h1>
        </button>}
      </div>
    </header>
  );
};

export default Header;