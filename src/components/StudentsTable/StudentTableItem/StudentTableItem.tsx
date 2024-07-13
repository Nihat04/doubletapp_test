import styles from '../StudentsTable.module.css';
import deleteIcon from '../../../assets/svg/delete-icon.svg';
import gridStyles from '../grid.module.css';
import classNames from 'classnames';

const StudentTableItem = (props) => {
    const { student } = props;

    const calculateAge = (birthday) => {
        const birthdayDate = new Date(birthday);
        const timeDiff = Math.abs(Date.now() - birthdayDate.getTime());
        const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        return age;
    };

    const avatarStyle = {
        backgroundImage: `url(${student.avatar})`,
    };

    return (
        <div className={gridStyles['grid']}>
            <div className={styles['student-avatar']} style={avatarStyle}></div>
            <p>{student.name}</p>
            <p>{student.specialty}</p>
            <p>{student.group}</p>
            <p>{calculateAge(student.birthday)}</p>
            <p>{student.rating}</p>
            <div
                className={classNames(
                    styles['student-color'],
                    styles[student.color]
                )}
            ></div>
            <button className={styles['student--delete-btn']}>
                <img src={deleteIcon} alt="" />
            </button>
        </div>
    );
};

export default StudentTableItem;
