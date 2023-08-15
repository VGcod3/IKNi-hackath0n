import { train } from '@/app/fonts'

import Image from 'next/image'

export default function Exp() {
    return (
        <div className="bg-gradient-to-r from-[#0c0f2e] to-[#1d0829] py-6 " id='help'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col justify-around align-middle">
                <h2 className={`text-2xl mb-10`}>
                    За додатковими уточненнями та у разі виникнення запитань просимо звертатись до контактної особи, яка надіслала Вам лист з даною пропозицією.
                </h2>

                <p className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-violet-200'>З найкращими побажаннями,</p>

                <Image src={'/logo.png'} alt='logo' width={400} height={400} className='mx-auto h-80 w-auto' />

            </div>
        </div>
    )
}
