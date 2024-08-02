import Image from 'next/image'
import { Inter } from 'next/font/google'
import Homepage from "@/components/Homepage.1"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Homepage />
  )
}
