import { axios } from 'core'

export default {
    signin: (postData) => axios.post('user/signin',postData),
    getMe: () => {
        return axios.get('user/me')
    }
}