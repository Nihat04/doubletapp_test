import { useEffect, useState } from 'react';
import { getStudents } from '../../api/students';
import styles from './Students.module.css';
import globalStyles from '../../App.module.css';
import StudentsTable from '../StudentsTable/StudentsTable';
import Filter from '../Filter/Filter';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents().then((res) => setStudents(res));
    }, []);

    return (
        <section className={styles['students']}>
            <div className={globalStyles['container']}>
                <h2 className={styles['students__header']}>Студенты</h2>
                <div className={styles['students__filters--wrapper']}>
                    <Filter />
                </div>
                <StudentsTable arr={students} />
            </div>
        </section>
    );
};

export default Students;
