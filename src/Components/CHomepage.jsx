import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Style/home.css"
function CHomepage() {
    return (
        <>
            <div className='home--welcome'>
            </div>
            <div className='home--root'>

                <div className='home--main'>
                    <div className='home--content'>
                        <div className='content-1'>
                            <h3>Welcome to JobXpress</h3>
                            <p>We want all candidates - from entry level to leadership - to have access to the same information and resources</p>
                        </div>
                        <div className='content-2'>
                            <img className="home--img" alt src="//www.gstatic.com/hiring/CportalUi/applications/PersonWithLights.png" />
                        </div>
                    </div>
                </div>

                <div className='home--main2'>
                    <img src="//www.gstatic.com/hiring/CportalUi/applications/EmptyState.png" className="UrH54e" />
                </div>
                <div className='home-main3'>
                    <div className='flex--columns'>
                        <div className="card-deck--">
                            <div className="card--">
                                <div className="card-img-top--"><img src="https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg?w=900&t=st=1693150811~exp=1693151411~hmac=007990a3ff338bd796fa3bf78a4663962cdc60b784dfce8136155f6ff5f29b90" alt="" className='img' /></div>
                                <div className="card-body--">
                                    <h5 className="card-title--">How we hire</h5>
                                    <p className="card-text--">This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer--">
                                    <small className="text-muted--">View Page</small>
                                </div>
                            </div>
                        </div>
                        <div className="card-deck--">
                            <div className="card--">
                                <div className="card-img-top--"><img src="https://img.freepik.com/premium-vector/overcome-obstaclesflat-design-icon-vector-illustration_183665-329.jpg?w=740" className='img' alt="" /></div>
                                <div className="card-body--">
                                    <h5 className="card-title--">Interviewing at Companies</h5>
                                    <p className="card-text--">There are certain things you can do to properly prepare for an interview. Let's walk through them.</p>
                                </div>
                                <div className="card-footer--">
                                    <small className="text-muted--">View Page</small>
                                </div>
                            </div>
                        </div>
                        <div className="card-deck--">
                            <div className="card--">
                                <div className="card-img-top--"><img src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=1060&t=st=1693148348~exp=1693148948~hmac=a79f59fd1f0d7d468d38d2bedb889eda1156c136783f516821cd6ddb537fdd16" className='img' alt="" /></div>
                                <div className="card-body--">
                                    <h5 className="card-title--">Benefits at Google</h5>
                                    <p className="card-text--">We strive to provide Googlers and their loved ones with a world-class benefits experience, focused on supporting their wellbeing.</p>
                                </div>
                                <div className="card-footer--">
                                    <small className="text-muted--">View Page</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CHomepage