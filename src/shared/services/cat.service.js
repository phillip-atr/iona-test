import apiService from './api.service'

const catService = {
    getList: () => apiService.get(`/breeds`),
    filterList: (payload) => apiService.get(`/images/search`, {
        page: payload.page,
        limit: payload.limit,
        bread_id: payload.bread_id
    }),
    getDetails: (payload) => apiService.get(`/images/${payload}`)
}

export default catService