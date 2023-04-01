import ModalCrateUser from './ModalCrateUser';
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import { useState } from 'react';
import TableUser from './TableUser';

const ManagerUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    return (
        <div className="Manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className='btn-add-new'>
                    <button className='btn btn-primary' onClick={() => setShowModalCreateUser(true)} ><FcPlus /> Add New user</button>
                </div>
                <div className='table-users-container'>
                    <TableUser />
                </div>
                <ModalCrateUser show={showModalCreateUser} setShow={setShowModalCreateUser} />
            </div>
        </div>
    )
}

export default ManagerUser
