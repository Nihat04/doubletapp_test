import React from 'react';
import styles from './Header.module.css';
import globalStyles from '../../App.module.css';
import logo from '../../assets/svg/logo.svg';
import classNames from 'classnames';

const Header = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['header__logo--container']}>
                <img
                    className={styles['header__logo']}
                    src={logo}
                    alt="логотип"
                />
            </div>
            <h1 className={styles['header__header-text']}>
                STUDENTS by{' '}
                <span className={styles['color--blue']}>Nihat04</span>
            </h1>
        </header>
    );
};

export default Header;
