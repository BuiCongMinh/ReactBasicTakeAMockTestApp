import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc'
import { toast } from 'react-toastify';
import { postCreateUser } from '../../../service/apiService'
import _ from 'lodash'
const ModalUpdateUser = (props) => {
    const { showModalUpdateUser, setShow, dataUpdate } = props;

    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [username, setUserName] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');


    //use Efect
    useEffect(() => {
        console.log('run user Effect (check dataUsser):', dataUpdate);
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email)
            setUserName(dataUpdate.username)
            setRole(dataUpdate.role)
            setImage('');
            if(dataUpdate.image){
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }

    }, [dataUpdate]);


    const handleClose = () => {
        setShow(false);
        setEmail('')
        setPassWord('')
        setUserName('')
        setRole('USER')
        setImage('')
        setPreviewImage('')
    }

    const handleUploadFileImage = (event) => {
        setPreviewImage(URL.createObjectURL(event.target.files[0]))
        setImage(event.target.files[0])
    }

    //validate (Phía clinet và bên phía server)
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitCreateUser = async () => {

        //validate
        if (!validateEmail(email)) {
            toast.error('invalid Email ')
            return
        }

        if (!password) {
            toast.error('invalid Password ')
            return
        }

        if (!username) {
            toast.error('invalid username ')
            return
        }

        let data = await postCreateUser(email, password, username, role, image)

        console.log('>>> check res:', data);

        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose()
            await props.fetchListData();
        }

        if (data && data.EC !== 0) {
            toast.info(data.EM)
        }

    }

    return (
        <>

            <Modal
                show={showModalUpdateUser}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal Update User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={((event) => setEmail(event.target.value))} disabled />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">UserName</label>
                            <input type="text" className="form-control" value={username} onChange={((event) => setUserName(event.target.value))} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label"> Row</label>
                            <select className="form-select" value={role} onChange={(event) => setRole(event.target.value)}>
                                <option value="USER"> USER </option>
                                <option value="ADMIN">ADMIN</option>
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

export default ModalUpdateUser  
