import React, { Fragment, useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact';
import { Upload, message, Popconfirm } from 'antd';
import { AddModal, EditModal } from './modals'
import $ from 'jquery'
import avatar from "../../../assets/images/team/user.png";
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const UploadImages = {
    name: 'file',
    accept: '.xlsx',
    multiple: false,
    action: '127.0.0:8000/api/manage/import_students',
    onChange(info) {
        const { status } = info.file;

        // if (status !== 'uploading') {

        //     console.log(info.file, info.fileList);
        // }

        if (status === 'done') {

            message.success(`${info.file.name} file uploaded successfully.`);

        } else if (status === 'error') {

            message.error(`${info.file.name} file upload failed.`);
        }
    },
    progress: {
        strokeColor: {
            '0%': '#108ee9',
            '100%': '#87d068',
        },
        strokeWidth: 3,
        format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
};

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
                width: 270
            },
            {
                label: 'Department',
                field: 'department',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Section',
                field: 'section',
                sort: 'asc',
                width: 200
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
                email: '1312312312312312@fci.com',
                department: 'Cs',
                section: '12',
                option: <div className="options">
                    <button className="fa fa-pencil" onClick={props.popEdit}></button>
                    <Popconfirm
                        title="Are you sure delete student ?"
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
const Fourth = () => {

    const [state, setState] = useState({
        visible: false,
        confirmLoading: false,
        edit: false,
        users : [],
        title: ''
    })


    
    useEffect(() => {

        $('div[data-test="datatable-entries"]').remove();
        $('div[data-test="datatable-search"]').removeClass('col-md-6');

        $('div.head').on('click', function () {

            $(this).siblings('div.student-content').toggleClass('active')
        })

    }, [])

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
                title: 'Edit Student'
            }
        )
    }

    const datatable = dataTable({ confirmClick, handleCancelPopUp, popEdit });

    const handleCancel = e => {
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
            <div className="buttons text-center">
                <button className="export-degree btn mr-3" onClick={() => {
                    setState({
                        visible: true,
                        title: 'Add Student'
                    })
                }}>Add Student</button>

                <Popconfirm
                    title="Are you sure Clear students ?"
                    onConfirm={confirmClick}
                    onCancel={handleCancelPopUp}
                    okText="Yes"
                    cancelText="No"
                >
                    <button className="export-degree btn mx-auto">Clear Student</button>
                </Popconfirm>
            </div>

            <div className="students-dropbox">
                <div className="student-container">
                    <div className="head">
                        <span>DropDown Students</span>
                        <span>
                            <i
                                className="fa fa-angle-down icon-arrow-down"></i>
                        </span>
                    </div>

                    <div className="student-content">
                        <div className="student-details">
                            <Dragger {...UploadImages}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text" style={{ fontSize: '14px' }}>Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint" style={{ fontSize: '13px' }}>
                                    Support for a single upload. Strictly prohibit from uploading company data or other
                                    band files
                                </p>
                            </Dragger>
                        </div>
                    </div>
                </div>
            </div>
            <div className="students-table text-center">
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

export default Fourth;