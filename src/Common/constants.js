import axios from 'axios';

export const apiHost = 'http://localhost:3000'
export const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwMiwidXNlck5hbWUiOiJxUlhPY1lTUFpvIn0.lxqJetKx0_gmahyNJ_f1pF9QDk69O7yTb8cGIjgB5Vo'

export const instance = axios.create({
    baseURL: 'http://18.217.81.139:3000',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});