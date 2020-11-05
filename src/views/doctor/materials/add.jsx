
import React, { Component, Fragment } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Upload, message, Popconfirm } from 'antd';
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { InboxOutlined } from '@ant-design/icons'
import * as Yup from 'yup'
import $ from 'jquery'



const { Dragger } = Upload;

const UploadImages = {
    name: 'file',
    accept: '.xlxc',
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
class Add extends Component {

    initialValues = { title: '', subtitle: '', year: '', department: '' }

    validationSchema = () => (
        Yup.object({
            title: Yup.string().max(60).required(),
            subtitle: Yup.string().max(200).required()
        })
    )

    scrollTop = () => (
        $("html, body").animate({ scrollTop: 0 },
                "500"
            )
    )
    submitForm = (values, { setSubmitting }) => {

        setSubmitting(false)

        if (this.state.descValue.trim() === '') {

            $('.validate-error').text('Description Field Is Required').removeClass('d-none')

            this.scrollTop()

        } else if (this.state.perValue.trim() === '') {
            
            $('.validate-error').text('Prerequisites Field Is Required').removeClass('d-none')

            this.scrollTop()

        } else if ($('img.image-content').attr('src') === '#') {

            $('.validate-error').text('Image Is Required').removeClass('d-none')

            this.scrollTop()
        }
        else {

            let year = $('select[name="year"]').val(),
                department = $('select[name="department"]').val();
            
            values.year = year;
            values.department = department;
            values.descri = this.state.descValue;
            values.per = this.state.perValue;
            values.image = $('img.image-content').attr('src');

            console.log(values)
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            year: null,
            descValue: '',
            perValue:''
        }
    }
    componentDidMount(prevProps) {

        $('div.head').on('click', function () {

            $(this).siblings('div.course_descri').toggleClass('active')
        })
    }

    render() {
        return (
            <div className="add-course">
                <div className="container">
                    <Formik
                        initialValues={this.initialValues}
                        validationSchema={this.validationSchema}
                        onSubmit={this.submitForm}
                    >
                        {
                            ({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

                                <Form onSubmit={handleSubmit}>
                                    <div className="information-details">
                                        <div className="row">
                                            <div className="col-md-3 col-12">
                                                <div className="information">
                                                    <h3>Information English</h3>
                                                    <ul>
                                                        <li>
                                                            Add basic information about the course and
                                                            author name.
                                                        </li>
                                                        <li>
                                                            Change information about your course.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-md-9 col-12">
                                                <div className="form-content">
                                                    <div className="validate-error d-none"></div>
                                                    <div className="form-group">
                                                        <label htmlFor="title">Course Name</label>
                                                        <Field
                                                            type="text"
                                                            name="title"
                                                            className="form-control"
                                                            id="title"
                                                            placeholder="e.g. 'Advanced Photoshop Techniques' or 'Watercolors for Dummies'"
                                                            autoFocus
                                                            required
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.title}
                                                        />
                                                        <ErrorMessage name="title" component="div" className="error" />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="subtitle">Course Subtitle</label>
                                                        <Field
                                                            type="text"
                                                            name="subtitle"
                                                            className="form-control"
                                                            id="title"
                                                            required
                                                            placeholder="e.g. 'Everything you need to know about video editing'"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.subtitle}
                                                        />
                                                        <ErrorMessage name="subtitle" component="div" className="error" />
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-md-6 col-12">
                                                                <div className="form-group">
                                                                    <label htmlFor="year">Course Year</label>
                                                                    <select
                                                                        name="year"   
                                                                        id="year"
                                                                        onChange={(e) => {
                                                                            this.setState({
                                                                                year: e.target.value
                                                                            })
                                                                        }}
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
                                                            </div>

                                                            <div className="col-md-6 col-12">
                                                                <div className="form-group">
                                                                    <label htmlFor="department">Departments</label>
                                                                    <select
                                                                        name="department"   
                                                                        id="department"
                                                                        required=
                                                                        {
                                                                            this.state.year === '4' ? true : false
                                                                        }
                                                                    >
                                                                        <option value="" label="-- Select Department --" />
                                                                        {
                                                                            (this.state.year === '4') ? (
                                                                                <Fragment>
                                                                                    <option value="cs" label="CS" />
                                                                                    <option value="it" label="IT" />
                                                                                    <option value="is" label="IS" />
                                                                                    <option value="ds" label="DS" />
                                                                                </Fragment>
                                                                            ) : null
                                                                        }

                                                                    </select>
                                                                    <ErrorMessage name="department" component="div" className="error" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="course_descri_content">
                                                        <div className="head">
                                                            <span>Course Description</span>
                                                            <span>
                                                                <i
                                                                    className="fa fa-angle-down icon-arrow-down"></i>
                                                            </span>
                                                        </div>

                                                        <div className="course_descri">
                                                            <div className="container_content">
                                                                <CKEditor
                                                                    editor={ClassicEditor}
                                                                    data=""
                                                                    onChange={(event,editor) => {
                                                                        const data = editor.getData();
                                                                        this.setState({
                                                                            descValue : data
                                                                        })
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="course_descri_content">
                                                        <div className="head">
                                                            <span>Course Prerequisites</span>
                                                            <span>
                                                                <i
                                                                    className="fa fa-angle-down icon-arrow-down"></i>
                                                            </span>
                                                        </div>

                                                        <div className="course_descri">
                                                            <div className="container_content">
                                                                <CKEditor
                                                                    editor={ClassicEditor}
                                                                    data=""
                                                                    onChange={(event,editor) => {
                                                                        const data = editor.getData();
                                                                        this.setState({
                                                                            perValue : data
                                                                        })
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>




                                                    <div className="course_descri_content">
                                                        <div className="head">
                                                            <span>Course Files</span>
                                                            <span>
                                                                <i
                                                                    className="fa fa-angle-down icon-arrow-down"></i>
                                                            </span>
                                                        </div>

                                                        <div className="course_descri">
                                                            <div className="container_content">
                                                                <div className="student-content">
                                                                    <div className="student-details">
                                                                        <Dragger {...UploadImages}>
                                                                            <p className="ant-upload-drag-icon">
                                                                                <InboxOutlined />
                                                                            </p>
                                                                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                                            <p className="ant-upload-hint">
                                                                                Support for a single upload. Strictly prohibit from uploading company data or other
                                                                                band files
                                                                            </p>
                                                                        </Dragger>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="information-branding">
                                        <div className="row border-0">
                                            <div className="col-md-3 col-12">
                                                <div className="information">
                                                    <h3>Branding</h3>
                                                    <ul>
                                                        <li>

                                                            Brand your course by setting a custom thumbnail
                                                            image.
                                                            You can set different images to use on the iOS app
                                                            (as different dimensions are recommended).

                                    </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-md-9 col-12">
                                                <div className="branding-right">

                                                    <div className="branding-image">
                                                        <div className="row border-0">
                                                            <div className="col-md-8 col-lg-9">
                                                                <div className="image-container">
                                                                    <i className="fa fa-picture-o"></i>
                                                                    <img src="#" className="d-none image-content" alt="" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4 col-lg-3">
                                                                <div className="image-details">
                                                                    <div className="error_upload_image d-none">
                                                                    </div>
                                                                    <div className="upload-button btn">
                                                                        <input type="file" className="d-none" id="course_image" name="image" accept=".jpg,.jpeg,.png" onChange={(e) => {
                                                                            if (e.target.value === '') {
                                                                                return false
                                                                            }

                                                                            let image = e.target.files[0],
                                                                                fileReader = new FileReader();
                                                                            fileReader.onload = (result) => {
                                                                                image = result.target.result;
                                                                                $('img.image-content').attr('src', image).removeClass('d-none')
                                                                            }
                                                                            fileReader.readAsDataURL(image);
                                                                        }} />
                                                                        <span className="d-block" htmlFor="course_image" onClick={() => {
                                                                            $('input[name="image"]').trigger('click')   
                                                                        }}>Add Image</span>
                                                                    </div>

                                                                    <div className="half_opaque">
                                                                        <span className="text-center">
                                                                            Recommended
                                                                            <br />
                                                                            format
                                                                        </span>

                                                                        <ul>
                                                                            <li>JPG, PNG</li>
                                                                            <li>960x540px</li>
                                                                        </ul>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course_push_button text-center">
                                        <input type="submit" value="Add Course" name="push_course_input" className="btn" disabled={isSubmitting}/>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div >
        )
    }
}

export default Add;