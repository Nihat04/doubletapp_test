import axios from 'axios';

const BASE_URL = 'https://front-assignment-api.2tapp.cc/api';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function getStudents() {
    const resposne = await axiosInstance.get('persons');
    const data = await resposne.data;
    const students = await data.students;

    return students;
}

export default axiosInstance;
