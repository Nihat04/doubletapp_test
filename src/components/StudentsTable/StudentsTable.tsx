import styles from './StudentsTable.module.css';
import classNames from 'classnames';
import StudentTableItem from './StudentTableItem/StudentTableItem';
import StudentTableItemMobile from './StudentTableItem/StudentTableItemMobile';
import gridStyles from './grid.module.css';

const StudentsTable = (props) => {
    const { arr: students, setArr } = props;
    const isMobile = document.body.clientWidth <= 768;

    const deleteStudent = (id) => {
        setArr([...students.filter((el) => el.id !== id)]);
    };

    return (
        <div className={styles['table']}>
            <div
                className={classNames(
                    styles['table__header'],
                    gridStyles['grid']
                )}
            >
                <p className={gridStyles['col-2']}>ФИО</p>
                <p>Специальность</p>
                <p>Группа</p>
                <p>Возраст</p>
                <p>Рейтинг</p>
            </div>
            <div className={styles['table__body']}>
                {students.map((student) =>
                    isMobile ? (
                        <StudentTableItemMobile
                            student={student}
                            key={student.id}
                            deleteFunc={deleteStudent}
                        />
                    ) : (
                        <StudentTableItem
                            student={student}
                            key={student.id}
                            deleteFunc={deleteStudent}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default StudentsTable;
