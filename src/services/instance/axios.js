import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://django-leo-web.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

// You can also use interceptors in an instance
instance.interceptors.request.use(
    (request) => {
        return request
    },
    (error) => {
        return Promise.reject(error)
    },
)

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default instance
