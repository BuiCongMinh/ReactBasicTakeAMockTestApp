import ModalCrateUser from './ModalCrateUser';
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react"
import { getAllUser } from '../../../service/apiService'
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalDeleteUser from './ModalDeleteUser';

const ManagerUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)

    const [showModalViewUser, setShowModalViewUser] = useState(false)

    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)



    const [dataUpdate ,setDataUpdate] = useState({})

    const [dataDelete ,setDataDelete] = useState({})

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
    
    const handelClickBtnUpdateUser = (user) => {
        // console.log('>>> check user: ',user);
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }
    
    const handelClickBtnViewUser = (user) => {
        setShowModalViewUser(true)
        setDataUpdate(user)
    }

    const handelClickBtnDeleteUser = (user)=>{
        setShowModalDeleteUser(true)
        setDataDelete(user)
    }

    const resetUpdateData = ()=>{
        setDataUpdate({})
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
                    <TableUser
                        listUser={listUser}
                        handelClickBtnUpdateUser={handelClickBtnUpdateUser}
                        handelClickBtnViewUser = {handelClickBtnViewUser}
                        handelClickBtnDeleteUser= {handelClickBtnDeleteUser}
                    />
                </div>

                <ModalCrateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListData={fetchListData}
                />

                <ModalUpdateUser
                    showModalUpdateUser={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    fetchListData={fetchListData}
                    resetUpdateData = {resetUpdateData}
                    dataUpdate={dataUpdate}
                />

                <ModalViewUser
                   showModalViewUser={showModalViewUser}
                   setShow={setShowModalViewUser}
                   dataUpdate = {dataUpdate}
                   resetUpdateData = {resetUpdateData}
                />

                <ModalDeleteUser 
                    showModalDeleteUser = {showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    fetchListData={fetchListData}
                    dataDelete = {dataDelete}
                />

                
            </div>
        </div>
    )
}

export default ManagerUser
