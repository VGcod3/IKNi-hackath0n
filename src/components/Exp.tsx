import { train } from '@/app/fonts'
import Image from 'next/image';

type partnerInfo = {
    name: string;
    key: number;
}

const partners = [
    { name: "Sombra" },
    { name: "Perfectial" },
    { name: "KindGeek" },
    { name: "Intellias" },
    { name: "TechMagic" },
    { name: "DataArt" },
    { name: "Inoxoft" },
    { name: "Eleks" },
    { name: "Symphony Solutions" },
    { name: "Sigma Software" }
]

const Partner = ({ name }: partnerInfo) => {
    return (
        <div className="hover:bg-gradient-to-t bg-my-pink from-my-blue  to-my-pink p-[2px]  hover:shadow-lg hover:shadow-my-blue hover:scale-105 transition-all">
            <div className="col-span-2 h-28 w-48 lg:col-span-1 flex items-center  justify-center  text-center text-3xl  tracking-widest bg-[#000000]">
                {name}
            </div>
        </div>
    )
}

export default function Exp() {
    return (
        <div className="bg-gradient-to-r from-[#0c0f2e] to-[#1d0829] py-6 " id='exp'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col justify-around align-middle">

                <h2 className={`${train.className} block-title`}>
                    Наш досвід
                </h2>

                <div className="grid grid-cols-4 gap-4 justify-center">

                    <Image src={'/post1.png'} height={400} width={250} alt='poster' className='col-span-1' />
                    <Image src={'/post2.png'} height={400} width={250} alt='poster' className='col-span-1' />
                    <Image src={'/post3.png'} height={400} width={250} alt='poster' className='col-span-1' />
                    <Image src={'/post4.png'} height={400} width={250} alt='poster' className='col-span-1' />

                </div>

                <div className="bg-[#0000004f] md:p-20 pb-10 rounded-md mx-auto mt-10 w-full">

                    <h4 className="text-center text-3xl font-mono leading-8 text-white drop-shadow shadow-my-blue my-10">Нас підтримали</h4>
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
