import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_BASE_URL

const createAPI = () => {
    const options = {
        baseURL: apiUrl,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    }
    return options
}

const apiService = axios.create(createAPI())

export default apiService
