import React, { Component, Fragment } from 'react'
import $ from 'jquery'
import './script'
class MakeQuiz extends Component {

    // handlingAnswer = (e) => {

    //     let value = e.target.value,
    //         item = $('li.question_answer_content:first').clone();
    //     if (value.length > 3 ) {
    //         $('ul.question_multiple_answer').append(item);
    //         $('ul.question_multiple_answer li:last input').val('');
    //         $('ul.question_multiple_answer li:last a').removeClass('d-none');
    //     }
    // }
    render() {
        return (
            <Fragment>
                <div className="quiz-container">
                    <div className="nav-buttons">
                        <ul className="nav nav-tabs p-0 mx-auto" id="myTab" role="tablist">

                            <li className="nav_item">
                                <a className="nav-link active" data-toggle="tab" href="#upload-quiz" role="tab" aria-selected="true">
                                    Upload Quiz
                                </a>
                            </li>
                            <li className="nav_item">
                                <a className="nav-link" data-toggle="tab" href="#add-quiz" role="tab" aria-selected="false">
                                    Add Quiz
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="quiz-container-content tab-content" id="myTabContent">
                        <div className="tab-pane fade active show" id="upload-quiz" role="tabpanel">
                            <section className="upload-quiz">
                                <p className="file_types">
                                    Upload PDF,word,excel or other file(s) here
                                            </p>
                                <p className="file_name d-none">
                                    azima.pptx
                                </p>
                                <input type="file" className="d-none" name="upload_file_lecture" id="upload_file_lecture" accept=".pdf,.pptx,.docx,.xlsx,.xls" />
                                <button className="btn btn-primary" type="button" htmlFor="upload_file_lecture">
                                    Choose File
                                            </button>
                                <button className="btn btn-primary d-none" type="button">
                                    Upload File
                                            </button>
                            </section>
                        </div>

                        <div className="tab-pane fade" id="add-quiz" role="tabpanel">
                            <section className="add-quiz">
                                <form className="form_question_add" method="post" action="#" name="form_question_add">
                                    <div className="input-group question_parent">
                                        <input type="text" className="input_100 has-val" name="question_input" placeholder="Type Question Here" required />
                                    </div>
                                    <ul className="question_multiple_answer">

                                        <li className="question_answer_content">
                                            <div className="answer_checkbox">
                                                <input data-toggle="tooltip" title="" data-placement="bottom" type="checkbox" className="question_answer_choice" name="question_answer_choice" />
                                            </div>
                                            <input type="text" className="question_answer_input" name="question_answer_input" placeholder="Answer Choice" onKeyPress={this.handlingAnswer} required />
                                            <a data-toggle="tooltip" title="" data-placement="right" href="javascript:void(0)" className="delete delete_answer fa fa-trash d-none" rel="no"></a>
                                        </li>

                                    </ul>
                                    <input type="submit" value="Add Quiz" className="form_question_button btn" name="form_question_button" />
                                </form>
                            </section>
                        </div>

                    </div>

                    <div className="quiz-upload-container">
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default MakeQuiz;

