import { Pacifico, Monoton, Press_Start_2P, Rubik_80s_Fade, Tektur, Lacquer } from 'next/font/google'
import localFont from 'next/font/local'

export const hacked = localFont({ src: '../fonts/HACKED.ttf' })

export const tektur = Tektur({ weight: "400", display: 'swap', subsets: ['cyrillic', 'latin'] })
export const rubik = Rubik_80s_Fade({ weight: "400", display: 'swap', subsets: ['cyrillic', 'latin'] })

export const pacifico = Pacifico({ weight: "400", display: 'swap', subsets: ['cyrillic', 'latin'] })
export const retro = Monoton({ weight: "400", display: 'swap', subsets: ['latin'] })
export const train = Press_Start_2P({ weight: "400", display: 'swap', subsets: ['cyrillic'] })
