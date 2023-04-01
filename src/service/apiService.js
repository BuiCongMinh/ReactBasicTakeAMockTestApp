import axios from '../utils/axiosCustomize';


const postCreateUser = (email, password, username, row, image) => {
    //submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', row);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data)
}

export {
    postCreateUser
}
