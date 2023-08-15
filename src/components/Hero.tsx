'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

import { retro } from '@/app/fonts';
import Header from './Header';

import useSmoothScrollTo from '@/hooks/useSmoothScrollTo';

type MenuItem = {
    name: string;
    href: string;
};

const navigation: MenuItem[] = [
    { name: 'Що це?', href: '#about' },
    { name: 'Портрет учасника', href: '#portrait' },
    { name: 'Як відбувається?', href: '#howgoes' },
    { name: 'Наш досвід', href: '#exp' },
    { name: 'Що пропонуємо?', href: '#offer' },
    { name: 'Що нам потрібно?', href: '#request' },
];



export default function HeroSection() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScrollClick = useSmoothScrollTo();

    return (
        <div className="bg-black" id='start'>
            <Header setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} mobileMenuOpen={mobileMenuOpen} />

            <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('/monblan.jpg')] [#0f0020] bg-cover bg-center min-h-screen flex flex-col justify-around">
                <div className="mx-auto max-w-2xl py-48 sm:py-64 lg:py-80">

                    <div className="text-center">
                        <motion.h1
                            transition={{
                                duration: 1,
                            }}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{
                                opacity: 1,
                                x: 0
                            }}
                            className={`text-5xl sm:text-7xl font-bold tracking-tight transition-all glitch-text ${retro.className}`}>
                            IT-QUEST 5.0
                        </motion.h1>
                        <p className={`neon-handwritten-text mt-6 mb-4 text-2xl leading-8 text-white font-extralight `}>
                            пропозиця партнерської співпраці
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button
                                className={`bg-gradient-to-r from-my-blue via-violet-500 to-my-pink  hover:bg-b lue-600 btn hover:shadow-sky-500 shadow-sky-400`}>
                                <span className='cursor-pointer' onClick={() => handleScrollClick('#help')}>Підтримати</span>
                            </button>
                            <button
                                className="btn backdrop-blur-md  border-my-pink border-2 bg-transparent hover:shadow-my-pink">
                                <span onClick={() => handleScrollClick('#about')}>
                                    Дізнатися ще
                                </span>
                                <span aria-hidden="true"> →</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}