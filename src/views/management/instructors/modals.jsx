import React from 'react'
import { Modal } from 'antd'
import * as Yup from 'yup'
import { Formik, ErrorMessage, Form, Field } from 'formik'
export const AddModal = (props) => {

    const initialValues = { name: '',email : '', password: '', department : ''}

    const validateSchema = () => (
        Yup.object({
            name: Yup.string().min(5, 'Password Must Be 6 Chars').required(),
            email: Yup.string().email().required()
                .matches(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/, {
                message: 'email must be a valid email',
                excludeEmptyString: true
            }),
            password: Yup.string().min(6, 'Password Must Be 6 Chars').required(),
            department: Yup.string().max(2, 'department not more than 2 chars').required()
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
                                        name="department"
                                        id="department"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
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
                            </Form>
                        )
                    }
                </Formik>
            </Modal>
        </div>
    )
}

export const EditModal = (props) => {

    const initialValues = { name: '', email: '', password: '', department: '' }

    const validateSchema = () => (
        Yup.object({
            name: Yup.string().min(5, 'Password Must Be 6 Chars').required(),
            email: Yup.string().email().required()
                .matches(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/, {
                    message: 'email must be a valid email',
                    excludeEmptyString: true
                }),
            password: Yup.string().min(6, 'Password Must Be 6 Chars').required(),
            department: Yup.string().max(2, 'department not more than 2 chars').required()
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

                            </Form>
                        )
                    }
                </Formik>
            </Modal>
        </div>
    )
}