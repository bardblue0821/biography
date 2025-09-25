import React, { useEffect, useState } from 'react';
import GoodBadCode from '../assets/GoodBadCode.jpg'
import HowToWinFriends from '../assets/HowToWinFriends.jpg'
import DockerBasic from '../assets/DockerBasic.jpg'
import GitHubAction from '../assets/GitHubAction.jpg'

const twheader  = "text-sky-300  xl:text-7xl text-6xl       zen-kaku-gothic-new-black";
const twtitle   = "text-gray-200 xl:text-4xl text-3xl mt-12 zen-kaku-gothic-new-bold";
const twauthor  = "text-gray-200 xl:text-xl  text-xl  mt-2  zen-kaku-gothic-new-bold";
const twcontent = "text-gray-200 xl:text-xl  text-xl  mt-3  zen-kaku-gothic-new-regular"

type BookContentProps = {
  title: string;
  link?: string;
  author: string;
  content: React.ReactNode;
  img?: string;
};

const BookContent: React.FC<BookContentProps> = ({ title, link, author, img, content }) => {
  return (
    <>
      <h2 className={twtitle}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-300 transition-colors duration-200"
        >
          {title}
        </a>
      </h2>
      <h2 className={twauthor}>{author}</h2>
      <div className="my-8 flex justify-center items-center w-full">
        {img && <img src={img} alt={title} className="max-w-xs rounded" />}
      </div>
      <p className={twcontent}>{content}</p>
    </>
  );
};

const BookEng = () => {
  return (
    <div className="h-full">
      <h1 className={twheader}>Books</h1>
      
      <BookContent 
        title="Introduction to Design through Good and Bad Code"
        author="Daiya Semba"
        link="https://amzn.asia/d/5aBrqgQ"
        img={GoodBadCode}
        content={
          <>
          I read this book to learn about class design and coding rules that make maintenance and operation easier.<br />
          With its abundance of anti-patterns, you can learn both what to do and what not to do in design.<br />
          For example, it covers everything from class design principles to how to unravel deep nesting.<br />
          In fact, I was able to put into words the improvements needed for traditional scripts that had been difficult to maintain and operate.
          </>
        }
      />

      <BookContent 
        title="How to Win Friends and Influence People"
        author="Dale Breckenridge Carnegie"
        img={HowToWinFriends}
        link="https://amzn.asia/d/iPPpK6C"
        content={
          <>
          I read this book to enhance my persuasiveness when making improvement proposals.<br />
          It introduces many habits for building trust, along with numerous real-life examples.<br />
          By understanding the underlying principles of human behavior, you can find ways to achieve win-win outcomes.<br />
          In fact, I was able to apply it not only to business proposals but also to personal relationships, and it was more effective than expected.<br />
          </>
        }
      />

      <BookContent 
        title="Docker & Kubernetes: The Basics"
        author="Shigetaka Ogasawara"
        link="https://amzn.asia/d/aQ1ddJ5"
        img={DockerBasic}
        content={
          <>
          I bought this book to deepen my knowledge of Docker, which I used for building Laravel Sail, and to learn more about backend technologies.<br />
          It explains basic concepts and commands, making it perfect for beginners.<br />
          In practice, I was able to migrate the environment used in my work from a VM to Docker, making it more lightweight.
          </>
        }
      />
      

      <BookContent 
        title="GitHub CI/CD Practical Guide"
        author="Tomonori Nomura"
        link="https://amzn.asia/d/5dXkJN0"
        img={GitHubAction}
        content={
          <>
          Currently reading.
          I believe that knowledge of CI/CD is essential for improving quality and accelerating development.
          </>
        }
      />
    </div>
  );
};

const BookJpn = () => {
  return (
    <div className="h-full">
      <h1 className={twheader}>読書</h1>

      <BookContent 
        title="良いコード悪いコードで学ぶ設計入門"
        author="仙塲大也"
        link="https://amzn.asia/d/5aBrqgQ"
        img={GoodBadCode}
        content={<>
          保守運用しやすいクラス設計・コードルールを知るために、拝読しました。<br />
          アンチパターンが豊富なので「こうすべき」と「こうすべきではない」の両軸から設計を学ぶことができます。<br />
          たとえば、クラス設計の方針から、深いネストのほどき方まで学べます。<br />
          実際に、保守運用に苦しんだ伝統のスクリプトの改善点を言語化することができました。
        </>}
      />

      <BookContent 
        title="人を動かす"
        author="D・カーネギー"
        link="https://amzn.asia/d/iPPpK6C"
        img={HowToWinFriends}
        content={<>
          改善提案をする際に、説得力を増強するために拝読しました。<br />
          信頼関係を構築するために持つべき習慣が、数多くの実例と共に紹介されています。<br />
          人の潜在的な行動原理を知ることで、Win-win になる方法を探れます。<br />
          実際に、業務提案だけではなく、交友関係にも活用することができ、期待以上に効果的でした。<br />
        </>}
      />

      <BookContent 
        title="Docker&Kubernetes きほんのきほん"
        author="小笠原種高"
        link="https://amzn.asia/d/aQ1ddJ5"
        img={DockerBasic}
        content={<>
          Laravel sail 構築に使用した Docker について掘り下げ、バックエンドの知見を深めるために拝読しました。<br />
          基本的な概念からコマンドについて説明されているため、入門にはもってこいでした。<br />
          実際に、業務で使用する環境構築を VM から Docker に移行し、軽量化することができました。
        </>}
      />

      <BookContent 
        title="GitHub CI/CD 実践ガイド"
        author="野村友規"
        link="https://amzn.asia/d/5dXkJN0"
        img={GitHubAction}
        content={<>
          現在読書中です。
          品質向上・開発加速の観点から CI/CD の知識が重要と考えています。
        </>}
      />
    </div>
  );
};

const Book: React.FC<{ lang: 'ja' | 'en' }> = ({ lang }) => {
  const [displayLang, setDisplayLang] = useState(lang);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => {
      setDisplayLang(lang);
      setFade(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <div className="flex items-center h-[95%] w-full relative">
      <div className="w-[90%] h-[80%] bg-gray-900 bg-opacity-80 p-10  overflow-auto scrollbar-hide rounded-xl">
        <div className={`transition-opacity duration-400 ${fade ? 'opacity-0' : 'opacity-100'} w-full`}>
          {displayLang === 'ja' ? (<BookJpn />) : (<BookEng />)}
        </div>
      </div>
    </div>
  );
};

export default Book;