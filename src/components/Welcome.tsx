import React from 'react';

const Welcome: React.FC = () => {
  const [showWelcome, setShowWelcome] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${showWelcome ? 'opacity-100' : 'opacity-0'} bg-sky-900 duration-500 absolute inset-0 z-1000 pointer-events-none flex items-center justify-center`}>
      <span className="welcome-text text-white text-6xl font-bold tracking-wide">
        <h1>Welcome</h1>
      </span>
    </div>
  );
};

export default Welcome;