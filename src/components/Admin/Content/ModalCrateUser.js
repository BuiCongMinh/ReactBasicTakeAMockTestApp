import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc'
import  axios  from 'axios';

const ModalCreateUser = (props) => {
    // console.log('>>> check props:', props);
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
        setEmail('')
        setPassWord('')
        setUserName('')
        setRole('USER')
        setImage('')
        setPreviewImage('')
    }

    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [username, setUserName] = useState('');
    const [row, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');


    const handleUploadFileImage = (event) => {

        setPreviewImage(URL.createObjectURL(event.target.files[0]))
        setImage(event.target.files[0])
    }

    const handleSubmitCreateUser = async () => {
        //call Api
        // let data = {
        //     email: email,
        //     password: password,
        //     username: username,
        //     role: row,
        //     userImage: image
        // }

        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('username', username);
        data.append('role', row);
        data.append('userImage', image);
        const res = await axios.post('http://localhost:8081/api/v1/participant', data)
        console.log('>>> check data form ModalCreateUser: ', res);

        //validate
        // alert('me')
    }


    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add User Model
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={((event) => setEmail(event.target.value))} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={((event) => setPassWord(event.target.value))} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">UserName</label>
                            <input type="text" className="form-control" value={username} onChange={((event) => setUserName(event.target.value))} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Row</label>
                            <select className="form-select">
                                <option selected defaultValue="USER" onChange={(event) => setRole(event.target.value)}>USER</option>
                                <option defaultValue="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12' >
                            <label className='form-label label-upload' htmlFor='labelUpload' >
                                <FcPlus /> Upload file Image
                            </label>
                            <input type="file" id='labelUpload' hidden onChange={(event) => handleUploadFileImage(event)}></input>
                        </div>
                        <div className='col-md-12 img-preview'>
                            {
                                previewImage ?
                                    <img src={previewImage} />
                                    :
                                    <span> prevew Image </span>
                            }

                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser  
