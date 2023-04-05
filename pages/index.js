import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Hover from 'react-3d-hover'

const rinze_produce = require('/public/list/rinze_produce.json')
const rinze_support = require('/public/list/rinze_support.json')

const GalleryProduce = ({ list }) => list.map((card) => {
  return (
    <div className={styles.card} key={card.id}>
      <Hover scale={1.025} speed={1000}>
        <Image className={styles.image} src={card.src} alt={card.name} width={1136 / 4} height={640 / 4} title={card.name} />
      </Hover>
      <Hover scale={1.025} speed={1000}>
        <Image className={styles.image} src={card.src_fes} alt={card.name + 'FES'} width={1136 / 4} height={640 / 4} title={card.name + ' +'} />
      </Hover>
    </div>)
})

const GallerySupport = ({ list }) => list.map((card) => {
  return (
    <div className={styles.card} key={card.id}>
      <Hover scale={1.025} speed={1000}>
        <Image className={styles.image} src={card.src} alt={card.name} width={1136 / 4} height={640 / 4} title={card.name} />
      </Hover>
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
        <gallery className={styles.gallery} >
          <GalleryProduce list={rinze_produce} />
          <GallerySupport list={rinze_support} />
        </gallery>
      </main>
    </>
  )
}
