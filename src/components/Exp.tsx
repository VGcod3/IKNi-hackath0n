import { train } from '@/app/fonts'
import Image from 'next/image';

import AnimatedElement from '@/hooks/AnimatedElement'

type partnerInfo = {
    name: string;
    key: number;
}

const partners = [
    { name: "Sombra" },
    { name: "Global Logic" },
    { name: "Perfectial" },
    { name: "KindGeek" },
    { name: "Intellias" },
    { name: "TechMagic" },
    { name: "DataArt" },
    { name: "Inoxoft" },
    { name: "Eleks" },
    { name: "Symphony Solutions" },
    { name: "Sigma Software" },
    { name: "N-iX" },
    { name: "Thuundermark" },
    { name: "AMC Bridge" },
    { name: "Leobit" },
    { name: "P2H" },
    { name: "Та інші" },
]


const Partner = ({ name }: partnerInfo) => {
    return (
        <AnimatedElement direction='bottom'>
            <div className="hover:bg-gradient-to-b bg-teal-500 from-teal-500  to-green-500 p-[2px]  hover:shadow-lg hover:shadow-green-400 hover:scale-105 transition-all rounded-lg">
                <div className="col-span-2 h-16 md:h-28 w-40 md:w-56 lg:col-span-1 flex items-center  justify-center  text-center text-xl md:text-3xl  tracking-widest bg-[#000000] rounded-lg">
                    {name}
                </div>
            </div>
        </AnimatedElement>
    )
}

export default function Exp() {
    return (
        <div className="bg-gradient-to-r from-[#0c0f2e] to-[#1d0829] py-6 " id='exp'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col justify-around align-middle">

                <AnimatedElement direction='bottom'>
                    <h2 className={`${train.className} block-title`}>
                        Наш досвід
                    </h2>
                </AnimatedElement>

                <div className="flex flex-wrap grid-cols-3 lg:grid-cols-5 gap-4 justify-center">

                    <AnimatedElement direction='bottom'>
                        <Image src={'/post0.png'} height={400} width={250} alt='poster' className='col-span-1' />
                    </AnimatedElement>
                    <AnimatedElement direction='bottom'>
                        <Image src={'/post1.png'} height={400} width={250} alt='poster' className='col-span-1' />
                    </AnimatedElement>
                    <AnimatedElement direction='bottom'>
                        <Image src={'/post2.png'} height={400} width={250} alt='poster' className='col-span-1' />
                    </AnimatedElement>

                    <AnimatedElement direction='bottom'>
                        <Image src={'/post4.png'} height={400} width={250} alt='poster' className='col-span-1' />
                    </AnimatedElement>

                </div>

                <div className="bg-[#0000004f] md:p-20 pb-10 rounded-md mx-auto mt-10 w-full">

                    <h4 className="text-center text-3xl font-mono leading-8 text-white drop-shadow shadow-green-500 my-10">Нас підтримали</h4>
                    <div className="flex justify-center flex-wrap gap-4">

                        {
                            partners.map((p, i) => <Partner key={i} name={p.name} />)
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}
