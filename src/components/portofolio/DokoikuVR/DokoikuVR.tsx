import React from 'react';
import photoDokoikuVR from '../../../assets/DokoIkuVR2.png';
import {
  SiGit,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiDocker,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

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
    <ul className="list-disc list-inside mt-2">
      <li>おすすめの VRChat 内の<span className="zen-kaku-gothic-new-bold">ワールドの投稿</span></li>
      <li>投稿に対する「<span className="zen-kaku-gothic-new-bold">お気に入り</span>」「<span className="zen-kaku-gothic-new-bold">後で行きたい</span>」を保存</li>
      <li><span className="zen-kaku-gothic-new-bold">写真の投稿</span></li>
      <li>Unity/Blender など<span className="zen-kaku-gothic-new-bold">関連技術ノートの投稿</span>（開発中）</li>
    </ul>
    <p className="mt-1">現在も個人で運営・保守を続けており、投稿数は 200 以上に達しています。</p>

    <h2 className="text-3xl zen-kaku-gothic-new-bold mt-12 mb-2">背景（課題・提案・今後）</h2>
    <p>現状 VRChat での体験共有は X (旧 Twitter) が主流</p>
    <p>VRChat ドメインに特化した機能がないため、ユーザー体験が制限されている</p>
    <p>VRChat ユーザー向けの SNS サイトを作成することで、ユーザー同士のつながりを強化し、より豊かな体験提供を目指す</p>
    <p>今後、ユーザーからのフィードバックをもとに機能追加や改善を行う計画</p>

    <h2 className="text-3xl zen-kaku-gothic-new-bold mt-12 mb-2">技術選定</h2>
    <p>スモールスタート・スケーラブルにするために、Laravel と AWS Lightsail を選定</p>

    <h2 className="text-3xl zen-kaku-gothic-new-bold mt-12 mb-2">実績</h2>
    <ul className="list-disc list-inside mt-2">
      <li><span className="zen-kaku-gothic-new-bold">投稿数</span> 200以上</li>
      <li><span className="zen-kaku-gothic-new-bold">反応数</span> 500程度</li>
    </ul>

    <h2 className="text-3xl zen-kaku-gothic-new-bold mt-12 mb-2">その他</h2>
    <p>開発手法として、Gitflow を採用。</p>
    <p>あえて Copilot のような生成 AI を使用しないことで、自身の理解を盤石にすることを目指しました。</p>
    <p>（普段のアプリ開発では積極的に活用しています。）</p>

    <h2 className="text-3xl zen-kaku-gothic-new-bold mt-12 mb-2">感謝</h2>
    <p>サイト作成にあたり、多大な協力をくださった友人たちに感謝申し上げます。</p>


  </>
);

const Content: React.FC = () => {
  const link = "https://dokoiku-vr.bardblue.com/";
  const title = "Dokoiku VR";
  const subtitle = "VRChat 体験共有サイト";

  return (
    <>
      <div className="flex items-end space-x-8 ">
        <HeaderSection link={link} title={title} subtitle={subtitle} />
      </div>

      <img
        src={photoDokoikuVR}
        alt="Dokoiku VR サイトのスクリーンショット"
        className="mt-12 rounded-lg w-full max-h-[50vh] object-cover"
      />

      <span className="flex space-x-8 mt-12">
        <SiLaravel size={60} color="#FF2D20" />
        <SiPhp size={74} color="#777BB4" />
        <SiMysql size={76} color="#4479A1" />
        <SiGit size={60} color="#F1502F" />
        <SiTailwindcss size={60} color="#06B6D4" />
        <SiDocker size={60} color="#2496ED" />
        <FaAws size={60} color="#FF9900" />
      </span>

      <div className="mt-12 text-lg leading-9 zen-kaku-gothic-new-regular">
        <DescriptionSection />
      </div>
    </>
  );
};


const DokoikuVR: React.FC = () => {
  return (
    <div className="text-gray-200">
      <Content />
    </div>
  );
};

export default DokoikuVR;
