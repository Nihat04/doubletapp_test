import styles from '../StudentsTable.module.css';
import classNames from 'classnames';
import deleteIcon from '../../../assets/svg/delete-icon.svg';

const StudentTableItemMobile = (props) => {
    const { student, deleteFunc } = props;

    const avatarStyle = {
        backgroundImage: `url(${student.avatar})`,
    };
    return (
        <div className={styles['item']}>
            <div className={styles['item__header']}>
                <div className={styles['student-avatar']} style={avatarStyle} />
                <div className={styles['item__header__info']}>
                    <p className={styles['item__header__info__name']}>
                        {student.name}
                    </p>
                    <div className={styles['item__header__info__bottom']}>
                        <div
                            className={classNames(
                                styles['student-color'],
                                styles[student.color]
                            )}
                        />
                        <p className={styles['item__header__info__rating']}>
                            {student.rating}
                        </p>
                    </div>
                </div>
                <button
                    className={styles['student--delete-btn']}
                    onClick={() => deleteFunc(student.id)}
                >
                    <img src={deleteIcon} alt="" />
                </button>
            </div>
            <div className={styles['item__body']}>
                <ul className={styles['item__body__list']}>
                    <li className={styles['item__body__list__item']}>
                        {student.age}
                    </li>
                    <li className={styles['item__body__list__item']}>
                        {student.specialty}
                    </li>
                    <li className={styles['item__body__list__item']}>
                        {student.group}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default StudentTableItemMobile;
