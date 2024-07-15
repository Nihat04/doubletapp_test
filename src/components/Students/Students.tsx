import { useEffect, useState } from 'react';
import { getStudents } from '../../api/students';
import styles from './Students.module.css';
import globalStyles from '../../App.module.css';
import StudentsTable from '../StudentsTable/StudentsTable';
import Filters from '../FilterGroup1/FilterGroup1';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState('');

    const calculateAge = (birthday: string) => {
        const birthdayDate = new Date(birthday);
        const timeDiff = Math.abs(Date.now() - birthdayDate.getTime());
        const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        return age;
    };

    useEffect(() => {
        getStudents().then((res) => {
            setStudents(
                res
                    .map((el) => ({ ...el, age: calculateAge(el.birthday) }))
                    .filter((el) =>
                        el.name.toLowerCase().includes(search.toLowerCase())
                    )
            );
        });
    }, [search]);

    const studentsDropdownFilters = [
        {
            id: 1,
            name: 'name',
            displayName: 'Имя А-Я',
            reverse: false,
        },
        {
            id: 2,
            name: 'name',
            displayName: 'Имя Я-А',
            reverse: true,
        },
        {
            id: 3,
            name: 'age',
            displayName: 'Сначала моложе',
            reverse: false,
        },
        {
            id: 4,
            name: 'age',
            displayName: 'Сначала старше',
            reverse: true,
        },
        {
            id: 5,
            name: 'rating',
            displayName: 'Высокий рейтинг',
            reverse: true,
        },
        {
            id: 6,
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
                        searchFunc={setSearch}
                        dropdownOptions={studentsDropdownFilters}
                    />
                </div>
                <StudentsTable arr={students} setArr={setStudents} />
            </div>
        </section>
    );
};

export default Students;
