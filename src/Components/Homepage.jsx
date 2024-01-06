import React, { useState, useEffect } from 'react';
import "../Style/home.css"
import Animere from 'animere'

function Homepage() {
    const [user, setUser] = useState();

    useEffect(() => {
    new Animere()
    }, [])
    return (
        <>
            <div className='home--welcome'>
            </div>
            <div className='home--root'  >

                <div className='home--main' data-animere-duration="2000ms" data-animere="bounceInDown">
                    <div className='home--content'>
                        <div className='content-1' >
                            <h3>Welcome to JobXpress</h3>
                            <p>We want all candidates - from entry level to leadership - to have access to the same information and resources</p>
                        </div>
                        <div className='content-2' data-animere="rubberBand">
                            <img className="home--img" alt src="//www.gstatic.com/hiring/CportalUi/applications/PersonWithLights.png" />
                        </div>
                    </div>
                </div>

                <div className='home--main2' data-animere="zoomIn" >
                    <img src="//www.gstatic.com/hiring/CportalUi/applications/EmptyState.png" className="UrH54e" />
                </div>
                <div className='home-main3'>
                    <div className='flex--columns'>
                        <div className="card-deck--" data-animere="rotateInDownLeft" >
                            <div className="card--">
                                <div className="card-img-top--" >
                                    <img src="https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg?w=900&t=st=1693150811~exp=1693151411~hmac=007990a3ff338bd796fa3bf78a4663962cdc60b784dfce8136155f6ff5f29b90" alt="" className='img' /></div>
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
                        <div className="card-deck--" data-animere="zoomIn">
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
                        <div className="card-deck--" data-animere="rotateInDownRight">
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
                        <div class="box-wrapper">
                            <div class="box" data-animere="fadeInLeft">
                                <div class="box-content"><img
                                    src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/6379f4b6e86a4527394134fc_box-icon.png"
                                    loading="lazy" alt="" class="box-icon" />
                                    <p class="box-heading">Create compelling <br />job ads</p>
                                    <p class="box-paragraph">Get expert advice on how to attract more top candidates.</p>
                                </div><a href="#candidates" class="learn-more-link w-inline-block">
                                    <div class="learn-more">Learn more</div>
                                </a>
                            </div>
                            <div class="box"  data-animere="zoomIn">
                                <div class="box-content"><img
                                    src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/6379f4b6e86a454d18413522_box-icon-2.png"
                                    loading="lazy" alt="" class="box-icon" />
                                    <p class="box-heading">Target your next great hire by multiposting your job ad</p>
                                    <p class="box-paragraph">Multipost ads to top job boards and maximise your reach in one click.
                                    </p>
                                </div><a href="#candidates" class="learn-more-link w-inline-block">
                                    <div class="learn-more">Learn more</div>
                                </a>
                            </div>
                            <div class="box"  data-animere="fadeInRight">
                                <div class="box-content"><img
                                    src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/6379f4b675082d801474b367_box-icon-3.png"
                                    loading="lazy" alt="" class="box-icon" />
                                    <p class="box-heading">Manage candidates easily with hiring workflows</p>
                                    <p class="box-paragraph">Streamline and speed up your hiring process by managing applications
                                        all in one place.</p>
                                </div><a href="#candidates" class="learn-more-link w-inline-block">
                                    <div class="learn-more">Learn more</div>
                                </a>
                            </div>
                        </div>
                        <div class="center"  data-animere="rotateInUpRight">
                            <h2 style={{ fontFamily: "constantia" }}>Find the perfect person every time</h2>
                            <p class="paragraph-big">Post your job to 10+ job boards in less than 5 minutes.</p>
                        </div>
                        <div class="find-wrapper">
                            <div class="center" data-animere="rotateInUpLeft">
                                <h2>Find the perfect person every time</h2>
                                <p class="paragraph-big">Post your job to 10+ job boards in less than 5 minutes.</p>
                            </div>
                            <div class="row-wrapper" > 
                                <div class="find-row" data-animere="fadeInDown" >
                                    <div class="find-image" data-animere="pulse" data-animere-duration="2500ms"><img
                                        src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/6378818d9e2f61099a2b78ee_job-ads-image.png"
                                        loading="lazy" alt="" /></div>
                                    <div class="find-text">
                                        <h5>Create modern job ads</h5>
                                        <p class="subheader">Quickly create customised job ads with our easy-to-use editor.</p>
                                        <p class="find-paragraph"><span class="black-span">Build better job ads.</span> Create job
                                            ads that will attract and engage more top candidates.</p>
                                        <p class="find-paragraph"><span class="black-span">Get a careers site.</span> List your jobs
                                            on your own career site to start recruiting candidates.</p>

                                    </div>
                                </div>
                                <div class="find-row mirror" data-animere="fadeInDown">
                                    <div class="find-image mirror"><img
                                        src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/63788ada96fd6b3e386e091f_multiple-job-boards-img.png"
                                        loading="lazy" alt="" /></div>
                                    <div class="find-text mirror">
                                        <h5>Post to multiple job boards at once – for free</h5>
                                        <p class="subheader">Quickly create customised job ads with our easy-to-use editor.</p>
                                        <p class="find-paragraph"><span class="black-span">Free promotion.</span> Post your job ad
                                            to 10+ major platforms - including Google, Glassdoor, Indeed, and XING.</p>
                                        <p class="find-paragraph"><span class="black-span">Premium reach.</span> Highlight your job
                                            with premium job ads for 100+ job search sites, including social media platforms.</p>

                                    </div>
                                </div>
                                <div class="find-row" data-animere="fadeInDown">
                                    <div class="find-image"><img
                                        src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/63788bb98c7bd86f11c87a03_great-applications-img.png"
                                        loading="lazy" alt="" /></div>
                                    <div class="find-text">
                                        <h5>Receive more great applications</h5>
                                        <p class="subheader">Multipost to the most relevant job boards and see an increase in
                                            qualified candidates almost immediately.</p>
                                        <p class="find-paragraph"><span class="black-span">Free promotion.</span> Post your job ad
                                            to 10+ major platforms – including Google, Glassdoor, Indeed, and XING.</p>
                                        <p class="find-paragraph"><span class="black-span">Premium reach.</span> Highlight your job
                                            with premium job ads for 100+ job search sites, including social media platforms.</p>

                                    </div>
                                </div>
                                <div class="find-row mirror" data-animere="fadeInDown">
                                    <div class="find-image mirror"><img
                                        src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/63788c65f3d6aa14d2fcf062_manage-candidates--image.png"
                                        loading="lazy" alt="" /></div>
                                    <div class="find-text mirror">
                                        <h5>Manage candidates easily</h5>
                                        <p class="subheader">Our easy-to-use software lets you evaluate candidates and move them
                                            forward faster.</p>
                                        <p class="find-paragraph"><span class="black-span">Use hiring funnels.</span> Review your
                                            recruiting pipeline and hiring progress at a glance.</p>
                                        <p class="find-paragraph"><span class="black-span">Talk to your candidates.</span> Request
                                            more information and set up interviews with our new chat feature.</p>

                                    </div>
                                </div>
                                <div class="find-row" data-animere="fadeInDown">
                                    <div class="find-image"><img
                                        src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/63788ce296fd6be2886e22cd_perfect-hire-image.png"
                                        loading="lazy" alt="" /></div>
                                    <div class="find-text">
                                        <h5>Make the perfect hire</h5>
                                        <p class="subheader">Reduce hiring time by finding qualified candidates quickly and easily.
                                        </p>
                                        <p class="find-paragraph"><span class="black-span">One workflow.</span> Easily collaborate
                                            with teams to find, manage, and hire the right candidate.</p>
                                        <p class="find-paragraph"><span class="black-span">Easier screening.</span> Filter and
                                            search for key characteristics to identify the right candidates faster.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="customers-heading" data-animere="zoomIn">
                                <h5>JOIN thousands of happy customers who increased their hiring success</h5>
                            </div>
                            <div class="person-wrapper">
                                <div class="person-inner" data-animere="slideInUp">
                                    <h3>Find the perfect person every time</h3>
                                </div>
                            </div>
                            <div class="simplify-wrapper">
                                <div class="simplify-wrapper-text" data-animere="fadeInUp">
                                    <h2 className='text-white'>Simplify your hiring process</h2>
                                    <p class="paragraph-big">Learn how to create job ads that really work. Leverage winning strategies
                                        to best promote your ads. Find the perfect person faster.</p>
                                </div>
                                <div class="w-layout-grid simpify-grid">
                                    <div data-wf-pbl="layout-grid-2x1-horizontal"
                                        id="w-node-_17a61a67-ba2f-637d-0695-2835a0c91dff-4cf84929" class="cell modern-job" data-animere="slideInUp">
                                        <p class="paragraph-big cell-paragraph">Modern<br />job ads</p>
                                    </div>
                                    <div data-wf-pbl="layout-grid-2x1-horizontal" data-animere="slideInDown"
                                        id="w-node-_17a61a67-ba2f-637d-0695-2835a0c91e01-4cf84929" class="cell"><img
                                            src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/6378a08503cd69587cddefc2_cell-image.png"
                                            loading="lazy" alt="" class="simplify-grid-image" /></div>
                                    <div data-wf-pbl="layout-grid-2x1-horizontal"  data-animere="slideInLeft"
                                        id="w-node-_17a61a67-ba2f-637d-0695-2835a0c91e00-4cf84929" class="cell"><img
                                            src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/6378a0f79d37fd034c8ce4df_big-cell-image.png"
                                            loading="lazy" alt="" class="simplify-grid-big-image" /></div>
                                    <div data-wf-pbl="layout-grid-2x1-horizontal"   data-animere="slideInUp"
                                        id="w-node-bcab8fb2-0cbb-915b-0ce2-67e1707646ce-4cf84929" class="cell"><img
                                            src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/6378a12c9e2f6163e82cfdfb_cell-image-2.png"
                                            loading="lazy" alt="" class="simplify-grid-image" /></div>
                                    <div data-wf-pbl="layout-grid-2x1-horizontal"   data-animere="slideInRight"
                                        id="w-node-_943bc8c4-92d2-b82c-ed53-c7760f64abe9-4cf84929" class="cell perfect-hire">
                                        <p class="paragraph-big cell-paragraph">Make the <br />perfect hire</p>
                                    </div> 
                                    <div data-wf-pbl="layout-grid-2x1-horizontal" data-animere="fadeInBottomLeft"
                                        id="w-node-a7cbb883-691a-d2de-2174-08b342d660c8-4cf84929" class="cell manage-candidates">
                                        <p class="paragraph-big cell-paragraph">MakeManage candidates easily</p>
                                    </div>
                                    <div data-wf-pbl="layout-grid-2x1-horizontal" data-animere="jackInTheBox"
                                        id="w-node-_56a908f8-b6b4-b0eb-b595-02cc1354f9fb-4cf84929" class="cell"><img
                                            src="https://assets.website-files.com/6371f9a8a2ecca2f90f84928/6378aea34ada2469e891e262_cell-image-3.png"
                                            loading="lazy" alt="" class="simplify-grid-image" /></div>
                                </div>
                                <div class="center" data-animere="fadeInDown">
                                    <p class="paragraph-big">Ready to post your job to 10+ job boards for free?</p>
                                </div>
                            </div>
                                <div class="footer">
                                    <div class="main-content footer-content">
                                        <div class="footer-wrapper" data-animere="fadeInUp">
                        <h1 className='Logo logo'>job<span className='X_css'>X</span>press</h1>                                     
                                       <a href="tel:+31619823444" class="phone-number">+31 619
                                                    82 34 44</a><span data-w-id="243b72b1-2ec3-5fbf-b429-e7db968e65d8" href="#"
                                                        class="purple-button w-button">Get Started FREE</span>
                                            <p class="paragraph-small footer-paragraph">© 2022 - All rights reserved.</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Homepage