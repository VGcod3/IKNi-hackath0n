'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';

export default function Carousel() {

    return <Swiper
        effect='fade'
        modules={[EffectFade]}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        spaceBetween={10}
        className='col-span-1 w-full'
    >
        <SwiperSlide>
            <Image src={`/quest1.png`} alt={`Slide 1`} width={500} height={500} className="h-[500px] rounded object-cover shadow-my-pink" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={`/quest2.png`} alt={`Slide 2`} width={500} height={500} className="h-[500px] rounded object-cover shadow-my-pink" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={`/quest3.png`} alt={`Slide 3`} width={500} height={500} className="h-[500px] rounded object-cover shadow-my-pink" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={`/quest4.png`} alt={`Slide 4`} width={500} height={500} className="h-[500px] rounded object-cover shadow-my-pink" />
        </SwiperSlide>
    </Swiper>
}