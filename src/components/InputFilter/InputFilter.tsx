import classNames from 'classnames';
import styles from './InputFilter.module.css';
import globalStyles from '../../App.module.css';
import { useEffect, useState } from 'react';
import { getStudents } from '../../api/students';

const InputFilter = (props: {
    filterArray: Array<object>;
    setFilterArray: (arr: Array<object>) => void;
    propertyName: string;
}) => {
    const { filterArray, setFilterArray, propertyName } = props;

    const [search, setSearch] = useState('');

    const filter = (arr: Array<object>, searchText: string) => {
        console.log(searchText, arr);
        setFilterArray(
            filterArray.filter((el) =>
                el[propertyName]
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            )
        );
    };

    useEffect(() => {
        getStudents().then((res) => {
            if (search) filter(res, search);
            else setFilterArray(res);
        });
    }, [search]);

    return (
        <input
            className={classNames(
                styles['input-filters__input'],
                globalStyles['input']
            )}
            type="search"
            placeholder="Поиск по имени"
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

export default InputFilter;
