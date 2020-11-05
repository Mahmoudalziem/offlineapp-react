import React, { Fragment, useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact';
import { AddModal } from './modals'
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
                label: 'Department',
                field: 'department',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Fourth',
                field: 'fourth',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Third',
                field: 'third',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Second',
                field: 'second',
                sort: 'asc',
                width: 270
            },
            {
                label: 'First',
                field: 'first',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Sections',
                field: 'section',
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
                department: 'Cs',
                fourth: '12 - 13 - 15',
                third: '12 - 16',
                second: '12 - 13',
                first : '12 - 13',
                section: <button class="enroll-instructor fa fa-plus" onClick={props.enrollSections}></button>
            },
            {
                name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
                department: 'Cs',
                fourth: '12 - 13 - 15',
                third: '12 - 16',
                second: '12 - 13',
                first: '12 - 13',
                section: <button class="enroll-instructor fa fa-plus" onClick={props.enrollSections}></button>
            }
        ]
    }
}
const ViewInstructor = () => {

    const [state, setState] = useState({
        visible: false,
        confirmLoading: false
    })

    const enrollSections = () => {
        setState(
            {
                visible: true,
            }
        )
    }

    const datatable = dataTable({enrollSections });

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

    return (
        <Fragment>
            <div className="instructor-table">
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
            </div>
        </Fragment>
    )

}

export default ViewInstructor;