import React, { Fragment, useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact';
import { Popconfirm } from 'antd'
import { AddModal, EditModal } from './modals'
import $ from 'jquery'
import avatar from "../../../assets/images/team/user.png";

/// Load Component
const dataTable = (props) => {

    return {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Department',
                field: 'department',
                sort: 'asc',
                width: 270
            },
            {
                label: '',
                field: 'option',
                sort: 'asc',
                width: 200
            }
        ],
        rows: [
            {
                name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
                email: 'mbdalzym376@gmail.com',
                department: 'Cs',
                option:
                    <div className="options">
                        <button className="fa fa-pencil" onClick={props.popEdit}></button>
                        <Popconfirm
                            title="Are you sure delete doctor ?"
                            onConfirm={props.confirmClick}
                            onCancel={props.handleCancelPopUp}
                            okText="Yes"
                            cancelText="No"
                        >
                            <button className="fa fa-trash"></button>
                        </Popconfirm>
                    </div>,
            },
            {
                name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
                email: 'mbdalzym376@gmail.com',
                department: 'Cs',
                option:
                    <div className="options">
                        <button className="fa fa-pencil" onClick={props.popEdit}></button>
                        <Popconfirm
                            title="Are you sure Clear students ?"
                            onConfirm={props.confirmClick}
                            onCancel={props.handleCancelPopUp}
                            okText="Yes"
                            cancelText="No"
                        >
                            <button className="fa fa-trash"></button>
                        </Popconfirm>
                    </div>
            }
        ]
    }
}
const Doctors = () => {

    const [state, setState] = useState({
        visible: false,
        confirmLoading: false,
        edit: false,
        title: ''
    })

    const confirmClick = e => {
        console.log(e)
    };

    const handleCancelPopUp = e => {
        console.log(e);
    };

    const popEdit = () => {
        setState(
            {
                edit: true,
                title: 'Edit Doctor'
            }
        )
    }

    const datatable = dataTable({ confirmClick, handleCancelPopUp, popEdit });

    useEffect(() => {

        $('div[data-test="datatable-entries"]').remove();
        $('div[data-test="datatable-search"]').removeClass('col-md-6');
    }, [])

    const handleCancel = e => {
        console.log(e);
        setState({
            visible: false,
        });
    };


    const handleEdit = e => {
        setState({
            edit: true,
            confirmLoading: true
        })

        setTimeout(() => {
            setState({
                edit: false,
                confirmLoading: false
            });
        }, 4000);
    };

    const handleCancelEdit = e => {
        console.log(e);
        setState({
            edit: false,
        });
    };

    return (
        <Fragment>
            <div className="instructor-table text-center">
                <button className="export-degree btn mx-auto" onClick={() => {
                    setState({
                        visible: true,
                        title: 'Add Doctor'
                    })
                }}>Add Doctor</button>
                <MDBDataTable
                    bordered
                    hover
                    exportToCSV
                    displayEntries={false}
                    pagesAmount={10}
                    responsive={true}
                    data={datatable}
                />
            </div>

            <div className="Modals-container">
                <AddModal visible={state.visible} confirmLoading={state.confirmLoading} onCancel={handleCancel} title={state.title} department={true} />

                <EditModal visible={state.edit} editModal={handleEdit} confirmLoading={state.confirmLoading} title={state.title} onCancel={handleCancelEdit} department={true} />
            </div>
        </Fragment>
    )

}

export default Doctors;