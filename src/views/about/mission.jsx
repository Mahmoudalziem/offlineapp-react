import React from 'react'


/// Images 

import mission1 from '../../assets/images/mission/mission1.jpg';
import mission2 from '../../assets/images/mission/mission2.jpg';
import mission3 from '../../assets/images/mission/mission3.jpg';
import mission4 from '../../assets/images/mission/mission4.jpg';

const Item = (props) => {
    return (
        <div className={`col-md-6 col-12 ${props.className}`}>
            <div className="mission_content_image w-100">
                <img className="w-100 d-block" src={props.image} alt=""/>
            </div>
        </div>
    )
}
const Mission = () => {
    return (
        <section className="mission_content">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-12">
                        <div className="row">

                            <Item image={mission1}/>

                            <Item image={mission2} className="d-md-block d-none"/>

                            <Item image={mission3} className="d-md-block d-none" />

                            <Item image={mission4} className="d-md-block d-none" />

                        </div>
                    </div>

                    <div className="col-md-5 col-12">
                        <div className="mission_content_details">
                            <h2>
                                Our
                                <span>Mission</span>
                            </h2>
                            <p>
                                Solve The problem of wasting time and effort in inquiring about something in college.<br/>
                                Solve The problem of a difficulty faces students to reach for the information of the college.<br/>
                                Solve The problem of a difficulty faces professors to communicate with student and tell them the new news.<br/>
                                Solve The problem of looking at technological development is negative.<br/>
                                Solve The problem of difficulty in education process for student of college.<br/>

                            </p>
                            <p>
                            	 help student can downloads material ,upload taskes and make Exame
                        
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Mission;