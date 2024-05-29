"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { LanguageToggle } from './languageToogle';

export default function Navbar() {
    const [isClick, setIsClick] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(false);

    useEffect(() => {
        const theme = localStorage.theme;
        if (theme === "light" || (!theme && window.matchMedia("(prefers-color-scheme: light)").matches)) {
            setIsLightTheme(true);
            document.documentElement.classList.remove("dark");
        } else {
            setIsLightTheme(false);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        const clickSound = new Audio("/sounds/click1.wav");
        const click2Sound = new Audio("/sounds/click2.wav");

        if (event.target.checked) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            setIsLightTheme(true);
            clickSound.play();
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            setIsLightTheme(false);
            click2Sound.play();
        }
    };

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <div>
            <nav className="bg-white dark:bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center space-x-8">
                            <a href="/">
                                <Image className='w-10 h-10' src={logo} alt="Logo" />
                            </a>

                            <label className='flex cursor-pointer relative'>
                                <input
                                    type="checkbox"
                                    className='sr-only peer'
                                    checked={isLightTheme}
                                    onChange={toggleTheme}
                                />
                                <div className="peer after:bg-[length:12px_12px] after:bg-no-repeat after:bg-center after:bg-[url('/moon.svg')] 
                                peer-checked:after:bg-[url('/sun.svg')] after:transition-all after:duration-300 after:left-0 
                                peer-checked:after:left-7 w-14 h-7 bg-zinc-300 dark:bg-zinc-700 rounded-full px-1 flex
                                items-center after:rounded-full after:content-[''] after:flex after:relative after:w-5 after:h-5
                                after:bg-zinc-100 dark:after:bg-zinc-800 after:rotate-0 after:peer-checked:rotate-180 shadow-inner
                                after:animate-moon peer-checked:after:animate-sun">
                                </div>
                            </label>

                            <LanguageToggle />
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-4'>
                                <a href="/" className='text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2'>Sobre mim</a>
                                <a href="/" className='text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2'>Qualificações</a>
                                <a href="/" className='text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2'>Projetos</a>
                                <a href="/" className='text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2'>Habilidades</a>
                                <a href="/" className='text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2'>Contato</a>
                            </div>
                        </div>
                        <div className='md:hidden flex items-center'>
                            <button className='inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                                {isClick ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center'>
                            <a href="/" className='text-black dark:text-white block hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2'>Sobre mim</a>
                            <a href="/" className='text-black dark:text-white block hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2'>Qualificações</a>
                            <a href="/" className='text-black dark:text-white block hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2'>Projetos</a>
                            <a href="/" className='text-black dark:text-white block hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2'>Habilidades</a>
                            <a href="/" className='text-black dark:text-white block hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg p-2'>Contato</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
