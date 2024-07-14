import { useEffect, useState } from 'react';
import { getStudents } from '../../api/students';
import styles from './Students.module.css';
import globalStyles from '../../App.module.css';
import StudentsTable from '../StudentsTable/StudentsTable';
import Filters from '../FilterGroup1/FilterGroup1';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents().then((res) => setStudents(res));
    }, []);

    const studentsDropdownFilters = [
        {
            name: 'name',
            displayName: 'Имя А-Я',
            reverse: false,
        },
        {
            name: 'name',
            displayName: 'Имя Я-А',
            reverse: true,
        },
        {
            name: 'age',
            displayName: 'Сначала моложе',
            reverse: false,
        },
        {
            name: 'age',
            displayName: 'Сначала старше',
            reverse: true,
        },
        {
            name: 'rating',
            displayName: 'Высокий рейтинг',
            reverse: true,
        },
        {
            name: 'rating',
            displayName: 'Низкий рейтинг',
            reverse: false,
        },
    ];

    return (
        <section className={styles['students']}>
            <div className={globalStyles['container']}>
                <h2 className={styles['students__header']}>Студенты</h2>
                <div className={styles['students__filters--wrapper']}>
                    <Filters
                        filterArray={students}
                        setFilterArray={setStudents}
                        inputPropertyName="name"
                        dropdownOptions={studentsDropdownFilters}
                    />
                </div>
                <StudentsTable arr={students} />
            </div>
        </section>
    );
};

export default Students;
