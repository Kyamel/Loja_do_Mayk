import Link from "next/link"

import { Press_Start_2P } from 'next/font/google'

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start',
})

export default function GameOverScreen() {
  

    return (
        <div className={`z-10 text-center text-white space-y-6 ${pressStart.variable}`}>
            <div className="text-2xl text-black">❤️❤️❤️🤍🤍</div>

            <h1 className="text-2xl text-orange-500 drop-shadow-[2px_2px_0px_#000] w-full">
                GAME OVER
            </h1>

            <div className="text-white text-3xl">
                TRY AGAIN?
            </div>

           <Link href="/" className="text-white text-2xl underline">Return Home</Link>

            <div className="absolute top-4 right-4 text-right text-white text-xs">
                <div>SCORE:</div>
                <div className="text-yellow-400 text-xl font-bold">320</div>
            </div>
        </div>
    )
}
