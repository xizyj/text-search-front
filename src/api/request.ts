import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
});

function get(url:string):Promise{
    return  instance.get(url)
}

export {get}