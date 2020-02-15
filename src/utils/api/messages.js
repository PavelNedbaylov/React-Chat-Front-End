import { axios } from 'core'

export default {
    getAllByDialogID: (id) => {
        return axios.get('messages?_id='+id)}
}