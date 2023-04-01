import { useEffect, useState } from "react"
import { getAllUser } from '../../../service/apiService'
import './TableUser.scss'
const TableUser = () => {
    const [listUser, setListUser] = useState([])

    useEffect(() => {
        fetchListData()
    }, [])

    const fetchListData = async () => {
        let res = await getAllUser()
        if(res.EC === 0){
            setListUser(res.DT)
        }
    }

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 && listUser.map((el, index) => {
                        return (
                            <tr key={`table-user-${index}`}>
                                <th scope="row">{el.id}</th>
                                <td>{el.username}</td>
                                <td>{el.email}</td>
                                <td>{el.role}</td>
                                <td className="td-ManageUser-btn">
                                    <button className="btn btn-primary">View</button>
                                    <button className="btn btn-success">UpDate</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    {listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan={4}>Not found data</td>

                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableUser
