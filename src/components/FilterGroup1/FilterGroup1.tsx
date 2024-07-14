import styles from './FilterGroup1.module.css';
import DropdownFilter from '../DropdownFilter/DropdownFilter';
import InputFilter from '../InputFilter/InputFilter';

const FilterGroup1 = (props: {
    filterArray: Array<object>;
    setFilterArray: (arr) => void;
    inputPropertyName: string;
    dropdownOptions: { name: string; displayName: string; reverse: boolean }[];
}) => {
    const { filterArray, setFilterArray, inputPropertyName, dropdownOptions } =
        props;

    return (
        <div className={styles['filters']}>
            <InputFilter
                filterArray={filterArray}
                setFilterArray={setFilterArray}
                propertyName={inputPropertyName}
            />
            <DropdownFilter
                filterArray={filterArray}
                setFilterArray={setFilterArray}
                options={dropdownOptions}
            />
        </div>
    );
};

export default FilterGroup1;
