
import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import BackgroundImage from './components/BackgroundImage';
import IconArea from './components/IconArea';
import PhotoSlider from './components/PhotoSlider';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Hobby from './components/Hobby';
import Career from './components/Career';
import Book from './components/Book';
import Header from './components/Header';
import PortfolioContent from './components/PortfolioContent';

function App() {
  const nodeRef = React.useRef<HTMLDivElement>(null);

  // スクロール無効化
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // 表示するコンテンツ
  const [showingContent, setShowingContent] = useState<'portfolio' | 'career' | 'hobby' | 'book'>('portfolio');
  const handleShowingContent = (newValue: 'portfolio' | 'career' | 'hobby' | 'book') => {
    setShowingContent(newValue);
  };

  // 言語
  const [lang, setLang] = useState<'ja' | 'en'>('en');
  const handleLanguageChange = () => {
    setLang(lang === 'ja' ? 'en' : 'ja');
  };

  // どのポートフォリオの詳細を表示するか
  type PortfolioType = '' | 'DokoikuVR' | 'SuperTodo' | 'Biography';
  const [portfolioContent, setPortfolioContent] = useState<PortfolioType>('');
  const handlePortfolioContent = (newValue: PortfolioType) => {
    setPortfolioContent(newValue);
  };

  return (
    <main className="relative h-screen w-full flex">
      <Header lang={lang} onChange={handleLanguageChange} />
      {/*ウェルカムメッセージ*/}
      <Welcome />

      <div className="flex h-full w-full relateive">
        {/* メニューエリア */}
        <div className="h-full w-1/3 z-40">
          <IconArea onChange={handleShowingContent}/>
        </div>
        {/* コンテンツエリア */}
        <div className="h-full w-2/3 z-10 flex flex-col justify-center items-center" style={{overflow: 'hidden', position: 'relative'}}>
          <SwitchTransition mode="out-in">
            <CSSTransition key={showingContent} timeout={300} classNames="slide" /*index.css*/  nodeRef={nodeRef}>
              <div ref={nodeRef} className="w-full h-full flex justify-center items-center">
                {showingContent === 'portfolio' && <PhotoSlider onChange={handlePortfolioContent} />}
                {showingContent === 'hobby'     && <Hobby lang={lang} />}
                {showingContent === 'career'    && <Career lang={lang} />}
                {showingContent === 'book'      && <Book lang={lang} />}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        {/* ポートフォリオコンテンツ モーダル表示 */}
        <div>
          {portfolioContent && 
            <PortfolioContent content={portfolioContent} onChange={handlePortfolioContent} />
          }
        </div>
      </div>
      <BackgroundImage />
      <Footer />
    </main>
  );
}

export default App;
