import { useEffect, useState } from 'react';
import globalStyles from '../../App.module.css';
import styles from './Students.module.css';
import classNames from 'classnames';
import { getStudents } from '../../api/students';
import StudentsTable from '../StudentsTable/StudentsTable';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (searchText) return;
        getStudents().then((res) => setStudents(res));
    }, []);

    const searchStudent = (searching: string) => {
        setSearchText(searching);
        setStudents(
            students.filter((student) => student.name.includes(searching))
        );
    };

    return (
        <section className={styles['students']}>
            <div className={globalStyles['container']}>
                <h2 className={styles['students__header']}>Студенты</h2>
                <div className={styles['students__filters']}>
                    <input
                        className={classNames(
                            styles['students__filters__input'],
                            globalStyles['input']
                        )}
                        type="search"
                        placeholder="Поиск по имени"
                        onChange={(e) => searchStudent(e.target.value)}
                    />
                    <select
                        className={classNames(
                            styles['students__filters__dropdown'],
                            globalStyles['input']
                        )}
                        name="students-filter"
                        id="filter"
                    >
                        <option
                            className={
                                styles['students__filters__dropdown__option']
                            }
                            value="alphabetic"
                        >
                            Имя А-Я
                        </option>
                        <option
                            className={
                                styles['students__filters__dropdown__option']
                            }
                            value="alphabetic-reverse"
                        >
                            Имя Я-А
                        </option>
                        <option
                            className={
                                styles['students__filters__dropdown__option']
                            }
                            value="age"
                        >
                            Сначала моложе
                        </option>
                        <option
                            className={
                                styles['students__filters__dropdown__option']
                            }
                            value="age-reverse"
                        >
                            Сначала старше
                        </option>
                        <option
                            className={
                                styles['students__filters__dropdown__option']
                            }
                            value="rating"
                        >
                            Высокий рейтинг
                        </option>
                        <option
                            className={
                                styles['students__filters__dropdown__option']
                            }
                            value="rating-reverse"
                        >
                            Низкий рейтинг
                        </option>
                    </select>
                </div>
                <StudentsTable arr={students} />
            </div>
        </section>
    );
};

export default Students;
