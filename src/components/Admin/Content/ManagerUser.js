import ModalCrateUser from './ModalCrateUser';
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react"
import { getAllUser, getUserPaginate } from '../../../service/apiService'
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalDeleteUser from './ModalDeleteUser';
import TableUserParginate from './TableUserParginate';

const ManagerUser = (props) => {
    const LIMIT_USER = 6

    const [showModalCreateUser, setShowModalCreateUser] = useState(false)

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)

    const [showModalViewUser, setShowModalViewUser] = useState(false)

    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)

    const [dataUpdate, setDataUpdate] = useState({})

    const [dataDelete, setDataDelete] = useState({})

    const [listUser, setListUser] = useState([])

    const [pageCount, setPageCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        // fetchListData()
        fetchListDataWithPaginate(1)
    }, [])

    const fetchListData = async () => {
        let res = await getAllUser()
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }

    const fetchListDataWithPaginate = async (page) => {
        let res = await getUserPaginate(page, LIMIT_USER)
        if (res.EC === 0) {
            setListUser(res.DT.users)
            setPageCount(res.DT.totalPages)
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

    const handelClickBtnDeleteUser = (user) => {
        setShowModalDeleteUser(true)
        setDataDelete(user)
    }

    const resetUpdateData = () => {
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
                    {/* <TableUser
                        listUser={listUser}
                        handelClickBtnUpdateUser={handelClickBtnUpdateUser}
                        handelClickBtnViewUser = {handelClickBtnViewUser}
                        handelClickBtnDeleteUser= {handelClickBtnDeleteUser}
                    /> */}
                    <TableUserParginate
                        listUser={listUser}
                        handelClickBtnUpdateUser={handelClickBtnUpdateUser}
                        handelClickBtnViewUser={handelClickBtnViewUser}
                        handelClickBtnDeleteUser={handelClickBtnDeleteUser}
                        fetchListDataWithPaginate={fetchListDataWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}

                    />
                </div>

                <ModalCrateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListData={fetchListData}
                    fetchListDataWithPaginate={fetchListDataWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModalUpdateUser
                    showModalUpdateUser={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    fetchListData={fetchListData}
                    resetUpdateData={resetUpdateData}
                    fetchListDataWithPaginate={fetchListDataWithPaginate}
                    dataUpdate={dataUpdate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModalViewUser
                    showModalViewUser={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataUpdate={dataUpdate}
                    resetUpdateData={resetUpdateData}
                    fetchListDataWithPaginate={fetchListDataWithPaginate}
                />

                <ModalDeleteUser
                    showModalDeleteUser={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    fetchListData={fetchListData}
                    dataDelete={dataDelete}
                    fetchListDataWithPaginate={fetchListDataWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />


            </div>
        </div>
    )
}

export default ManagerUser
