import React from 'react';
import photoSuperTodo from '../../../assets/SuperTodo.png';
import {
  SiGit,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';

type HeaderSectionProps = {
  link: string;
  title: string;
  subtitle: string;
};

const HeaderSection: React.FC<HeaderSectionProps> = ({ /*link, */title, subtitle }) => (
  <>
    {/*<a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-6xl text-sky-300 hover:underline"
    >*/}
      <h1 className="text-6xl text-sky-300">{title}</h1>
    {/*</a>*/}
    <h2 className="text-2xl zen-kaku-gothic-new-bold">{subtitle}</h2>
  </>
);

const DescriptionSection: React.FC = () => (
  <>
    <h2 className="text-3xl zen-kaku-gothic-new-bold">主な機能</h2>
    <ul className="list-disc list-inside mt-2">
      <li><span className="zen-kaku-gothic-new-bold">タスク作成</span></li>
      <li>タスク分類の <span className="zen-kaku-gothic-new-bold">ラベル作成</span></li>
      <li><span className="zen-kaku-gothic-new-bold">サブタスク作成</span></li>
    </ul>
    <p className="mt-1">ミッションクリティカルにするため、ミニマルな GUI を目指しています。</p>

    <h2 className="text-3xl zen-kaku-gothic-new-bold mt-12 mb-2">背景（課題・提案・今後）</h2>
    <p>自身がマルチタスクを遂行する上で効果的と感じた経験をもとに開発。</p>
    <p>タスクを「重要性」「緊急性」の2軸で分類する手法（アイゼンハワー・マトリクス）を簡単に利用可能。</p>
    <p>モバイル対応や時間軸での可視化を検討中。</p>

    <h2 className="text-3xl zen-kaku-gothic-new-bold mt-12 mb-2">技術選定</h2>
    <p>直感的なシングルページサイトにするために、React を選定。</p>
    <p>自身の学習を兼ね、外部ライブラリを極力使わずに作成。</p>
  </>
);

const Content: React.FC = () => {
  const link = "#";
  const title = "Super Todo (in dev)";
  const subtitle = "アイゼンハワー式タスク管理アプリ";

  return (
    <>
      <div className="flex items-end space-x-8 ">
        <HeaderSection link={link} title={title} subtitle={subtitle} />
      </div>

      <img
        src={photoSuperTodo}
        alt="SuperTodo サイトのスクリーンショット"
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


const SuperTodo: React.FC = () => {
  return (
    <div className="text-gray-200">
      <Content />
    </div>
  );
};

export default SuperTodo;