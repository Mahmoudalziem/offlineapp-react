import React, { Fragment, useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact';
import { Popconfirm } from 'antd'
import $ from 'jquery'
import { AddModal, EditModal } from './modals'
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
                label: 'Year',
                field: 'year',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Doctor',
                field: 'doctor',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Another Doctor',
                field: 'another',
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
                name: 'English',
                year: 'fourth',
                doctor: 'Osama',
                another: 'Mohamed',
                option: <div className="options">
                    <button className="fa fa-pencil" onClick={props.popEdit}></button>
                    <Popconfirm
                        title="Are you sure delete Subject ?"
                        onConfirm={props.confirmClick}
                        onCancel={props.handleCancelPopUp}
                        okText="Yes"
                        className="fa fa-trash"
                        cancelText="No"
                    >
                        <button className="fa fa-trash"></button>
                    </Popconfirm>,
                    </div>
            },
            {
                name: 'English',
                year: 'fourth',
                doctor: 'Osama',
                another: 'Mohamed',
                option: <div className="options">
                    <button className="fa fa-pencil" onClick={props.popEdit}></button>
                    <Popconfirm
                        title="Are you sure delete Subject ?"
                        onConfirm={props.confirmClick}
                        onCancel={props.handleCancelPopUp}
                        okText="Yes"
                        className="fa fa-trash"
                        cancelText="No"
                    >
                        <button className="fa fa-trash"></button>
                    </Popconfirm>,
                    </div>
            }
        ]
    }
}
const Subjects = () => {

    const [state, setState] = useState({
        visible: false,
        confirmLoading: false,
        edit: false,
        title: ''
    })

    useEffect(() => {

        $('div[data-test="datatable-entries"]').remove();
        $('div[data-test="datatable-search"]').removeClass('col-md-6');
    }, [])

    const confirmClick = e => {
        console.log(e)
    };

    const handleCancelPopUp = e => {
        console.log(e);
    };

    const handleCancel = e => {
        console.log(e);
        setState({
            visible: false,
        });
    };

    const handleOk = e => {
        setState({
            visible: true,
            confirmLoading: true
        })

        setTimeout(() => {
            setState({
                visible: false,
                confirmLoading: false
            });
        }, 4000);
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

    const popEdit = () => {
        setState(
            {
                edit: true,
                title: 'Edit Subject'
            }
        )
    }

    const datatable = dataTable({ confirmClick, handleCancelPopUp, popEdit });

    return (
        <Fragment>
            <div className="instructor-table text-center">
                <button className="export-degree add-subject btn mx-auto" onClick={() => {
                    setState({
                        visible: true,
                        title: 'Add Subject'
                    })
                }}>Add Subject</button>
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
                <AddModal visible={state.visible} addModal={handleOk} confirmLoading={state.confirmLoading} onCancel={handleCancel} title={state.title} />

                <EditModal visible={state.edit} editModal={handleEdit} confirmLoading={state.confirmLoading} title={state.title} onCancel={handleCancelEdit} />
            </div>
        </Fragment>
    )

}

export default Subjects;