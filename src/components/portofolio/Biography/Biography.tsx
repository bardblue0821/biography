import React from 'react';
import photoBiography from '../../../assets/Biography.png';
import {
  SiGit,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';

// タイトル・サブタイトル部分をコンポーネント化
type HeaderSectionProps = {
  link: string;
  title: string;
  subtitle: string;
};

const HeaderSection: React.FC<HeaderSectionProps> = ({ link, title, subtitle }) => (
  <>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-6xl text-sky-300 hover:underline"
    >
      <h1 className="text-6xl text-sky-300">{title}</h1>
    </a>
    <h2 className="text-2xl zen-kaku-gothic-new-bold">{subtitle}</h2>
  </>
);

// VRChat体験共有SNSサイトの説明・課題部分をコンポーネント化
const DescriptionSection: React.FC = () => (
  <>
    <h2 className="text-3xl zen-kaku-gothic-new-bold">主な機能</h2>
    <p>セルフプロモーションのために<span className="zen-kaku-gothic-new-bold">ポートフォリオ</span>を中心に自己紹介。</p>
    <p className="mt-1">説明的 UI を極力削減し、直感的なミニマルデザインを目指しています。</p>

    <h2 className="text-3xl zen-kaku-gothic-new-bold mt-12 mb-2">背景（課題・提案）</h2>
    <p>成果物を作成する上で、そのハブとなるサイトが無かったため、情報が一元集約されたサイトを作成。</p>
    <p>ポートフォリオを中心に自身について知っていただくことを意識。</p>
    <p>目を通していただける方にリラックスしていただけるように、青を基調としたデザインを意識。</p>

    <h2 className="text-3xl zen-kaku-gothic-new-bold mt-12 mb-2">技術選定</h2>
    <p>直感的なシングルページサイトにするために、React を選定。</p>
    <p>自身の学習を兼ね、外部ライブラリを極力使わずに作成。</p>
  </>
);

const Content: React.FC = () => {
  const link = "https://bardblue0821.github.io/biography/";
  const title = "Biography";
  const subtitle = "自己紹介サイト";

  return (
    <>
      <div className="flex items-end space-x-8 ">
        <HeaderSection link={link} title={title} subtitle={subtitle} />
      </div>

      <img
        src={photoBiography}
        alt="Biography サイトのスクリーンショット"
        className="mt-12 rounded-lg w-full max-h-[50vh] object-cover"
      />

      <span className="flex space-x-8 mt-12">
        <SiReact size={60} color="#61DAFB" />
        <SiTailwindcss size={60} color="#06B6D4" />
        <SiGit size={60} color="#F1502F" />
      </span>

      <div className="mt-12 text-lg leading-9 zen-kaku-gothic-new-regular">
        <DescriptionSection />
      </div>
    </>
  );
};


const Biography: React.FC = () => {
  return (
    <div className="text-gray-200">
      <Content />
    </div>
  );
};

export default Biography;