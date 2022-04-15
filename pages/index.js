import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero/hero.component'
import DirectoryCard from '../components/card-directory/card-directory.component'
import Latest from '../components/latest/latest.component'

export default function Home() {
  return (
    <>
    <Hero />
    <DirectoryCard />
    <Latest />
    </>
  )
}
