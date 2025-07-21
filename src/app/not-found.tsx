import GameOverScreen from '@/components/gameOverScreen'
import { Press_Start_2P } from 'next/font/google'

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start',
})

 
export default function NotFound() {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen text-center text-black z-30 w-full h-screen bg-transparent relative overflow-hidden ${pressStart.variable}`}>
      <GameOverScreen />
      
    </div>
  )
}