
import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import BackgroundImage from './components/BackgroundImage';
import IconArea from './components/IconArea';
import PhotoSlider from './components/PhotoSlider';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Hobby from './components/Hobby';
import Career from './components/Career';

function App() {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  {/* スクロール無効化*/}
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const [showingContent, setShowingContent] = useState<'portfolio' | 'career' | 'hobby'>('portfolio');

  const handleShowingContent = (newValue: 'portfolio' | 'career' | 'hobby') => {
    setShowingContent(newValue);
  };

  return (
    <main className="relative h-screen w-full flex">
      {/*ウェルカムメッセージ*/}
      <Welcome />

      <div className="flex h-full w-full">
        {/* メニューエリア */}
        <div className="h-full w-1/3 z-50">
          <IconArea onChange={handleShowingContent}/>
        </div>
        {/* コンテンツエリア */}
        <div className="h-full w-2/3 z-10 flex flex-col justify-center items-center" style={{overflow: 'hidden', position: 'relative'}}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={showingContent}
              timeout={300}
              classNames="slide" /*index.css*/ 
              nodeRef={nodeRef}
            >
              <div ref={nodeRef} className="w-full h-full flex justify-center items-center">
                {showingContent === 'portfolio' && <PhotoSlider />}
                {showingContent === 'hobby'     && <Hobby />}
                {showingContent === 'career'    && <Career />}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <BackgroundImage />
      <Footer />
    </main>
  );
}

export default App;
