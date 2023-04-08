import Image from 'next/image'
import Hover from 'react-3d-hover'
import styles from '@/styles/Gallery.module.css'
import { useState, useEffect } from 'react'

const Card = ({ card, handleView }) => {
    return (
        <div className={styles.card} key={card.id}>
            <Hover scale={1.025} speed={1000}>
                <Image
                    className={styles.image}
                    src={card.src}
                    alt={card.name}
                    width={1136 / 4}
                    height={640 / 4}
                    title={card.name}
                    loading='lazy'
                    onClick={(event) => handleView(event)}
                />
            </Hover>
        </div>
    )
}

const View = ({ card, setCard }) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const windowResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        windowResize()
        window.addEventListener('resize', windowResize)
        return () => window.removeEventListener('resize', windowResize)
    }, [])

    let imgStyle = {}
    width > height / 9 * 16
        ? imgStyle = { width: 'auto', height: 'calc(100vh - 10rem)' }
        : imgStyle = { width: '90vw', height: 'auto' }
    if (card !== '')
        return (
            <div className={styles.view}>
                <Hover scale={1.025} speed={1000}>
                    <Image
                        className={styles.image}
                        src={card.src}
                        alt={card.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={imgStyle}
                    />
                </Hover>
                <a href='#' onClick={() => {
                    event.preventDefault()
                    setCard('')
                }} className={styles.close}>CLOSE</a>
            </div>
        )
}

const Gallery = () => {
    const rinze_produce = require('/public/list/rinze_produce.json')
    const rinze_support = require('/public/list/rinze_support.json')
    const cards = rinze_produce.concat(rinze_support)

    const [card, setCard] = useState('')

    const handleView = (event) => {
        const currentCard = (cards.filter(card => card.name === event.target.alt))[0]
        setCard(currentCard)
    }

    return (
        <div className={styles.gallery} id='gallery'>
            <View card={card} setCard={setCard} />
            {cards.map((card, id) => <Card card={card} key={id} handleView={handleView} />)}
        </div>
    )
}

export default Gallery