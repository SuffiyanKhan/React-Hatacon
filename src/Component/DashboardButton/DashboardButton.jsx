import React from 'react'
import AddProductForm from '../AddProductForm/AddProductForm'

function DashboardButton() {

    return (
        <>
            <button className='btn btn-primary me-3' data-bs-toggle="modal"
                data-bs-target="#exampleModal">Add Prouct</button>
            <button className='btn btn-primary' >Logout</button>
            <>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Modal title
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <AddProductForm />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default DashboardButton