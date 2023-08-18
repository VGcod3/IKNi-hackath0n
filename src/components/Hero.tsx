'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '@/hooks/AnimatedElement';

import { hacked, rubik } from '@/app/fonts';
import Header from './Header';

import useSmoothScrollTo from '@/hooks/useSmoothScrollTo';

type MenuItem = {
    name: string;
    href: string;
};

const navigation: MenuItem[] = [
    { name: 'Що це?', href: '#about' },
    { name: 'Портрет учасника', href: '#portrait' },
    { name: 'Наш досвід', href: '#exp' },
    { name: 'Чому нас варто підтримати?', href: '#offer' },
    { name: 'Варіанти співпраці?', href: '#request' },
];



export default function HeroSection() {
    const initialText = "GAME:haCK 5.0";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [text, setText] = useState(initialText);

    const stopGlitchAnimation = () => {
        setText(initialText);
    };


    const handleScrollClick = useSmoothScrollTo();

    const startGlitchAnimation = () => {
        let iteration = 0;

        const interval = setInterval(() => {
            const newText = text
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return initialText[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            setText(newText);

            if (iteration >= initialText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };



    return (
        <div className="bg-black" id='start'>

            <Header setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} mobileMenuOpen={mobileMenuOpen} />

            <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('/deadsec.jpg')] [#0f0020] bg-cover bg-center min-h-screen flex flex-col justify-around">
                <div className="mx-auto max-w-3xl py-48 sm:py-64 lg:py-80">

                    <div className="text-center">

                        <AnimatedElement direction='left'>
                            <h1 className={`text-4xl sm:text-7xl font-bold  transition-all tracking-widest  text-neutral-200 bg-my-bg py-4 px-6 md:px-8 rounded-lg ${hacked.className}`}>
                                {text}
                            </h1>
                        </AnimatedElement>

                        <AnimatedElement direction='bottom'>
                            <h3 className={`text-2xl sm:text-4xl font-bold transition-all  text-neutral-200 backdrop-blur py-2 px-3 rounded-md w-fit mx-auto  ${rubik.className}`}>
                                13 - 15 жовтня
                            </h3>
                        </AnimatedElement>

                        <AnimatedElement direction='static'>
                            <p className={`neon-handwritten-text mt-6 mb-4 text-2xl leading-8 text-white font-extralight `}>
                                пропозиця партнерської співпраці
                            </p>
                        </AnimatedElement>

                        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-3">
                            <AnimatedElement direction='bottom'>

                                <button
                                    className={`bg-gradient-to-r from-my-lime to-green-600 btn hover:shadow-green-500 shadow-green-400`}>
                                    <span className='cursor-pointer' onClick={() => handleScrollClick('#help')}>Підтримати</span>
                                </button>
                            </AnimatedElement>
                            <AnimatedElement direction='bottom'>

                                <button
                                    className="btn  bg-neutral-300 text-neutral-800 hover:bg-transparent hover:text-neutral-300 backdrop-blur-md border-neutral-600 hover:border-my-lime border-2 hover:shadow-my-lime">
                                    <span onClick={() => handleScrollClick('#about')}>
                                        Дізнатися ще
                                    </span>
                                    <span aria-hidden="true"> →</span>
                                </button>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}