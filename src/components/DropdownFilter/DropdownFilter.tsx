import styles from './DropdownFilter.module.css';
import globalStyles from '../../App.module.css';
import classNames from 'classnames';
import { useState } from 'react';

const DropdownFilter = (props: {
    filterArray: Array<object>;
    setFilterArray: (arr: Array<any>) => void;
    options: {
        id: number;
        name: string;
        displayName: string;
        reverse: boolean;
    }[];
}) => {
    const { filterArray, setFilterArray, options } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [currentFilter, setCurrentFilter] = useState({displayName: 'Сортировать'});

    const filter = (option: {
        name: string;
        displayName: string;
        reverse: boolean;
    }) => {
        setFilterArray([
            ...filterArray.sort((el1, el2) => {
                const firstElName = el1[option.name];
                const secondElName = el2[option.name];
                let comparison = 0;

                if (firstElName > secondElName) comparison = 1;
                else if (firstElName < secondElName) comparison = -1;

                return option.reverse ? -comparison : comparison;
            }),
        ]);
        setIsOpen(false);
        setCurrentFilter(option);
    };

    return (
        <div className={styles['dropdown-filter']}>
            <button
                className={classNames(
                    styles['dropdown-filter--btn'],
                    globalStyles['input']
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                {currentFilter.displayName}
            </button>
            <div
                className={classNames(styles['dropdown-filter__menu'], {
                    [styles['dropdown-filter__menu--open']]: isOpen,
                })}
            >
                {options.map((option, index) => (
                    <button
                        className={classNames(
                            styles['dropdown-filter__option'],
                            {
                                [styles['dropdown-filter__option--active']]:
                                    currentFilter.id === option.id,
                            }
                        )}
                        name={option.name}
                        key={index}
                        onClick={() => filter(option)}
                    >
                        {option.displayName}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DropdownFilter;
