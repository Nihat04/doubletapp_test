import classNames from 'classnames';
import styles from './InputFilter.module.css';
import globalStyles from '../../App.module.css';

const InputFilter = (props: { searchFunc: (searchText: string) => void }) => {
    const { searchFunc } = props;

    return (
        <input
            className={classNames(
                styles['input-filters__input'],
                globalStyles['input']
            )}
            type="search"
            placeholder="Поиск по имени"
            onChange={(e) => searchFunc(e.target.value)}
        />
    );
};

export default InputFilter;
