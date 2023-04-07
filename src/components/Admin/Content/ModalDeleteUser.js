import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../service/apiService'
import { toast } from 'react-toastify';

function ModalDeleteUser(props) {
    const { showModalDeleteUser, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);

    const handelSubmitDeleteUser = async () => {
        const res = await deleteUser(dataDelete.id)
        if (res && res.EC === 0) {
            toast.success(res.EM)
            handleClose()
            await props.fetchListData();
        }

        if (res && res.EC !== 0) {
            toast.info(res.EM)
        }
    }
    return (
        <>
            <Modal show={showModalDeleteUser} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Confirm Delete User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure delete this user. email =
                    <b>
                        {` ${dataDelete && dataDelete.email ? dataDelete.email : ' '}`}
                    </b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { handelSubmitDeleteUser() }}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser