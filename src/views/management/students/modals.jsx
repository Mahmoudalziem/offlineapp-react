import React, { useState}from 'react'
import { Modal } from 'antd'
import * as Yup from 'yup'
import { Formik, ErrorMessage, Form, Field } from 'formik'
import connect from '../../../services/connect';

const http  = new connect();

const Section = ()  =>{

        let Rows = [], i = 1,len=30;

        for (i; i < len; i++){

            Rows.push(i);
        }

        return Rows;
}
    
export const AddModal = (props) => {

    const [state, setState] = useState({
        year: null
        
    })

    const initialValues = { name: '',email : '', password: '',year : '', department : '',section : '' }

    const validateSchema = () => (
        Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(6, 'Password Must Be 6 Chars').required(),
            year: Yup.number().required(),
            section: Yup.string().max(2, 'section not more than 2 chars').required()
        })
    )

    const submitForm = (values, { setSubmitting }) => {

        setSubmitting(false)

        const url = 'api/manage/student';

        http.postData(values, url).then(e => {

            const data = e.data;


        });
    }

    return (
        <div className="modal-container">
            <Modal
                title={props.title}
                visible={props.visible}
                onOk={props.handleOk}
                confirmLoading={props.confirmLoading}
                onCancel={props.onCancel}
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
                                        name="name"
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <ErrorMessage name="name" component="div" className="error" />
                                </div>

                                <div className="group-input">
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="E-Mail"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <ErrorMessage name="email" component="div" className="error" />
                                </div>

                                <div className="group-input">
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <ErrorMessage name="password" component="div" className="error" />
                                </div>

                                <div className="group-input">
                                    <select
                                        name="year"
                                        onChange={(e) => {
                                            if (e.target.value === '4') {
                                                setState({
                                                    year: e.target.value
                                                })

                                            } else {
                                                setState({
                                                    year: e.target.value
                                                })
                                                values.department = false
                                            }

                                            values.year = e.target.value
                                        }}
                                        onBlur={handleBlur}
                                        value={values.year}
                                    >
                                        <option value="" label="-- Select Year --" />
                                        <option value="1" label="first Year" />
                                        <option value="2" label="Second Year" />
                                        <option value="3" label="Third Year" />
                                        <option value="4" label="Fourth Year" />
                                    </select>
                                    <ErrorMessage name="year" component="div" className="error" />
                                </div>
                                {
                                    (props.department) ? (
                                        <div className={`group-input ${(state.year === '4' ? 'd-block' : 'd-none')}`}>
                                            <select
                                                name="department"
                                                onChange={(e) => {
                                                    if (state.year === '4') {

                                                        values.department = e.target.value

                                                    }
                                                }}
                                                required={(state.year === '4') ? true : false}
                                            >
                                                <option value="" label="-- Select Department --" />
                                                <option value="cs" label="CS" />
                                                <option value="it" label="IT" />
                                                <option value="is" label="IS" />
                                                <option value="ds" label="DS" />
                                            </select>
                                            <ErrorMessage name="department" component="div" className="error" />
                                        </div>
                                    ) : null
                                }
                                
                                <div className="group-input">

                                    <select
                                        className="w-100"
                                        name="section"
                                        id="section"
                                        placeholder="section"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.section}
                                    >
                                        <option value="" label="-- Select Section --" />
                                        {
                                            Section().map((value, index) => {

                                                return <option key={index} value={value} label={value} />
                                            })
                                        }
                                    </select>
                                    <ErrorMessage name="section" component="div" className="error" />
                                </div>

                            </Form>
                        )
                    }
                </Formik>
            </Modal>
        </div>
    )
}

export const EditModal = (props) => {

    const initialValues = { section: '' , department: '' }

    const validateSchema = () => (
        Yup.object({
            department: Yup.string().max(2, 'department not more than 2 chars').required(),
            section: Yup.string().max(2, 'section not more than 2 chars').required()
        })
    )

    const submitForm = (values, { setSubmitting }) => {
        setSubmitting(false)
        console.log(values)
    }

    return (
        <div className="modal-container">
            <Modal
                title={props.title}
                visible={props.visible}
                onOk={props.handleOk}
                confirmLoading={props.confirmLoading}
                onCancel={props.onCancel}
                okButtonProps={{ htmlType: "submit", key: 'submit', form: 'edit-student' }}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateSchema}
                    onSubmit={submitForm}
                >
                    {
                        ({ values, handleChange, handleBlur, handleSubmit }) => (
                            <Form onSubmit={handleSubmit} id="edit-student">

                                {
                                    (props.department) ? (
                                        <div className="group-input">
                                            <select
                                                name="department"
                                                id="department"
                                                value={values.department}
                                            >
                                                <option value="" label="-- Select Department --" />
                                                <option value="cs" label="CS" />
                                                <option value="it" label="IT" />
                                                <option value="is" label="IS" />
                                                <option value="ds" label="DS" />
                                            </select>
                                            <ErrorMessage name="department" component="div" className="error" />
                                        </div>
                                    ) : null
                                }

                                <div className="group-input">
                                    <select
                                        className="w-100"
                                        name="section"
                                        id="section"
                                        placeholder="section"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.section}
                                    >
                                        <option value="" label="-- Select Section --" />
                                        {
                                            Section().map((value, index) => {

                                                return <option key={index} value={value} label={value} />
                                            })
                                        }
                                    </select>
                                    <ErrorMessage name="section" component="div" className="error" />
                                </div>

                            </Form>
                        )
                    }
                </Formik>
            </Modal>
        </div>
    )
}