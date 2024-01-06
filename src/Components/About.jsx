import React from 'react'
import "../Style/about.css"
import Animere from 'animere'
import a1 from "../THUMbnails/a1.jpg"
import a2 from "../THUMbnails/a2.jpg"
import a3 from "../THUMbnails/a3.jpg"
import { useEffect } from 'react'
function About() {
    useEffect(() => {

        new Animere()
    }, [])
    return (
        <>
            <div class="container  bg-body">
                <div class="row " >
                    <div class="col-6 rounded bg-danger-subtle p-5 align-items-start justify-content-center d-flex flex-column" data-animere="zoomIn">
                        <h1 class="bg-blacks">About Us</h1>
                        <p class="text-justify text-dark-emphasis ">Welcome to [Your Job Portal Name], where career aspirations
                            meet their match! We're not just another job search platform; we're your dedicated partner in
                            finding the perfect job or the ideal candidate.</p>
                    </div>
                    <div class="col-6 " data-animere="fadeInRight">
                        <img src={a1} class="img-fluid " alt="" srcset="" />
                    </div>
                    <div class="col-6 " data-animere="fadeInLeft">
                        <img src="https://img.freepik.com/free-vector/drug-developers-presenting-new-meds-buyer-presentation-pills-pharmaceuticals-flat-illustration_74855-14010.jpg?w=996&t=st=1694323593~exp=1694324193~hmac=737f29a58e90dced23ddd9b46d4fb0571be53df06baa916ad43f73064c745f45"
                            class="img-fluid " alt="" srcset="" />
                    </div>
                    <div class="col-6 bg-danger-subtle p-5 rounded" data-animere="zoomIn">
                        <h1 class="">Our Mission</h1>
                        <p class="text-justify text-dark-emphasis">Our mission is to simplify the job search process for both
                            job seekers and employers. We believe that finding the right job or the right talent should be a
                            seamless and enjoyable experience. Our platform is designed to make that vision a reality.</p>
                    </div>
                </div>
                <div class="container-fluid p-5">
                    <div class="row">
                        <div class="col-12 " data-animere="zoomInRight">
                            <h2 class="text-center section--part">
                                What Sets Us Apart
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row gap-5  justify-content-center fw-lighter p-2">
                        <div class=" col-4 card--hover card " data-animere="fadeInTopLeft">
                            <div class="card-header fw-medium text-center ">Extensive Job Listings </div>
                            <div class="card-body">
                                <p class="card-text text-center fw-lighter" >We offer an extensive database of job listings across various industries, making it easy for job seekers to explore opportunities that align with their skills and interests.</p>
                            </div>
                        </div>
                        <div class=" col-4 card--hover card" data-animere="fadeInDown">
                            <div class="card-header fw-medium text-center ">User-Friendly Interface</div>
                            <div class="card-body">
                                <p class="card-text text-center fw-lighter">Our user-friendly interface ensures that job seekers can easily navigate the platform, apply for jobs, and track their applications. Employers can efficiently post job openings, review applications, and connect with potential hires.
                                </p>
                            </div>
                        </div>
                        <div class=" col-4 card--hover card " data-animere="fadeInTopRight">
                            <div class="card-header fw-medium text-center ">Personalized Job Recommendations</div>
                            <div class="card-body">
                                <p class="card-text text-center fw-lighter">We use cutting-edge technology to provide personalized job recommendations to our users. We understand that every job seeker is unique, and our goal is to match them with positions that suit their qualifications and preferences.</p>
                            </div>
                        </div>
                        <div class=" col-4 card--hover card " data-animere="fadeInBottomLeft">
                            <div class="card-header fw-medium text-center ">Employer Services</div>
                            <div class="card-body">
                                <p class="card-text text-center fw-lighter"> For employers, we offer a range of services to streamline the hiring process, including applicant tracking, candidate screening, and job posting tools.</p>
                            </div>
                        </div>
                        <div class=" col-4 card--hover card " data-animere="fadeInUp">
                            <div class="card-header fw-medium text-center ">Career Resources</div>
                            <div class="card-body">
                                <p class="card-text text-center fw-lighter">In addition to job listings, we provide valuable career resources such as resume building tips, interview preparation advice, and industry insights to help job seekers succeed.</p>

                            </div>
                        </div>
                        <div class=" col-4 card--hover card " data-animere="fadeInBottomRight">
                            <div class="card-header fw-medium text-center ">Personalized Job Recommendations</div>
                            <div class="card-body">
                                <p class="card-text text-center fw-lighter">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="container p-5">
                    <div class="row">
                        <div class="col-6 justify-content-center align-items-start bg-gradient bg-danger-subtle rounded  p-4 d-flex flex-column" data-animere="bounceInLeft">
                            <h2 class="text-bg-info p-3 rounded-3 text-danger-emphasis">
                                Our Team
                            </h2>
                            <p class="text-danger-emphasis text-justify">
                                Our team consists of dedicated professionals who are passionate about helping individuals and businesses find their perfect fit. We are committed to providing exceptional service and support to all our users.
                            </p>
                        </div>
                        <div class="col-6 rounded" data-animere="bounceIn" style={{ border: "1px solid red;" }}>
                            <img src={a3} class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div class="container p-5">
                    <div class="row">
                        <div class="col-6 rounded" data-animere="bounceInRight" style={{ border: " 1px solid rgb(0, 0, 0);" }}>
                            <img src="https://img.freepik.com/premium-photo/businessman-without-head_700248-5305.jpg?w=740" class="img-fluid" alt="" />
                        </div>
                        <div class="col-6 justify-content-center align-items-start bg-gradient bg-dark-subtle rounded  p-4 d-flex flex-column" data-animere="jackInTheBox">
                            <h2 class="text-bg-dark p-3 rounded-3 text-white-emphasis" data-animere="bounce">
                                Why Choose Us?
                            </h2>
                            <ul class="list-group" data-animere="pulse" >
                                <h6 class="">User-Friendly</h6>
                                <li class="list-group-item">Our platform is designed with simplicity in mind, making it easy for both job seekers and employers to navigate and use.</li>
                                <h6>Extensive Network</h6>
                                <li class="list-group-item">With a vast network of job seekers and employers, we have the resources to connect the right people with the right opportunities.</li>
                                <h6>Constant Innovation</h6>
                                <li class="list-group-item">We are continually improving our platform to provide the best experience for our users. We stay up-to-date with industry trends and technology to offer cutting-edge solutions.</li>
                                <h6>Dedicated Support</h6>
                                <li class="list-group-item"> Our customer support team is here to assist you every step of the way. If you have any questions or encounter any issues, we're just a message away. </li>
                                <h6>User-Friendly</h6>
                                <li class="list-group-item">Our platform is designed with simplicity in mind, making it easy for both job seekers and employers to navigate and use.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="container p-5">
                    <div class="row">
                        <div class="col justify-content-center bg-body-secondary  rounded-3 align-items-center  text-center d-flex p-3" data-animere="rollIn">
                            <p>We are a passionate team of professionals who understand the challenges of the job search process. With years of experience in the recruitment industry, we are committed to simplifying this process, making it easier for job seekers to find the right job and employers to find the right talent.</p>
                            <h1 class="text-dark p-3 m-2" style={{ width: "100px;", borderLeft: "1px solid black" }}>Who We Are</h1>
                        </div>
                    </div>
                </div>
                <div class="container p-5">
                    <div class="row">
                        <div class="col text-center justify-content-center align-items-center bg-body-secondary rounded-3 d-flex p-3 " data-animere="rollIn">
                            <h1 style={{ width: "100px;", borderRight: "1px solid black" }} className='text-dark p-3 m-2'>Join Us Today!</h1>
                            <p>Whether you're a job seeker looking for your next career move or an employer seeking top-notch talent, [Your Job Portal Name] is here to help you achieve your goals. Join us today and embark on a journey toward a brighter future.</p>
                        </div>
                    </div>
                </div>
                <div className='container'>

                </div>
            </div>
            <div class="footer foot-user">
                <div class="main-content footer-content">
                    <div class="footer-wrapper">
                        <h1 className='Logo logo'>job<span className='X_css'>X</span>press</h1>
                        <a href="mailto:hello@creativecorner.studio"
                            class="email">hello@creativecorner.studio</a><a href="tel:+31619823444" class="phone-number">+31 619
                                82 34 44</a><span data-w-id="243b72b1-2ec3-5fbf-b429-e7db968e65d8" href="#"
                                    class="purple-button w-button">Get Started FREE</span>
                        <p class="paragraph-small footer-paragraph">© 2022 - All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About