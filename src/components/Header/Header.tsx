import React from 'react';
import styles from './Header.module.css';
import globalStyles from '../../App.module.css';
import logo from '../../assets/svg/logo.svg';
import classNames from 'classnames';

const Header = () => {
    return (
        <header className={styles['header']}>
            <div
                className={classNames(
                    globalStyles['container'],
                    styles['container']
                )}
            >
                <img
                    className={styles['header__logo']}
                    src={logo}
                    alt="логотип"
                />
                <h1 className={styles['header__header-text']}>
                    STUDENTS by{' '}
                    <span className={styles['color--blue']}>Nihat04</span>
                </h1>
            </div>
        </header>
    );
};

export default Header;
