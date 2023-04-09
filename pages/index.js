import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '@/styles/Home.module.css'
import Info from '@/components/info'
// import Gallery from '../components/gallery'
const Gallery = dynamic(() => import('../components/gallery'))

const Home = () => {
    return (
        <>
            <Head>
                <title>杜野凛世（もりの りんぜ）</title>
                <meta name="description" content="杜野 凛世 もりの りんぜ Morino Rinze 283 04 70 " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                {/* <Info /> */}
                <Gallery />
            </main>
        </>
    )
}

export default Home