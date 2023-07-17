import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import CameraCapture from '@/components/Camera'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <CameraCapture/>
    </div>
  )
}
