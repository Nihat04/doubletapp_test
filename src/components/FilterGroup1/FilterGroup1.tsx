import styles from './FilterGroup1.module.css';
import DropdownFilter from '../DropdownFilter/DropdownFilter';
import InputFilter from '../InputFilter/InputFilter';

const FilterGroup1 = (props: {
    filterArray: Array<object>;
    setFilterArray: (arr: Array<any>) => void;
    searchFunc: (searchText: string) => void;
    dropdownOptions: {
        id: number;
        name: string;
        displayName: string;
        reverse: boolean;
    }[];
}) => {
    const { filterArray, setFilterArray, searchFunc, dropdownOptions } = props;

    return (
        <div className={styles['filters']}>
            <InputFilter searchFunc={searchFunc} />
            <DropdownFilter
                filterArray={filterArray}
                setFilterArray={setFilterArray}
                options={dropdownOptions}
            />
        </div>
    );
};

export default FilterGroup1;
