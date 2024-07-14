import styles from './Header.module.css';
import logo from '../../assets/svg/logo.svg';

const MOBILE__HEADER__TEXT = <span>STUDENTS</span>;
const HEADER__TEXT = (
    <span>
        STUDENTS by <span className={styles['color--blue']}>Nihat04</span>
    </span>
);

const Header = () => {
    const isMobile = document.body.clientWidth < 768;
    const headerText = isMobile ? MOBILE__HEADER__TEXT : HEADER__TEXT;

    return (
        <header className={styles['header']}>
            <div className={styles['header__logo--wrapper']}>
                <img
                    className={styles['header__logo']}
                    src={logo}
                    alt="логотип"
                />
            </div>
            <h1 className={styles['header__header-text']}>{headerText}</h1>
        </header>
    );
};

export default Header;
