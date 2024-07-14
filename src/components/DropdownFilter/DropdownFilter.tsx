import styles from './DropdownFilter.module.css';
import globalStyles from '../../App.module.css';
import classNames from 'classnames';
import { useState } from 'react';

const DropdownFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [curerentFilter, setCurrentFilter] = useState('Имя Я-А');

    return (
        <div className={styles['dropdown-filter']}>
            <button
                className={classNames(
                    styles['dropdown-filter--btn'],
                    globalStyles['input']
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                Фильтр
            </button>
            <div
                className={classNames(styles['dropdown-filter__menu'], {
                    [styles['dropdown-filter__menu--open']]: isOpen,
                })}
            >
                <button
                    className={styles['dropdown-filter__option']}
                    name="alphabetic"
                    onClick={(e) => setCurrentFilter(e.target.name)}
                >
                    Имя А-Я
                </button>
                <button
                    className={styles['dropdown-filter__option']}
                    name="alphabetic-reverse"
                    onClick={(e) => setCurrentFilter(e.target.name)}
                >
                    Имя Я-А
                </button>
                <button
                    className={styles['dropdown-filter__option']}
                    name="age"
                    onClick={(e) => setCurrentFilter(e.target.name)}
                >
                    Сначала моложе
                </button>
                <button
                    className={styles['dropdown-filter__option']}
                    name="age-reverse"
                    onClick={(e) => setCurrentFilter(e.target.name)}
                >
                    Сначала старше
                </button>
                <button
                    className={styles['dropdown-filter__option']}
                    name="rating"
                    onClick={(e) => setCurrentFilter(e.target.name)}
                >
                    Высокий рейтинг
                </button>
                <button
                    className={styles['dropdown-filter__option']}
                    value="rating-reverse"
                >
                    Низкий рейтинг
                </button>
            </div>
        </div>
    );
};

export default DropdownFilter;
