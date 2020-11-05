import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Formik, ErrorMessage, Form, Field } from 'formik'
import { actionLogin } from '../../../actions/actionsLogin';
import * as Yup from 'yup'
import { message } from 'antd';
const Settings = (props) => {

    const dispatch = useDispatch();

    const state = useSelector(s => s.student)

    const initialValues = { password: '', confirmPassword: '' }

    const validateSchema = () => (
        Yup.object({
            password: Yup.string().min(6, 'Password Must Be 6 Chars').required(),
            confirmPassword: Yup.string().min(6, 'Password Must Be 6 Chars').required(),
        })
    )

    const submitForm = (values, { setSubmitting }) => {

        const hide = message.loading('waiting', 0);

        setSubmitting(false)

        dispatch(
            actionLogin({
                values,
                rule: 'student',
                status: true
            })
        )
            .then(res => {

                setTimeout(hide)

                setTimeout(() => {

                    message.success('Success!', 2);

                }, 5)

                return res ? props.history.push('/profile') : null
            })
            .catch(error => {

                console.log(error)
            })
    }

    return (
        <Fragment>
            <section className="login_section">
                <div className="container-fluid">
                    <div className="mx-auto">
                        <div className="login_content">
                            <div className="login_details">
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validateSchema}
                                    onSubmit={submitForm}
                                >
                                    {
                                        ({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <div className="group-input">
                                                    <Field
                                                        type="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password}
                                                    />
                                                    <i className="fa fa-lock"></i>
                                                    <ErrorMessage name="password" component="div" className="error" />
                                                </div>

                                                <div className="group-input">
                                                    <i className="fa fa-lock"></i>
                                                    <Field
                                                        type="password"
                                                        name="confirmPassword"
                                                        placeholder="Confirm Password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.confirmPassword}
                                                    />
                                                    <ErrorMessage name="confirmPassword" component="div" className="error" />
                                                </div>

                                                <div className="form_submit_button">
                                                    <button type="submit" className="btn submit_form" disabled={isSubmitting}>
                                                        Update Password
                                                        <i className="fa fa-long-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </Form>
                                        )
                                    }


                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Settings;