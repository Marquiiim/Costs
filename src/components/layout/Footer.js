import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'


function Footer() {

    const RedirectToInstagram = () => {
        window.open('https://www.instagram.com/mxrqiim/', '_blank', 'noopener,noreferrer')
    }
    const RedirectToWhatsapp = () => {
        window.open('https://wa.me/85985720251', '_blank', 'noopener,noreferrer')
    }
    const RedirectToLinkedin = () => {
        window.open('https://www.linkedin.com/in/marcos-gabriel-05287a322/', '_blank', 'noopener,noreferrer')
    }

    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaWhatsapp onClick={RedirectToWhatsapp} />
                </li>
                <li>
                    <FaInstagram onClick={RedirectToInstagram} />
                </li>
                <li>
                    <FaLinkedin onClick={RedirectToLinkedin} />
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2024
            </p>
        </footer>
    )
}

export default Footer