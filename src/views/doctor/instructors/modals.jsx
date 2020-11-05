import React, { useState } from 'react'
import { Modal } from 'antd'
import * as Yup from 'yup'
import { Formik, ErrorMessage, Form } from 'formik'

const Section = () => {

    let Rows = [], i = 1, len = 30;

    for (i; i < len; i++) {

        Rows.push(i);
    }

    return Rows;
}
export const AddModal = (props) => {

    const [state, setState] = useState({
        year: null
    })
    const initialValues = { year: '', department: '',section:'' }

    const validateSchema = () => (
        Yup.object({
            year: Yup.number().required(),
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
                title="Enroll Sections"
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
                                        required
                                    >
                                        <option value="" label="-- Select Year --" />
                                        <option value="1" label="first Year" />
                                        <option value="2" label="Second Year" />
                                        <option value="3" label="Third Year" />
                                        <option value="4" label="Fourth Year" />
                                    </select>
                                    <ErrorMessage name="year" component="div" className="error" />
                                </div>

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


                                <div className="group-input">
                                    <select
                                        showSearch
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

                <div className="section-container">
                    <span>14</span>
                    <span>14</span>
                    <span>14</span>
                    <span>14</span> 
                </div>
            </Modal>
        </div>
    )
}
