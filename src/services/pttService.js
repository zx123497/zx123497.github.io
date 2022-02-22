import axios from './instance/axios'

const pttService = {
    getArticles: async () => {
        try {
            const response = await axios.get('/ptt')
            return response
        } catch (error) {
            throw error
        }
    },
    postArticle: async (data) => {
        try {
            const response = await axios.post('/ptt', data)
            return response
        } catch (error) {
            throw error
        }
    },
    getArticle: async (id) => {
        try {
            const response = await axios.get(`/ptt/${id}`)
            return response
        } catch (error) {
            throw error
        }
    },
    deleteArticle: async (id) => {
        try {
            const response = await axios.delete(`/ptt/${id}`)
            return response
        } catch (error) {
            throw error
        }
    },
    putArticle: async (id, data) => {
        try {
            const response = await axios.delete(`/ptt/${id}`, data)
            return response
        } catch (error) {
            throw error
        }
    },
}

export default pttService
