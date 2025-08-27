
import React from 'react';
import bgImage from '/src/assets/wolca_newspaper.jpg';
import iconImage from '/src/assets/icon.jpg';



function App() {
  // ページロード後に.fade-inへ.loadedクラスを追加
  React.useEffect(() => {
    const main = document.querySelector('.fade-in');
    setTimeout(() => {
      main?.classList.add('loaded');
    }, 1000);
  }, []);
  return (
    <main className="fade-in relative">
      <div className="fade-black absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
        <span className="welcome-text text-white text-5xl font-bold tracking-wide">Welcome</span>
      </div>
      <section className="relative h-screen w-full overflow-hidden">
        <img
        src={bgImage}
        alt="背景"
        className="w-full h-full object-cover brightness-50"
        />
      </section>

      <section>
        <img
        src={iconImage}
        alt="アイコン"
        className="absolute left-8 top-1/2 -translate-y-1/2 w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </section>
    </main>
  );
}

export default App;
