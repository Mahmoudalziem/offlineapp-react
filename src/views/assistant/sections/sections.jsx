import React, { useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact';
import { Formik, ErrorMessage, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Modal } from 'antd'
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
                label: 'Mid Tram',
                field: 'midtram',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Oral Exam',
                field: 'oral',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Practical Exam',
                field: 'practical',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Semester',
                field: 'semester',
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
                midtram: 20,
                oral: 20,
                practical: 15,
                semester: 55,
                option: <a data-toggle="tooltip" href="javascript:void(0)" class="fa fa-plus" onClick={props}></a>,
            },
            {
                name: <div>
                    <img src={avatar} alt="student_image" />
                    <span>Mahmoud Abd Alziem</span>
                </div>,
                midtram: 20,
                oral: 20,
                practical: 15,
                semester: 55,
                option: <a data-toggle="tooltip" href="javascript:void(0)" class="fa fa-plus" onClick={props}></a>,
            }
        ]
    }
}
const Sections = (props) => {

    const [state, setState] = useState({
        visible: false,
        confirmLoading: false
    })

    const initialValues = { term: '', oral: '', practical:'' }

    const validateSchema = () => (
        Yup.object({
            term: Yup.string().required(),
            oral: Yup.string().required(),
            practical: Yup.string().required()
        })
    )

    const submitForm = (values, { setSubmitting }) => {
        setSubmitting(false)
        console.log(values)
    }

    const showModal = () => {
        setState({
            visible: true,
        });
    };
    const handleOk = e => {

    };

    const handleCancel = e => {
        console.log(e);
        setState({
            visible: false,
        });
    };

    const [datatable, setDatatable] = useState(dataTable(showModal));

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


            <div className="modal-container">
                <Modal
                    title="Student Enroll Marks"
                    visible={state.visible}
                    onOk={props.handleOk}
                    confirmLoading={state.confirmLoading}
                    onCancel={handleCancel}
                    okButtonProps={{ htmlType: "submit", key: 'submit', form: 'add-student' }}
                >
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validateSchema}
                        onSubmit={submitForm}
                    >
                        {
                            ({ values, handleChange, handleBlur, handleSubmit }) => (
                                <Form onSubmit={handleSubmit} id="add-student">
                                    <div className="group-input">
                                        <Field
                                            type="text"
                                            name="term"
                                            placeholder="Mid Term"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.term}
                                        />
                                        <ErrorMessage name="term" component="div" className="error" />
                                    </div>

                                    <div className="group-input">
                                        <Field
                                            type="text"
                                            name="oral"
                                            placeholder="Oral Exam"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.oral}
                                        />
                                        <ErrorMessage name="oral" component="div" className="error" />
                                    </div>

                                    <div className="group-input">
                                        <Field
                                            type="text"
                                            name="practical"
                                            placeholder="practical Exam"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.practical}
                                        />
                                        <ErrorMessage name="practical" component="div" className="error" />
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </Modal>
            </div>
        </div>
    )
}

export default Sections;