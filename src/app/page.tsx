

import HeroSection from '@/components/Hero'
import About from '@/components/About'
import Portrait from '@/components/Portrait'
import Partners from '@/components/Exp'
import Offer from '@/components/Offer'
import Request from '@/components/Request'
import Footer from '@/components/Footer'

// import HeroSection from "@/components/nHero"

export default function Home() {
  return (
    <main className="min-h-screen bg-my-bg">
      <HeroSection />
      <About />
      <Portrait />
      <div className="bg-gradient-to-r from-[#0c0f2e] to-[#1d0829] px-4 0">
        <hr className='opacity-1 h-1 bg-gradient-to-r rounded from-green-500 to-teal-500 border-none max-w-4xl mx-auto p-0' />
      </div>
      <Partners />
      <Offer />
      <Request />
      <Footer />
    </main >
  )
}
