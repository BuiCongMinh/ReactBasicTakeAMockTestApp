import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalResult(props) {
    const { showModalResult, setShow, dataModalResult } = props;
    console.log('check dataModalResult:', dataModalResult);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={showModalResult} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Confirm Delete User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Total Question: <b>{dataModalResult.countTotal}</b> </div>
                    <div>Total Correct answers: <b>{dataModalResult.countCorrect}</b>  </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Show answers
                    </Button>
                    <Button variant="primary" onClick={() => handleClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalResult