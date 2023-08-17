import { train } from "@/app/fonts"
import AnimatedElement from "@/hooks/AnimatedElement"

import Carousel from "./Carousel"


export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#0c0f2e] to-[#1d0829]" id='about'>

            <div className="mx-auto max-w-6xl py-44 px-10">
                <AnimatedElement direction='bottom'>

                    <h2 className={`${train.className} block-title`}>
                        Більше про ХАКАТОН
                    </h2>
                </AnimatedElement>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <AnimatedElement direction='left'>
                        <div className="col-span-1">
                            <p className=" text-xl font-mono">
                                <span className="font-bold">ХАКАТОН</span> —
                                це захід, під час якого студенти IT-спеціальностей командно створюють новий програмний продукт за 24 години в форматі non-stop programming.</p>

                            <p className=" text-xl font-mono">
                                Це один з найцікавіших форматів проведення змагань, оскільки за короткий час команди повинні створити свій проєкт та вдало його презентувати. Хороша можливість для студентів покращити навички роботи в команді, познайомитись з однодумцями і поспілкуватись з представниками компаній.
                            </p>
                        </div>
                    </AnimatedElement>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}