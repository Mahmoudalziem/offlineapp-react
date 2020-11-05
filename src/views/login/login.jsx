import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Formik, ErrorMessage, Form, Field } from 'formik'
import { actionLogin } from '../../actions/actionsLogin';
import * as Yup from 'yup'
import { message } from 'antd';
import logo from '../../assets/images/logo/fci.jpg';
import slider2 from '../../assets/images/slider/slide2.jpg';
const Login = (props) => {

    const dispatch = useDispatch();

    const initialValues = { email: '', password: '', remember: '' }

    const validateSchema = () => (
        Yup.object({
            email: Yup.string().email().required().matches("^\\w+([\\.-]?\\w+)+@\\w+([\\.:]?\\w+)+(\\.[a-zA-Z0-9]{2,3})+$",'Not Valid Email'),
            password: Yup.string().min(6, 'Password Must Be 6 Chars').required(),
        })
    )

    const submitForm = (values, { setSubmitting }) => {

        const hide = message.loading('waiting', 0);

        setSubmitting(false)

        dispatch(
            actionLogin({ values })
        )
            .then(res => {

                if (res.status) {


                    setTimeout(hide)

                    setTimeout(() => {

                        message.success('Success!', 2);

                    }, 5)


                    return (res.data.rule === 'student') ? props.history.push('profile') : props.history.push(res.data.rule)

                } else {

                    setTimeout(hide)

                    setTimeout(() => {

                        message.error(res.errors.login, 2);

                    }, 5)
                }
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
                            <div className="row no-gutters">
                                <div className="col-lg-6 col-12 d-lg-block d-none">
                                    <div className="login_page">
                                        <img alt="login_image" className="d-block" src={slider2} />
                                        <svg className="first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                            <path fill="#fff" fillOpacity="1" d="M0,288L17.1,288C34.3,288,69,288,103,256C137.1,224,171,160,206,128C240,96,274,96,309,106.7C342.9,117,377,139,411,133.3C445.7,128,480,96,514,101.3C548.6,107,583,149,617,138.7C651.4,128,686,64,720,69.3C754.3,75,789,149,823,160C857.1,171,891,117,926,117.3C960,117,994,171,1029,192C1062.9,213,1097,203,1131,176C1165.7,149,1200,107,1234,122.7C1268.6,139,1303,213,1337,250.7C1371.4,288,1406,288,1423,288L1440,288L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path>
                                        </svg>
                                        <svg className="second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                            <path fill="#fff" fillOpacity="1" d="M0,288L17.1,288C34.3,288,69,288,103,256C137.1,224,171,160,206,128C240,96,274,96,309,106.7C342.9,117,377,139,411,133.3C445.7,128,480,96,514,101.3C548.6,107,583,149,617,138.7C651.4,128,686,64,720,69.3C754.3,75,789,149,823,160C857.1,171,891,117,926,117.3C960,117,994,171,1029,192C1062.9,213,1097,203,1131,176C1165.7,149,1200,107,1234,122.7C1268.6,139,1303,213,1337,250.7C1371.4,288,1406,288,1423,288L1440,288L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="login_details">
                                        <div className="login_details_signup">
                                            <div className="d-flex align-items-center justify-content-center">
                                                <span className="site_logo">
                                                    <NavLink to="/" target="_self" className="position-static d-block">
                                                        <img src={logo} alt="site_log" />
                                                    </NavLink>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="login_head">
                                            <h3>Welcome</h3>
                                            <p>
                                                Welcome back, please login to your account.
                                            </p>
                                        </div>
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
                                                                type="email"
                                                                name="email"
                                                                placeholder="E-Mail"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                            />
                                                            <i className="fa fa-envelope"></i>
                                                            <ErrorMessage name="email" component="div" className="error" />
                                                        </div>

                                                        <div className="group-input">
                                                            <i className="fa fa-lock"></i>
                                                            <Field
                                                                type="password"
                                                                name="password"
                                                                placeholder="Password"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.password}
                                                            />
                                                            <span className="show_password">
                                                                <i className="fa fa-eye"></i>
                                                            </span>
                                                            <ErrorMessage name="password" component="div" className="error" />
                                                        </div>

                                                        <div className="form_submit_button">
                                                            <button type="submit" className="btn submit_form" disabled={isSubmitting}>
                                                                Login
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
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Login;