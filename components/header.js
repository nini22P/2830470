import styles from '@/styles/Header.module.css'

const Nav = ({ item, handleScroll }) => {
    return <a
        href='#'
        data-target={item.toLowerCase()}
        onClick={(event) => handleScroll(event)}
    >{item}</a>
}

const Header = () => {
    // const nav = ['INFO', 'GALLERY']
    const nav = ['GALLERY']

    const handleScroll = (event) => {
        event.preventDefault()
        document.getElementById(event.target.dataset.target).scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>MORINO RINZE</h1>
            <nav className={styles.nav}>
                {nav.map((item, id) => <Nav item={item} key={id} handleScroll={handleScroll} />)}
            </nav>
        </div>
    )
}

export default Header