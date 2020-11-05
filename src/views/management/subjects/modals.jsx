import React from 'react'
import { Modal } from 'antd'
import * as Yup from 'yup'
import { Formik, ErrorMessage, Form, Field } from 'formik'
    
export const AddModal = (props) => {

    const initialValues = { name: '',year : '', desc: '', doctor : '',another : '' }

    const validateSchema = () => (
        Yup.object({
            name: Yup.string().min(5).required(),
            year: Yup.number().max(1).required(),
            desc: Yup.string().min(60).required(),
            doctor: Yup.number().min(1).max(4).required(),
            another: Yup.number().min(1).max(4).required()
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
                okButtonProps={{ htmlType: "submit", key: 'submit', form: 'add-subject' }}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validateSchema}
                    onSubmit={submitForm}
                >
                    {
                        ({ values, handleChange, handleBlur, handleSubmit }) => (
                            <Form onSubmit={handleSubmit} id="add-subject">
                                <div className="group-input">
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <ErrorMessage name="name" component="div" className="error" />
                                </div>

                                <div className="group-input">
                                    <Field
                                        type="text"
                                        name="desc"
                                        placeholder="Description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.desc}
                                    />
                                    <ErrorMessage name="desc" component="div" className="error" />
                                </div>

                                <div className="group-input">
                                    <select
                                        name="year"
                                        id="year"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.year}
                                    >
                                        <option value="" label="-- Select Year --" />
                                        <option value="1" label="First Year" />
                                        <option value="2" label="Second Year" />
                                        <option value="3" label="Third Year" />
                                        <option value="4" label="Fourth Year" />
                                    </select>
                                    <ErrorMessage name="year" component="div" className="error" />
                                </div>

                                <div className="group-input">
                                        <select
                                            name="doctor"
                                            id="doctor"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        value={values.doctor}
                                        >
                                            <option value="" label="-- Select Doctor --" />
                                            <option value="1" label="First Year" />
                                            <option value="2" label="Second Year" />
                                            <option value="3" label="Third Year" />
                                            <option value="4" label="Fourth Year" />
                                    </select>
                                    <ErrorMessage name="doctor" component="div" className="error" />
                                </div>
                                
                                <div className="group-input">
                                    <select
                                        name="another"
                                        id="another"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.another}
                                    >
                                        <option value="" label="-- Select Another Doctor --" />
                                        <option value="1" label="First Year" />
                                        <option value="2" label="Second Year" />
                                        <option value="3" label="Third Year" />
                                        <option value="4" label="Fourth Year" />
                                    </select>
                                    <ErrorMessage name="another" component="div" className="error" />
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

    const initialValues = { name: '', year: '', desc: '', doctor: '', another: '' }

    const validateSchema = () => (
        Yup.object({
            name: Yup.string().min(5).required(),
            year: Yup.number().max(1).required(),
            desc: Yup.string().min(60).required(),
            doctor: Yup.number().min(1).max(4).required(),
            another: Yup.number().min(1).max(4).required()
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
                onOk={props.editModal}
                confirmLoading={props.confirmLoading}
                onCancel={props.onCancel}
                okButtonProps={{ htmlType: "submit", key: 'submit', form: 'edit-subject' }}
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
                                        placeholder="Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <ErrorMessage name="name" component="div" className="error" />
                                </div>

                                <div className="group-input">
                                    <Field
                                        type="text"
                                        name="desc"
                                        placeholder="Description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.desc}
                                    />
                                    <ErrorMessage name="desc" component="div" className="error" />
                                </div>

                                <div className="group-input">
                                    <select
                                        name="year"
                                        id="year"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.year}
                                    >
                                        <option value="" label="-- Select Year --" />
                                        <option value="1" label="First Year" />
                                        <option value="2" label="Second Year" />
                                        <option value="3" label="Third Year" />
                                        <option value="4" label="Fourth Year" />
                                    </select>
                                    <ErrorMessage name="year" component="div" className="error" />
                                </div>

                                <div className="group-input">
                                    <select
                                        name="doctor"
                                        id="doctor"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.doctor}
                                    >
                                        <option value="" label="-- Select Doctor --" />
                                        <option value="1" label="First Year" />
                                        <option value="2" label="Second Year" />
                                        <option value="3" label="Third Year" />
                                        <option value="4" label="Fourth Year" />
                                    </select>
                                    <ErrorMessage name="doctor" component="div" className="error" />
                                </div>

                                <div className="group-input">
                                    <select
                                        name="another"
                                        id="another"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.another}
                                    >
                                        <option value="" label="-- Select Another Doctor --" />
                                        <option value="1" label="First Year" />
                                        <option value="2" label="Second Year" />
                                        <option value="3" label="Third Year" />
                                        <option value="4" label="Fourth Year" />
                                    </select>
                                    <ErrorMessage name="another" component="div" className="error" />
                                </div>

                            </Form>
                        )
                    }
                </Formik>
            </Modal>
        </div>
    )
}