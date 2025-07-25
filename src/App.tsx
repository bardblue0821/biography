import ThreeBackground from './components/ThreeBackground';
import './input.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-tealLight relative overflow-hidden">
      <ThreeBackground />
      <div className="w-full max-w-5xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white/0 relative z-10">
        {/* 左側：自己紹介 */}
        <section className="md:w-1/2 w-full p-8 bg-tealMid/0 flex flex-col justify-center items-center">
          <div className="w-24 h-24 rounded-full bg-teal flex items-center justify-center mb-4">
            {/* アバターのダミー */}
            <span className="text-3xl text-white">👤</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">自己紹介</h2>
          <p className="mb-2">プロフィール: ダミーテキスト</p>
          <p className="mb-2">経歴: ダミー経歴1<br/>ダミー経歴2<br/>ダミー経歴3<br/>ダミー経歴4</p>
          <div className="flex gap-2 mb-2">
            {/* スキルアイコンのダミー */}
            <span className="bg-blue text-white px-2 py-1 rounded">TS</span>
            <span className="bg-blue text-white px-2 py-1 rounded">React</span>
            <span className="bg-blue text-white px-2 py-1 rounded">Three.js</span>
          </div>
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue text-white rounded">日本語/EN</button>
          </div>
        </section>
        {/* 右側：ポートフォリオ */}
        <section className="md:w-1/2 w-full p-8 bg-tealLight/0 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">ポートフォリオ</h2>
          <div className="space-y-4">
            {/* ダミープロジェクト */}
            <div className="p-4 bg-white rounded shadow hover:scale-105 transition-transform">
              <h3 className="font-bold">プロジェクトA</h3>
              <p>概要: ダミー概要</p>
              <p>技術: React, TypeScript</p>
              <a href="#" className="text-blue underline">GitHub</a>
            </div>
            <div className="p-4 bg-white rounded shadow hover:scale-105 transition-transform">
              <h3 className="font-bold">プロジェクトB</h3>
              <p>概要: ダミー概要</p>
              <p>技術: Three.js</p>
              <a href="#" className="text-blue underline">GitHub</a>
            </div>
            <div className="p-4 bg-white rounded shadow hover:scale-105 transition-transform">
              <h3 className="font-bold">プロジェクトC</h3>
              <p>概要: ダミー概要</p>
              <p>技術: Tailwind CSS</p>
              <a href="#" className="text-blue underline">GitHub</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
