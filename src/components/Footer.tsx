import React from 'react';
import {SiGithub, SiQiita} from 'react-icons/si';

const Footer: React.FC = () => {
    return (
        <footer className="flex items-center w-full fixed left-0 bottom-0 z-50 ">
            <div className="bg-transparent flex items-center px-10 w-1/2 space-x-6 text-xl text-gray-200 ">
                <a className="bg-transparent" href="https://github.com/Bardblue0821" target="_blank" rel="noopener noreferrer">
                    <SiGithub size={30} className="hover:text-sky-300 duration-200" />
                </a>
                <a className="bg-transparent h-12" href="https://qiita.com/Bardblue0821" target="_blank" rel="noopener noreferrer">
                    <SiQiita size={50} className="hover:text-sky-300 duration-200" />
                </a>
            </div>
            <div className="bg-transparent w-1/2 text-right text-xl px-10 py-8 text-gray-200 pointer-events-none ">
                <h1>&copy; Bardblue</h1>
            </div>
        </footer>
    );
};

export default Footer;