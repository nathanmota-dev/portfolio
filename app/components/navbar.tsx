"use client";

import { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'


export default function Navbar() {

    const [isClick, setisClick] = useState(false);

    const toogleNavbar = (): void => {
        setisClick(!isClick);
    }

    return (
        <div>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <a href="/">
                                <Image className='w-10 h-10' src={logo} alt="Logo"></Image>
                            </a>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-4'>
                                <a href="/" className='text-white hover:bg-custom-gray rounded-lg p-2'>Sobre mim</a>
                                <a href="/" className='text-white hover:bg-custom-gray rounded-lg p-2'>Qualificações</a>
                                <a href="/" className='text-white hover:bg-custom-gray rounded-lg p-2'>Projetos</a>
                                <a href="/" className='text-white hover:bg-custom-gray rounded-lg p-2'>Habilidades</a>
                                <a href="/" className='text-white hover:bg-custom-gray rounded-lg p-2'>Contato</a>
                            </div>
                        </div>
                        <div className='md:hidden flex items-center'>
                            <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toogleNavbar}>
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
                            <a href="/" className='text-white block  hover:bg-white hover:text-black rounded-lg p-2'>Sobre mim</a>
                            <a href="/" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Qualificações</a>
                            <a href="/" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Projetos</a>
                            <a href="/" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Habilidades</a>
                            <a href="/" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Contato</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}
