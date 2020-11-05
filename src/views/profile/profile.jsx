import React, { useEffect } from 'react';
import cover from "../../images/profile/cover.jpg";
import { actionGetProfile } from '../../actions/actionsLogin'
import $ from 'jquery'
import {logout } from '../../services/login'
import { useSelector, useDispatch } from 'react-redux';
import { MDBDataTable } from 'mdbreact';
import { Upload, message, Select } from 'antd';
import { Formik, ErrorMessage, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react';
import { UserOutlined, LaptopOutlined, NotificationOutlined, InboxOutlined } from '@ant-design/icons';
// import onlineImg from "../../images/doctor.png";

const { Dragger } = Upload;

const { Option, OptGroup } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}
const dataTable = () => {
    return {

        columns: [
            {
                label: 'Subject',
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
            }
        ],
        rows: [
            {
                name: 'English',
                midtram: 20,
                oral: 20,
                practical: 15,
                semester: 55,
            },
            {
                name: 'English',
                midtram: 20,
                oral: 20,
                practical: 15,
                semester: 55,
            }
        ]
    }
}

const dataTableUploadTasks = () => {
    return {

        columns: [
            {
                label: 'Engineer',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Status',
                field: 'status',
                sort: 'asc',
                width: 270
            }
        ],
        rows: [
            {
                name: 'Ahmed Reda Hamza',
                status : 'Waiting'
            },
            {
                name: 'Ahmed Reda Hamza',
                status: 'Accept'
            }
        ]
    }
}
const UploadImages = {
    name: 'file',
    accept:'.pdf,.xlx,.rar,.png',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;

        // if (status !== 'uploading') {

        //     console.log(info.file, info.fileList);
        // }

        if (status === 'done') {

            message.success(`${info.file.name} file uploaded successfully.`);

        } else if (status === 'error') {

            message.error(`${info.file.name} file upload failed.`);
        }
    },
    progress: {
        strokeColor: {
            '0%': '#108ee9',
            '100%': '#87d068',
        },
        strokeWidth: 3,
        format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
};

