import styles from '../StudentsTable.module.css';
import deleteIcon from '../../../assets/svg/delete-icon.svg';
import gridStyles from '../grid.module.css';
import classNames from 'classnames';

const StudentTableItem = (props) => {
    const { student, deleteFunc } = props;

    const avatarStyle = {
        backgroundImage: `url(${student.avatar})`,
    };

    return (
        <div className={gridStyles['grid']}>
            <div className={styles['student-avatar']} style={avatarStyle} />
            <p className={styles['table__body__item__text']}>{student.name}</p>
            <p className={styles['table__body__item__text']}>
                {student.specialty}
            </p>
            <p className={styles['table__body__item__text']}>{student.group}</p>
            <p className={styles['table__body__item__text']}>{student.age}</p>
            <p className={styles['table__body__item__text']}>
                {student.rating}
            </p>
            <div
                className={classNames(
                    styles['student-color'],
                    styles[student.color]
                )}
            ></div>
            <button
                className={styles['student--delete-btn']}
                onClick={() => deleteFunc(student.id)}
            >
                <img src={deleteIcon} alt="" />
            </button>
        </div>
    );
};

export default StudentTableItem;
