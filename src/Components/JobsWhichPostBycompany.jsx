import React, { useState, useEffect } from 'react'
import "../Style/jobpostbycompany.css"
import axios from 'axios';
import Moment from 'react-moment';
function JobsWhichPostBycompany() {
    const [job, setJobs] = useState([]);
    useEffect(() => {
        const cid = localStorage.getItem("c_id")
        axios?.get(`http://localhost:8000/jobs/cid/${cid}`).then(e => setJobs(e.data))
        // console.log(cid);
    }, [])
    const deleteJob = async  (id) =>{
        // console.log(id);
        const result = {
            method: 'DELETE',
        };
        await fetch(`http://localhost:8000/delete/job/${id}`, result).then(e => console.log()).catch(e => alert(e));
        await fetch(`http://localhost:8000/delete/app/c/${id}`, result).then(e => console.log(e)).catch(e => alert(e));
        // confirm ("Are you sure you want to delete this job?")
        const cid = localStorage.getItem("c_id")
        axios?.get(`http://localhost:8000/jobs/cid/${cid}`).then(e => setJobs(e.data));

    }
    return (
        <>
        <h4 style={{
            fontSize:"20px",
            marginLeft:"20px"
        }}>{job.length} Positions are Available</h4>
        {job.length=== 0 ?<h2 className='text-center font-lg animate__animated  animate__wobble'>No Positions Available</h2> : ""}
            {job.map((e) => {
               return <div class="job-details animate__animated animate__fadeInLeft">
               <div className='d-flex justify-content-start gap-3 align-items-center'>
               <button className='btn-sm btn-danger'><i class="fa-solid fa-trash-can text-white" onClick={() => deleteJob(e._id)}></i></button>
               </div>
                    <h1 class="job----title">{e.jobTitle}</h1>
                    <div class="header----info">
                        <div class="company">{e.company.company_name}</div>
                        <div class="job----type">
                            <div class="location">{e.location}</div>
                        </div>
                    </div>
                    <div class="dates">
                        <div class="posted----on">Posted on: <Moment date={e.postedOn} fromNow></Moment></div>
                        <div class="application----deadline">Application Deadline: Deadline Date</div>
                    </div>
                    <hr />
                    <div class="section">
                        <h2>Job Description</h2>
                        <p>{e.jobDescription}</p>
                    </div>
                    <div class="section ">
                        <h2>Requirements</h2>
                        <p>{e.requirements}</p>
                    </div>
                    <div class="section">
                        <h2>Responsibilities</h2>
                        <p>{e.responsibilities}</p>
                    </div>
                    <div class="section">
                        <h2>Benefits</h2>
                        <p>{e.benefits}</p>
                    </div>
                    <div class="section">
                        <h2>How to Apply</h2>
                        <p>{e.howToApply}</p>
                    </div>
                    <div class="salary">Salary: {e.salary}</div>
                </div>
            })
            }
        </>
    )
}

export default JobsWhichPostBycompany