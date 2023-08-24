import styles from './Footes.module.css'
import Container from '../Container/Container';

function Footer() {
    return (
        <Container>
            <footer className={styles.footer}>
                <h4 className={styles.footer__title}>Drile</h4>
                <div className={styles.line}>
                    <div className={styles.links__cardOne}>
                        <a href="" className={styles.card__title}><h5 > ABOUT US</h5></a>
                        <a href="" className={styles.card__link}> <p>About Us</p></a>
                        <a href="" className={styles.card__link}> <p>Contact Us</p></a>
                        <a href="" className={styles.card__link}> <p>Privacy Policy</p></a>
                        <a href="" className={styles.card__link}> <p>Terms of Service</p></a>
                    </div>
                    <div className={styles.links__cardOne}>
                        <a href="" className={styles.card__title}><h5 > COMPANY</h5></a>
                        <a href="" className={styles.card__link}> <p>Explore World</p></a>
                        <a href="" className={styles.card__link}> <p>Trending Video</p></a>
                        <a href="" className={styles.card__link}> <p>Book a Trip</p></a>
                        <a href="" className={styles.card__link}> <p>Visit Gallery</p></a>
                    </div>
                    <div className={styles.links__cardOne}>
                        <a href="" className={styles.card__title}><h5 >USEFUL LINKS</h5></a>
                        <a href="" className={styles.card__link}> <p>Buy this theme</p></a>
                        <a href="" className={styles.card__link}> <p>Drile Landing</p></a>
                        <a href="" className={styles.card__link}> <p>Documentation</p></a>
                        <a href="" className={styles.card__link}> <p>Video tutorial</p></a>
                    </div>
                    <div className={styles.links__cardOne}>
                        <a href="" className={styles.card__title}><h5 >FOLLOW US</h5></a>
                        <a href="" className={styles.card__link}> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="70" viewBox="0 0 26 70" fill="none">
                            <path d="M10.9332 0C4.89557 0 0 4.92084 0 10.9897C0 16.4993 4.03815 21.049 9.29872 21.8437V13.9019H6.59359V11.0133H9.29872V9.09099C9.29872 5.90864 10.8412 4.5121 13.4727 4.5121C14.7325 4.5121 15.3999 4.60636 15.7149 4.64863V7.16991H13.9201C12.8032 7.16991 12.413 8.23507 12.413 9.43463V11.0133H15.6867L15.243 13.9019H12.413V21.8665C17.7493 21.1395 21.8665 16.5534 21.8665 10.9897C21.8665 4.92084 16.9713 0 10.9332 0Z" fill="#C1DBF0" />
                        </svg> <p>Facebook</p></a>
                        <a href="" className={styles.card__link}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="70" viewBox="0 0 26 70" fill="none">
                            <path d="M25.4905 51.8609C24.5903 52.2677 23.6224 52.5388 22.6013 52.6669C23.6395 52.0385 24.4381 51.0361 24.8129 49.8518C23.8415 50.4326 22.7655 50.859 21.6205 51.0838C20.7062 50.0954 19.4021 49.4823 17.9572 49.4823C15.1817 49.4823 12.9324 51.7564 12.9324 54.5601C12.9324 54.9568 12.9778 55.3434 13.0636 55.7186C8.88831 55.5048 5.18517 53.4808 2.70769 50.409C2.2724 51.1595 2.02753 52.0385 2.02753 52.9661C2.02753 54.7289 2.91268 56.2806 4.26228 57.195C3.43845 57.1692 2.66309 56.9357 1.98422 56.5609C1.98422 56.5762 1.98422 56.599 1.98422 56.6204C1.98422 59.0839 3.71678 61.135 6.01328 61.602C5.59344 61.7192 5.15 61.7844 4.69285 61.7844C4.36821 61.7844 4.05214 61.7468 3.74594 61.6908C4.38536 63.7038 6.24057 65.1754 8.43844 65.2187C6.71874 66.5784 4.55304 67.3927 2.19778 67.3927C1.7908 67.3927 1.39326 67.3691 1 67.3205C3.22446 68.7572 5.86661 69.5995 8.70261 69.5995C17.944 69.5995 22.9993 61.8605 22.9993 55.147C22.9993 54.9271 22.9924 54.708 22.9821 54.4915C23.9689 53.7813 24.8189 52.8847 25.4905 51.8609Z" fill="#C1DBF0" />
                        </svg> <p>Twitter</p></a>
                        <a href="" className={styles.card__link}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="70" viewBox="0 0 20 19" fill="none">
                            <path d="M5.61114 0C2.51733 0 0 2.40433 0 5.35825V13.011C0 15.9646 2.51882 18.3678 5.6134 18.3678H13.6306C16.7248 18.3678 19.2425 15.9635 19.2425 13.0096V5.35609C19.2425 2.40291 16.7237 0 13.6291 0H5.61114ZM15.394 2.93886C15.8189 2.93886 16.1637 3.26801 16.1637 3.67357C16.1637 4.07913 15.8189 4.40828 15.394 4.40828C14.9691 4.40828 14.6243 4.07913 14.6243 3.67357C14.6243 3.26801 14.9691 2.93886 15.394 2.93886ZM9.62125 4.40828C12.3806 4.40828 14.6243 6.54997 14.6243 9.18392C14.6243 11.8179 12.3802 13.9596 9.62125 13.9596C6.86188 13.9596 4.6182 11.8175 4.6182 9.18392C4.6182 6.55034 6.86188 4.40828 9.62125 4.40828ZM9.62125 5.87771C7.70816 5.87771 6.1576 7.35779 6.1576 9.18392C6.1576 11.0101 7.70816 12.4901 9.62125 12.4901C11.5343 12.4901 13.0849 11.0101 13.0849 9.18392C13.0849 7.35779 11.5343 5.87771 9.62125 5.87771Z" fill="#C1DBF0" />
                        </svg> <p>Instagram</p></a>

                    </div>
                </div>
            </footer>
        </Container>
    )
}
export default Footer;