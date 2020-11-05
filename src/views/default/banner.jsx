import React,{Fragment} from 'react'
import { NavLink } from 'react-router-dom';

const Banner = (props) => {
    return (
        <Fragment>
            <section className="page_banner">
                <img src={props.image} alt=""/>
                <div className="container">
                    <div className="page-content">
                        <h3>
                            {props.title}
                        </h3>
                        <ul className="content-nav">
                            <li>
                                <NavLink to="/">
                                    <i className="fa fa-home"></i> Home
                                </NavLink>
                            </li>
                            <li>
                                <div>
                                    <i className="fa fa-long-arrow-right"></i> 
                                    {props.title}
                                </div>
                            </li>
                        </ul>
                        <div className="clear-both"></div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Banner;