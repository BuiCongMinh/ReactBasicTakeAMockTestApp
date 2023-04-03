import ModalCrateUser from './ModalCrateUser';
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react"
import { getAllUser } from '../../../service/apiService'

const ManagerUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [listUser, setListUser] = useState([])

    useEffect(() => {
        fetchListData()
    }, []) 

    const fetchListData = async () => {
        let res = await getAllUser()
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }

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
                    <TableUser listUser={listUser} />
                </div>
                <ModalCrateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser} 
                    fetchListData = {fetchListData}   
                    />

            </div>
        </div>
    )
}

export default ManagerUser
