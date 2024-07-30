import styles from './FilterGroup1.module.css';
import DropdownFilter, {
    dropdownFilterObject,
} from '../DropdownFilter/DropdownFilter';
import InputFilter from '../InputFilter/InputFilter';

const FilterGroup1 = (props: {
    filterArray: Array<object>;
    setFilterArray: (arr: dropdownFilterObject[]) => void;
    searchFunc: (searchText: string) => void;
    dropdownOptions: dropdownFilterObject[];
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
