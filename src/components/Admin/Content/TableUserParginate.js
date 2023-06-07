import { useState, useEffect } from 'react';
import './TableUser.scss'
import ReactPaginate from 'react-paginate';


const TableUserParginate = (props) => {


    const { listUser, pageCount } = props;

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        props.setCurrentPage(+event.selected + 1)
        props.fetchListDataWithPaginate(+event.selected + 1)

    };

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
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
                                    <button className="btn btn-primary"
                                        onClick={() => props.handelClickBtnViewUser(el)}
                                    >
                                        View
                                    </button>

                                    <button className="btn btn-success"
                                        onClick={() => props.handelClickBtnUpdateUser(el)}
                                    >
                                        UpDate
                                    </button>

                                    <button className="btn btn-danger"
                                        onClick={() => props.handelClickBtnDeleteUser(el)}
                                    >
                                        Delete
                                    </button>
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

            <div className='user-pagination'>
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={props.currentPage - 1}
                />
            </div>

        </>
    )
}

export default TableUserParginate
