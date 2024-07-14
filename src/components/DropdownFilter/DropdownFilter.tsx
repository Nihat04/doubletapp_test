import styles from './DropdownFilter.module.css';
import globalStyles from '../../App.module.css';
import classNames from 'classnames';
import { useState } from 'react';

const DropdownFilter = (props: {
    filterArray: Array<object>;
    setFilterArray: (arr: Array<any>) => void;
    options: { name: string; displayName: string; reverse: boolean }[];
}) => {
    const { filterArray, setFilterArray, options } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [currentFilter, setCurrentFilter] = useState(options[0].displayName);

    const filter = (options: {
        name: string;
        displayName: string;
        reverse: boolean;
    }) => {
        setFilterArray(
            filterArray.sort((el1, el2) => {
                const firstElName = el1[options.name];
                const secondElName = el2[options.name];
                let comparison = 0;

                if (firstElName > secondElName) comparison = 1;
                else if (firstElName < secondElName) comparison = -1;

                return options.reverse ? -comparison : comparison;
            })
        );
        console.log(filterArray);
        setIsOpen(false);
        setCurrentFilter(options.displayName);
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
                {currentFilter}
            </button>
            <div
                className={classNames(styles['dropdown-filter__menu'], {
                    [styles['dropdown-filter__menu--open']]: isOpen,
                })}
            >
                {options.map((option, index) => (
                    <button
                        className={styles['dropdown-filter__option']}
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
