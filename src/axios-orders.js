import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://brgrer-4e635.firebaseio.com/'
})

export default instance