import apiService from './api.service'

const catService = {
    getList: () => apiService.get(`/breeds`),
    filterList: (payload) => {
        const { page, limit, breed } = payload
        return apiService.get(`/images/search?page=${page}&limit=${limit}&breed_id=${breed.id}`)
    },
    getDetails: (payload) => apiService.get(`/images/${payload}`)
}

export default catService