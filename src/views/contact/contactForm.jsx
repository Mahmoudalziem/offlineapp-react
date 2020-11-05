import React, { Fragment, useEffect } from 'react'
import $ from 'jquery';
import { Formik, Field, ErrorMessage,Form } from 'formik';
import * as Yup from 'yup';
const Icon = (props) => {
    return (
        <li>
            <div className="icon-box">
                <div className="inner">
                    <i className={`fa fa-${props.icon}`}></i>
                </div>
            </div>
            <div className="content-box">
                <h4>{props.title}</h4>
                <p>
                    {props.children}
                </p>
            </div>
        </li>
    )
}


const SocialIcon = (props) => {
    return (
        <li className="social_links">
            <a href={props.link} target="_blank" rel="no">
                <i className={`fa fa-${props.icon}`}></i>
            </a>
        </li>
    )
}
const ContactForm = () => {

    const initialVales = { name: '', email: '', subject: '', message: '' };

    const validateSchema = () => (
        Yup.object({
            name: Yup.string().max(40, 'Max Length { 40 }').required(),
            email: Yup.string().email().required(),
            subject: Yup.string().max(50, 'Max Length { 50 }').required(),
            message: Yup.string().max(1000, '').required()
        })
    )

    const submitForm = (values, { setSubmitting }) => (
        fetch('api/login', {
            method: 'POST',
            baseURL: 'https://reqres.in/',
            dataType: 'JSON',
            contentType: 'application/json',
            processData: true,
            data: values,
        })
            .then(res => res.json())
            .then((response) =>{
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    )

    return (
        <Fragment>
            <section className="contact_content">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-4">
                            <div className="contact_content_left">
                                <ul className="contact-info">

                                    <Icon icon="map-marker" title="Address">
                                        Faculty Of Computer And Information
                                            <br />
                                        Zagazig University
                                    </Icon>

                                    <Icon icon="phone" title="Phone">
                                        Mobile : +02 01007449298 <br />
                                    </Icon>

                                    <Icon icon="envelope-o" title="E-Mail">
                                        Mail : mdalzym376@gmail.com
                                        <br />
                                        Mail : mbdalzym376@gmail.com
                                    </Icon>

                                    <li>
                                        <ul className="social_items">

                                            <SocialIcon link="#" icon="facebook" />

                                            <SocialIcon link="#" icon="youtube" />

                                            <SocialIcon link="#" icon="linkedin" />

                                            <SocialIcon link="#" icon="twitter" />
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="contact_content_right">
                                <Formik
                                    initialValues={initialVales}
                                    validationSchema={validateSchema}
                                    onSubmit={submitForm}>
                                    {
                                        ({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <div className="group-input">
                                                    <Field
                                                        type="text"
                                                        name="name"
                                                        onChange={handleChange}
                                                        placeholder="Name *"
                                                        onBlur={handleBlur}
                                                        value={values.name}
                                                    />
                                                    <ErrorMessage name="name" component="div" className="error"/>
                                                    <i className="fa fa-user"></i>
                                                </div>

                                                <div className="group-input">
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        onChange={handleChange}
                                                        placeholder="E-Mail *"
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                    />
                                                    <ErrorMessage name="email" component="div" className="error" />
                                                    <i className="fa fa-user"></i>
                                                </div>


                                                <div className="group-input">
                                                    <Field
                                                        type="text"
                                                        name="subject"
                                                        onChange={handleChange}
                                                        placeholder="Subject *"
                                                        onBlur={handleBlur}
                                                        value={values.subject}
                                                    />
                                                    <ErrorMessage name="subject" component="div" className="error"/>
                                                    <i className="fa fa-user"></i>
                                                </div>

                                                <div className="message_content">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Message"
                                                        value={values.message}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        cols="30" 
                                                        rows="10"
                                                    ></textarea>
                                                    <ErrorMessage name="message" component="div" className="error"/>
                                                </div>
                                                
                                                <div className="col-md-12">
                                                    <button className="submit_contact_form" type="submit" disabled={isSubmitting}>
                                                        Message
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

            <section className="goolge_map_content">
                <iframe id="map" title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.6742239822743!2d31.52691748537548!3d30.586740681688255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f1257722a25f%3A0xe25f8a84b4f705c6!2z2YPZhNmK2Kkg2K3Yp9iz2KjYp9iqINmI2YXYudmE2YjZhdin2Kog2KfZhNiy2YLYp9iy2YrZgg!5e0!3m2!1sar!2seg!4v1591462194771!5m2!1sar!2seg" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </section>
        </Fragment>
    )
}


export default ContactForm;