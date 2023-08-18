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
                        <div className="col-span-1 flex flex-col gap-2">
                            <p className=" text-base lg:text-xl font-mono">
                                <span className="font-bold">ХАКАТОН</span> —
                                це щорічна подія, де талановиті команди студентів мають можливість об'єднати свої знання та креативність, щоб протягом обмеженого часу - у нашому випадку, близько 48 годин - створити ігровий проект згідно з заданими критеріями.
                            </p>
                            <p className=" text-base lg:text-xl font-mono">
                                Також важливо відзначити, що хакатон відбудеться з 13 по 15 жовтня. Наша команда планує організувати гібридний формат, де учасники зможуть брати участь як онлайн, так і офлайн. Це чудова ідея, оскільки такий підхід забезпечує більше гнучкості та можливостей для залучення більшої кількості учасників незалежно від їх місця розташування.                                </p>
                            <p className=" text-base lg:text-xl font-mono">
                                Команди будуть боротися за звання переможця, а також у фіналі отримають оцінку і поради від представників ІТ-компаній. Завдяки такому заходу ми стимулюємо розвиток та співпрацю в інформаційній сфері серед молоді, сприяємо створенню нових ідей та можливих проектів.
                            </p>
                        </div>
                    </AnimatedElement>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}