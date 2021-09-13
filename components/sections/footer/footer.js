// Footer
import useTranslation from 'next-translate/useTranslation';
import styles from './footer.module.scss';
import Image from 'next/image';

const Footer = () => {
    const { t } = useTranslation('common');
    return (
        <footer className={`${styles.containerMobile} ${styles.container}`}>
            <ul className={styles.footerList}>
                <li className={styles.listItem}>
                    <Image
                        width={30}
                        height={30}
                        layout="fixed"
                        src="/images/icons/SVG/teliconblack.svg"
                        alt="telefono"
                    />{' '}
                    11-39844968
                </li>
                <li className={styles.listItem}>
                    <Image
                        width={30}
                        height={30}
                        layout="fixed"
                        src="/images/icons/SVG/emailblack.svg"
                        alt="email icon"
                    />
                    info@acqit.com.ar
                </li>
                <li className={styles.listItem}>
                    <Image
                        width={30}
                        height={30}
                        layout="fixed"
                        src="/images/icons/SVG/placeicon.svg"
                        alt="place icon"
                    />
                    Arcos 2836
                </li>
            </ul>
            <hr />
            <ul className={styles.socialList}>
                <li className={styles.socialitem}>
                    <Image
                        width={30}
                        height={30}
                        layout="fixed"
                        src="/images/icons/SVG/linkedinblack.svg"
                        alt="linkedin"
                    />
                </li>
                <li className={styles.socialitem}>
                    <Image
                        width={30}
                        height={30}
                        layout="fixed"
                        src="/images/icons/SVG/facebookblackicon.svg"
                        alt="facebook"
                    />
                </li>
                <li className={styles.socialitem}>
                    <Image
                        width={30}
                        height={30}
                        layout="fixed"
                        src="/images/icons/SVG/instagramblack.svg"
                        alt="instagram"
                    />
                </li>
            </ul>
            <div className={styles.goToTop}>
                <Image
                    width={30}
                    height={120}
                    layout="fixed"
                    src="/images/icons/SVG/flecha.svg"
                    alt="go to top"
                />
            </div>
            <section className={styles.logoContainer}>
                <div className={styles.imgContainer}>
                    <Image
                        width={200}
                        height={50}
                        src="/images/icons/SVG/logo.svg"
                        alt={t('logo')}
                    />
                </div>
            </section>
        </footer>
    );
};

export default Footer;