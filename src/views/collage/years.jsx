import React from 'react';


const Years = (props) => {
    return (
        <section className="years-section">
            <div className="container">
                <div className="col-md-9 col-12 mx-auto">
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
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
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
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
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
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
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
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                                <li>Information Security</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Years;