import { train } from "@/app/fonts"

import AnimatedElement from "@/hooks/AnimatedElement"

import Image from "next/image"

export default function Portrait() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#0c0f2e] to-[#1d0829]" id='portrait'>

            <div className="mx-auto max-w-6xl py-44 px-10">
                <AnimatedElement direction='bottom'>
                    <h2 className={`${train.className} block-title`}>Портрет учасника</h2>
                </AnimatedElement>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    <AnimatedElement direction='left'>
                        <Image alt="avatar" className=" mx-auto rounded-full h-[70vw] w-[70vw] max-h-80 max-w-[20rem] object-cover ring-2 ring-green-500 ring-offset-4 ring-offset-[#130c2c] shadow-xl shadow-green-500" src={'/avatar.jpg'} width={400} height={400} />
                    </AnimatedElement>
                    <AnimatedElement direction='right'>
                        <div className="col-span-1 text-xl font-mono flex flex-col gap-2 ">
                            <h3 className="text-3xl text-center">Студенти та учні</h3>
                            <h3 className="text-2xl text-center">Вік: 17-23</h3>
                            <span className="text-xl mt-6">Спеціальності</span>
                            <ul className="list-disc list-inside">
                                <li>Комп’ютерна інженерія</li>
                                <li>Комп’ютерні науки</li>
                                <li>Системи штучного інтелекту</li>
                                <li>Системна інженерія</li>
                                <li>Інженерія програмного забезпечення</li>
                                <li>Робототехніка</li>
                                <li>Системний аналіз</li>
                                <li>Кібербезпека</li>
                                <li>Інші</li>
                            </ul>
                        </div>
                    </AnimatedElement>
                </div>
            </div>
        </div>
    )
}