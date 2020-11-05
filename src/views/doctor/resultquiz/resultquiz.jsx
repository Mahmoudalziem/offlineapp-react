import React, { Fragment, useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact';
import $ from 'jquery'
import avatar from "../../../assets/images/team/user.png";
/// Load Component
const dataTable = {

    columns: [
        {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Error',
            field: 'error',
            sort: 'asc',
            width: 270
        },
        {
            label: 'Success',
            field: 'success',
            sort: 'asc',
            width: 200
        },
        {
            label: 'Degree',
            field: 'degree',
            sort: 'asc',
            width: 100
        }
    ],
    rows: [
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'System Architect',
            success: 'Edinburgh',
            degree: '61',
            
        },
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'Accountant',
            success: 'Tokyo',
            degree: '63',
            
            
        },
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'Accountant',
            success: 'Tokyo',
            degree: '63',
            
            
        },
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'Accountant',
            success: 'Tokyo',
            degree: '63',
            
            
        },
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'Accountant',
            success: 'Tokyo',
            degree: '63',
            
            
        },
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'Accountant',
            success: 'Tokyo',
            degree: '63',
            
            
        },
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'Accountant',
            success: 'Tokyo',
            degree: '63',
            
            
        },
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'Accountant',
            success: 'Tokyo',
            degree: '63',
            
            
        },
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'Accountant',
            success: 'Tokyo',
            degree: '63',
            
            
        },
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'Accountant',
            success: 'Tokyo',
            degree: '63',
            
            
        },
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'Accountant',
            success: 'Tokyo',
            degree: '63',
            
            
        },
        {
            name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
            error: 'Accountant',
            success: 'Tokyo',
            degree: '63',
            
            
        },
    ]
}
const ResultQuiz = () => {

    const [datatable, setDatatable] = useState(dataTable);

    useEffect(() => {

        $('div[data-test="datatable-entries"]').remove();
        $('div[data-test="datatable-search"]').removeClass('col-md-6');
    }, [])

    return (
        <Fragment>
            <div className="degree-table text-center">
                <button className="export-degree btn mx-auto">Export Degrees</button>
                <MDBDataTable
                    
                    bordered
                    hover
                    exportToCSV
                    displayEntries={false}
                    pdegreesAmount={10}
                    responsive={true}
                    data={datatable}
                />
            </div>
        </Fragment>
    )

}

export default ResultQuiz;