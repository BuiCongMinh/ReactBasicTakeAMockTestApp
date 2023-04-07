import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash'
const ModalViewUser = (props) => {
    // console.log('>>> check props:', props);
    const { showModalViewUser, setShow, dataUpdate, resetUpdateData } = props;
    // console.log('>>> check datatUpdate: ', dataUpdate);

    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email)
            setUserName(dataUpdate.username)
            setRole(dataUpdate.role)
            setImage('')
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
    }, [dataUpdate])

    const handleClose = () => {
        resetUpdateData()
        setShow(false);
        setEmail('')
        setUserName('')
        setRole('USER')
        setImage('')
        setPreviewImage('')
    }


    return (
        <>

            <Modal
                show={showModalViewUser}
                onHide={handleClose}
                size="xl"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal View User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={((event) => setEmail(event.target.value))} disabled />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">UserName</label>
                            <input type="text" className="form-control" value={username} onChange={((event) => setUserName(event.target.value))} disabled />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Row</label>
                            <select className="form-select" value={role} onChange={(event) => setRole(event.target.value)} disabled>
                                <option value="USER" >USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
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
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser  
