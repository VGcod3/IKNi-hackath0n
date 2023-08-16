import { train } from "@/app/fonts"



import Image from "next/image"

export default function Portrait() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#0c0f2e] to-[#1d0829]" id='portrait'>

            <div className="mx-auto max-w-6xl py-44 px-10">
                <h2 className={`${train.className} block-title`}>Портрет учасника</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    <div className="mx-auto">
                        <Image alt="avatar" className="rounded-full h-[400px] w-[400px] object-cover ring-2 ring-my-pink ring-offset-4 ring-offset-[#130c2c] shadow-xl shadow-my-pink" src={'/avatar.jpg'} width={400} height={400} />
                    </div>
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
                </div>
            </div>
        </div>
    )
}