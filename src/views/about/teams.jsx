import React from 'react'
import doctor from '../../assets/images/team/user.png';
const Member = (props) => {
    return (
        <div className="col-md-3 col-12">
            <div className="instr_body">
                <div className="instr_image">
                    <img src={props.image} alt="team_image" />
                    <div className="overlay_social">
                        <a href="azima" target="_blank">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="instr_name">
                    {props.name}
                </div>
                <div className="instr_title">
                    {props.title}
                </div>
            </div>
        </div>
    )
}
const Teams = () => {
    return (
        <div className="meet_team text-center">
            <div className="container">
                <h3 className="meet_team_header">
                    Meet Our
                    <span>Team</span>
                </h3>

                <div className="row justify-content-center">
                    <Member image={doctor} name="Dr / Marawa" title="project Manager" />
                    <Member image={doctor} name="Eng / Mahmoud Elmahdy" title="Superviser" />
                </div>

                <div className="row justify-content-center">
                    <Member image={doctor} name="Mahmoud Abd Alziem" title="Team Leader && Full Stack" />
                    <Member image={doctor} name="Mohamed Nasralla" title="Front End" />
                    <Member image={doctor} name="Mohamed Osama" title="Ios Development" />
                    <Member image={doctor} name="Mahmoud Whadan" title="Android Development" />
                    <Member image={doctor} name="Mahmoud Ashraf" title="Android Development" />
                    <Member image={doctor} name="Mohamed Elsayed" title="Analysis Implementation" />
                    <Member image={doctor} name="Moamen Tarek" title="UI && UX Design" />
                </div>
            </div>
        </div>
    )
}

export default Teams;