const Profile = (props) => {

    const dispatch = useDispatch();

    const studentData = useSelector(s => s.student)

    const [datatable, setDatatable] = useState(dataTable());

    const initialValues = { password: '', confirmPassword: '' }

    const validateSchema = () => (
        Yup.object({
            password: Yup.string().min(6, 'Password Must Be 6 Chars').required(),
            confirmPassword: Yup.string().min(6, 'Password Must Be 6 Chars').required(),
        })
    )

    const submitForm = (values, { setSubmitting }) => {

        setSubmitting(false)

        console.log(values)
    }

    const [student, setStudent] = useState({
        avatar: '',
        email: '',
        name: '',
        department : '',
        section : ''
    })

    useEffect(() => {

        (studentData === undefined ||   Object.keys(studentData).length === 0) ? (

            dispatch(actionGetProfile())

                .then(res => {

                    setStudent({
                        avatar: res.avatar,
                        email: res.email,
                        name: res.name,
                        department : res.department,
                        section : res.section
                    })
                })
        ) : (

                setStudent({
                    avatar: studentData.avatar,
                    email: studentData.email,
                    name: studentData.name,
                    department: studentData.department,
                    section: studentData.section
                })

            )
        
        $('div[data-test="datatable-entries"]').remove();
        $('div[data-test="datatable-search"]').removeClass('col-md-6');

    },[])

    const logoutFunction = () => {
        logout().then(res => {
            props.history.push('/login')
        })
    }

    return (
        <div className="profile_container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-12 p-0 pr-3 d-none d-md-block">
                        <div className="profile_container_content_left">
                            <div className="profile_content_image">
                                <div className="profile_content_image_background">
                                    <img className="user_image_background" src={cover} alt="user Background" />
                                </div>
                                <div className="profile_content_image_avater">
                                    <div className="profile_content_image_avater_content">
                                        <input type="file" className="image_user_content d-none" name="image_user_content" />
                                        <img className="user_image_avater" src={student.avatar} alt="user Avatar" />
                                        <span className="user_image_upload">
                                            <i className="fa fa-picture-o"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="user_name">{student.name}</div>
                            <ul className="nav nav-tabs nav_buttons p-0 mx-auto" role="tablist">
                                <li className="nav_item">
                                    <a className="nav-link active show" data-toggle="tab" href="#semester" role="tab">
                                        <span>{<LaptopOutlined />}</span>
                                        Semester
                                    </a>
                                </li>
                                <li className="nav_item">
                                    <a className="nav-link" data-toggle="tab" href="#marks" role="tab">
                                        <span>{<UserOutlined />}</span>
                                        view Marks
                                    </a>
                                </li>

                                <li className="nav_item">
                                    <a className="nav-link" data-toggle="tab" href="#upload-task" role="tab">
                                        <span>{<UserOutlined />}</span>
                                        Upload Task
                                    </a>
                                </li>
                                <li className="nav_item">
                                    <a className="nav-link" data-toggle="tab" href="#edit_profile" role="tab">
                                        <span>{<UserOutlined />}</span>
                                        Settings
                                    </a>
                                </li>
                                <li className="nav_item">
                                    <button className="nav-link" onClick={logoutFunction}>
                                        <span>{<UserOutlined />}</span>
                                        logOut
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 col-12 ml-5" style={{ flex:'0 0 79%' }}>
                        
                        <div className="profile_container_content_right">
                            <div className="course_show_tab_body tab-content">
                                
                                
                                <div className="tab-pane fade show active" id="semester" role="tabpanel">
                                    <div className="user_course_container">
                                        <div className="container">
                                            <section className="years-section">
                                                <div className="container">
                                                    <div className="mx-auto">
                                                        <ul className="nav nav-tabs nav_buttons p-0 mx-auto" id="myTab" role="tablist">
                                                            <li className="nav-item col">
                                                                <a className="nav-link active" data-toggle="tab" href="#first" role="tab">First Year</a>
                                                            </li>
                                                            <li className="nav-item col">
                                                                <a className="nav-link" data-toggle="tab" href="#second" role="tab">Second Year</a>
                                                            </li>
                                                            <li className="nav-item col">
                                                                <a className="nav-link" data-toggle="tab" href="#third" role="tab">Third Year</a>
                                                            </li>
                                                            <li className="nav-item col">
                                                                <a className="nav-link" data-toggle="tab" href="#fourth" role="tab">Fourth Year</a>
                                                            </li>
                                                            <li className="nav-item col">
                                                                <a className="nav-link" data-toggle="tab" href="#fourth" role="tab">Fourth Year</a>
                                                            </li>
                                                            <li className="nav-item col">
                                                                <a className="nav-link" data-toggle="tab" href="#fourth" role="tab">Fourth Year</a>
                                                            </li>
                                                            <li className="nav-item col">
                                                                <a className="nav-link" data-toggle="tab" href="#fourth" role="tab">Fourth Year</a>
                                                            </li>
                                                        </ul>

                                                        <div className="tab-content" id="pills-tabContent">
                                                            <div className="tab-pane fade show active" id="first" role="tabpanel">
                                                                <p>
                                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                                                    Mustache cliche tempor, williamsburg carles vegan helvetica.
                                                                    Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                                                                    Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                                                    Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                                                                    american apparel, butcher voluptate nisi qui.
                            </p>
                                                                <ul className="subjects">
                                                                    <li>
                                                                        <span>Dr \</span>
                                                                        <span>Mahmoud Abd Alziem</span>
                                                                    </li>
                                                                    <li>
                                                                        <span>Eng \</span>
                                                                        <span>Mahmoud Abd Alziem</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="tab-pane fade" id="second" role="tabpanel">
                                                                <p>
                                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                                                    Mustache cliche tempor, williamsburg carles vegan helvetica.
                                                                    Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                                                                    Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                                                    Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                                                                    american apparel, butcher voluptate nisi qui.
                                                                </p>
                                                                <ul className="subjects">
                                                                    <li>
                                                                        <span>Dr \</span>
                                                                        <span>Mahmoud Abd Alziem</span>
                                                                    </li>
                                                                    <li>
                                                                        <span>Eng \</span>
                                                                        <span>Mahmoud Abd Alziem</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="tab-pane fade" id="third" role="tabpanel">
                                                                <p>
                                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                                                    Mustache cliche tempor, williamsburg carles vegan helvetica.
                                                                    Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                                                                    Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                                                    Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                                                                    american apparel, butcher voluptate nisi qui.
                                                                </p>
                                                                <ul className="subjects">
                                                                    <li>
                                                                        <span>Dr \</span>
                                                                        <span>Mahmoud Abd Alziem</span>
                                                                    </li>
                                                                    <li>
                                                                        <span>Eng \</span>
                                                                        <span>Mahmoud Abd Alziem</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="tab-pane fade" id="fourth" role="tabpanel">
                                                                <p>
                                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                                                    Mustache cliche tempor, williamsburg carles vegan helvetica.
                                                                    Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                                                                    Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                                                    Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                                                                    american apparel, butcher voluptate nisi qui.
                                                                </p>
                                                                <ul className="subjects">
                                                                    <li>
                                                                        <span>Dr \</span>
                                                                        <span>Mahmoud Abd Alziem</span>
                                                                    </li>
                                                                    <li>
                                                                        <span>Eng \</span>
                                                                        <span>Mahmoud Abd Alziem</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="marks" role="tabpanel">
                                    <div className="container">
                                    <div className="subjects-marks">
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
                                </div>
                                </div>

                                <div className="tab-pane fade" id="upload-task" role="tabpanel">
                                    <div className="container">
                                        <div className="drag-files">
                                            
                                            <Select className="w-100" defaultValue="jack" onChange={handleChange}>
                                                <Option value="jack">ahmed</Option>
                                                <Option value="d">reda</Option>
                                                <Option value="d">reda</Option>
                                                <Option value="3">reda</Option>
                                                <Option value="x">reda</Option>
                                            </Select>

                                            <Dragger {...UploadImages}>
                                                <p className="ant-upload-drag-icon">
                                                    <InboxOutlined />
                                                </p>
                                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                <p className="ant-upload-hint">
                                                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                                    band files
                                                </p>
                                            </Dragger>
                                            
                                        </div>

                                        <div className="table-upload-status mt-5">
                                            <MDBDataTable
                                                bordered
                                                hover
                                                exportToCSV
                                                displayEntries={false}
                                                pagesAmount={10}
                                                responsive={true}
                                                data={dataTableUploadTasks()}
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div className="tab-pane fade" id="edit_profile" role="tabpanel">
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
                                </div>
                            </div>
                        </div>
                        <div className="modal fade ml-0 pl-0" id="user_image" aria-hidden="true">
                            <div className="modal-dialog" role="document">

                                <div className="modal-content">

                                    <div className="modal-header">
                                        <h5>Corp Image</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="error validate"></div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <div id="image_crop_avater"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer justify-content-center text-center">
                                        <button type="submit" className="btn btn-primary crop_user_image">Import Image</button>
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;