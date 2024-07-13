import styles from './StudentsTable.module.css';
import classNames from 'classnames';
import StudentTableItem from './StudentTableItem/StudentTableItem';
import gridStyles from './grid.module.css';

const StudentsTable = (props) => {
    const { arr: students } = props;

    return (
        <div className={styles['table']}>
            <div
                className={classNames(
                    styles['table__header'],
                    gridStyles['grid']
                )}
            >
                <span className={gridStyles['col-2']}>ФИО</span>
                <span>Специальность</span>
                <span>Группа</span>
                <span>Возраст</span>
                <span>Рейтинг</span>
            </div>
            <div className={styles['table__body']}>
                {students.map((student) => (
                    <StudentTableItem student={student} key={student.id} />
                ))}
            </div>
        </div>
    );
};

export default StudentsTable;
