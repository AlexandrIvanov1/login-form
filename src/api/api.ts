import axios from 'axios';
import {FormDataType} from '../pages/auth-page/auth-form/auth-form';


export const authAPI = {
    login(data: FormDataType) {
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(res => res.data)
            .then(data => alert('success: ' + JSON.stringify(data)));
    }
};