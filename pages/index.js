import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const rinze = require('/public/list/renze.json')

const Gallery = () => rinze.map((card) => {
  return (
    <div className={styles.card} key={card.id}>
      <Image className={styles.image} src={card.src} alt={card.name} width={1136 / 4} height={640 / 4} />
      <Image className={styles.image} src={card.src_fes} alt={card.name} width={1136 / 4} height={640 / 4} />
      <p>{card.type} {card.rarity} {card.name}</p>
    </div>
  )

})

export default function Home() {
  return (
    <>
      <Head>
        <title>Rinze</title>
        <meta name="description" content="杜野凛世 Morino Rinze 283 04 70 " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Gallery />
      </main>
    </>
  )
}
