import axios from 'axios';

const BASE_URL = 'https://front-assignment-api.2tapp.cc/api';

export type student = {
    id: number;
    name: string;
    avatar: string;
    sex: string;
    email: string;
    age: number;
    birthday: string;
    color: string;
    group: string;
    specialty: string;
    rating: number;
};

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function getStudents(): Promise<student[]> {
    const resposne = await axiosInstance.get('persons');
    const data = await resposne.data;
    const students = await data.students;
    return students.map((el: student) => ({
        ...el,
        age: calculateAge(el.birthday),
    }));
}

const calculateAge = (birthday: string) => {
    const birthdayDate = new Date(birthday);
    const timeDiff = Math.abs(Date.now() - birthdayDate.getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age;
};

export default axiosInstance;
