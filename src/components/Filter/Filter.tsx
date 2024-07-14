import styles from './Filter.module.css';
import DropdownFilter from '../DropdownFilter/DropdownFilter';
import InputFilter from '../InputFilter/InputFilter';

const Filter = (props) => {
    return (
        <div className={styles['filters']}>
            <InputFilter />
            <DropdownFilter />
        </div>
    );
};

export default Filter;
