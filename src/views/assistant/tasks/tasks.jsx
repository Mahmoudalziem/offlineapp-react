import React, { useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact';
import { Popconfirm,Tooltip } from 'antd'
import { DownloadOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
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
                label: 'Download',
                field: 'download',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Accept',
                field: 'accept',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Reject',
                field: 'reject',
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
                download: <Popconfirm
                    title="Are you sure download this task?"
                    onConfirm={props.confirmClick}
                    onCancel={props.handleCancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Tooltip placement="rightBottom" title="Download Task">
                        <a  href="javascript:void(0)" rel="" style={{ lineHeight: 'unset' }} onClick=""><DownloadOutlined /></a>
                    </Tooltip>
                </Popconfirm>,
                accept: <Popconfirm
                    title="Are you sure accept this task?"
                    onConfirm={props.confirmClick}
                    onCancel={props.handleCancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Tooltip placement="rightBottom" title="Accept Task">
                        <a  href="#" rel="" style={{ lineHeight: 'unset' }} onClick=""><CheckOutlined /></a>
                    </Tooltip>
                </Popconfirm>,
                reject: <Popconfirm
                    title="Are you sure reject this task?"
                    onConfirm={props.confirmClick}
                    onCancel={props.handleCancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Tooltip placement="rightBottom" title="Reject Task">
                        <a href="#" rel="" style={{ lineHeight: 'unset' }} onClick=""><CloseOutlined /></a>
                    </Tooltip>
                </Popconfirm>,
            },
            {
                name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
                download: <Popconfirm
                    title="Are you sure download this task?"
                    onConfirm={props.confirmClick}
                    onCancel={props.handleCancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Tooltip placement="rightBottom" title="Download Task">
                        <a href="javascript:void(0)" rel="" style={{ lineHeight: 'unset' }} onClick=""><DownloadOutlined /></a>
                    </Tooltip>
                </Popconfirm>,
                accept: <Popconfirm
                    title="Are you sure accept this task?"
                    onConfirm={props.confirmClick}
                    onCancel={props.handleCancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Tooltip placement="rightBottom" title="Accept Task">
                        <a href="#" rel="" style={{ lineHeight: 'unset' }} onClick=""><CheckOutlined /></a>
                    </Tooltip>
                </Popconfirm>,
                reject: <Popconfirm
                    title="Are you sure reject this task?"
                    onConfirm={props.confirmClick}
                    onCancel={props.handleCancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Tooltip placement="rightBottom" title="Reject Task">
                        <a href="#" rel="" style={{ lineHeight: 'unset' }} onClick=""><CloseOutlined /></a>
                    </Tooltip>
                </Popconfirm>,
            }
        ]
    }
}
const Tasks = () => {

    const [state, setState] = useState({
        visible: false,
        confirmLoading: false
    })

    const confirmClick = e => {
        console.log(e)
    };

    const handleCancel = e => {
        console.log(e);
    };

    const [datatable, setDatatable] = useState(dataTable(confirmClick, handleCancel));

    useEffect(() => {

        $('div[data-test="datatable-entries"]').remove();
        $('div[data-test="datatable-search"]').removeClass('col-md-6');
    }, [])

    return (
        <div className="sections-container">

            <div className="sections-button">
                <ul className="nav nav-tabs p-0 mx-auto" id="myTab" role="tablist">

                    <li className="nav_item">
                        <a className="nav-link active" data-toggle="tab" href="#upload-quiz" role="tab" aria-selected="true">
                            Section 14
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav-link" data-toggle="tab" href="#add-quiz" role="tab" aria-selected="false">
                            section 13
                        </a>
                    </li>

                    <li className="nav_item">
                        <a className="nav-link" data-toggle="tab" href="#add-quiz" role="tab" aria-selected="false">
                            section 15
                        </a>
                    </li>
                </ul>
            </div>

            <div className="section-students">
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
        </div>
    )
}

export default Tasks;