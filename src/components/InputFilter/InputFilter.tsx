import classNames from 'classnames';
import styles from './InputFilter.module.css';
import globalStyles from '../../App.module.css';

const InputFilter = () => {
    return (
        <input
            className={classNames(
                styles['input-filters__input'],
                globalStyles['input']
            )}
            type="search"
            placeholder="Поиск по имени"
            onChange={(e) => searchStudent(e.target.value)}
        />
    );
};

export default InputFilter;
