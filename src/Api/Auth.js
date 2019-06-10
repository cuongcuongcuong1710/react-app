import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://18.217.81.139:3000',
    timeout: 1000
});

export async function userLogin(userName, passWord){
    const token = await instance.post('/users/loginsdfds',{
        userName: userName,
        passWord: passWord
    });
    console.log('token:', token);
    return token;
};

