import axios from '../utils/axiosCustomize';


const postCreateUser = (email, password, username, role, image) => {
    //submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data)
}
const putUpdateUser = (id, username, role, image) => {
    console.log('>>>check id:', id);
    //submit data
    const data = new FormData();
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    data.append('id', id);
    return axios.put('api/v1/participant', data)
}

const getAllUser = () => {
    return axios.get('api/v1/participant/all')
}
const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } });
}

export {
    postCreateUser,
    getAllUser,
    putUpdateUser,
    deleteUser
}
