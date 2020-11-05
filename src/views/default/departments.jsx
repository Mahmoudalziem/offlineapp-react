import React, { Component } from 'react';

import cs from "../../assets/images/departments/cs.jpeg";
import it from "../../images/Departments/it.jpg";
import is from "../../images/Departments/is.jpg";
import ds from "../../images/Departments/ds.jpg";

const Item = ({image,owner,name,desc}) => (
    <div className="col-lg-6 col-12">
        <div className="depart-content">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="depart-image">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="depart-details">
                        <div className="depart-title">{owner}</div>
                        <div className="depart-name">{name}</div>
                        <p className="depart-desc">{desc}</p>
                        <ul className="social">
                            <li>
                                <a href="#facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

class Department extends Component{
    render(){
        return (
            <section className="depart-container">
                <div className="container">
                    <h3 className="header">Departments</h3>
                    <div className="row">
                        
                        <Item image={cs} owner='DR/ Ahmed Rafat' name="CS"
                            desc="Cs is a field that Combine between hardware and software 
                                design of computer systems which are relevant to the many applications of computing 
                                technology that arise in the market place. are involved in areas such as the design, 
                                installation, maintenance and development of computer-based systems on a broad scale. "
                        />

                        <Item image={it} owner='Dr/ Walid Khider' name="it"
                            desc="IT refers to the development,maintenance, and use of computer software,systems,and
                                networks.It includes their use for the processing and distribution of data. Data means
                                 information,facts,statistics,gathered together for reference,storage,or analysis. "
                        />

                        <Item image={is} owner='Dr/ Nisreen El-Saber' name="is"
                            desc="IS are formal, sociol technical, organizational systems designed to collect,
                                process, store,and distribute information. In a sociol technical perspective,
                                are composed by four components: task,people, structure (or roles),
                                and technology , software used to run a computerized database"
                        />

                        <Item image={ds} owner='Dr/ Mahmoud Esmial' name="ds"
                            desc="A decision support system (DSS) is a computerized program used to support 
                                 determinations, judgments, and courses of action in an organization or a business. 
                                 A DSS sifts through and analyzes massive amounts of data, compiling comprehensive
                                 information that can be used to solve problems and in decision-making."
                        />

                    </div>
                </div>
            </section>
        )
    }
}
export default Department;