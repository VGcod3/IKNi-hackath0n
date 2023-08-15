import { train } from "@/app/fonts"


import Carousel from "./Carousel"


export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#0c0f2e] to-[#1d0829]" id='about'>

            <div className="mx-auto max-w-6xl py-44 px-10">
                <h2 className={`${train.className} block-title`}>
                    Більше про IT- QUEST
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                    <p className="col-span-1 text-xl font-mono">
                        <span className="font-bold">IT-quest</span> —
                        це проект, метою якого є  ознайомити студентів з ІТ-компаніями зсередини, показати їм "кухню" IT, надати можливість побувати всередині і відчути атмосферу компанії, поспілкуватися з людьми, що там працюють. Оскільки учасники квесту - це майбутні програмісти або люди, професія яких буде пов'язана з інформаційними технологіями, то вони є Вашими потенційними працівниками. Відповідно проект є цікавим як для учасників, так і для компаній-партнерів.</p>

                    <Carousel />
                </div>
            </div>
        </div>
    )
}