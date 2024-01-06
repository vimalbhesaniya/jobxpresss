import React, { useState, useEffect } from 'react'
import "../Style/jobpostbycompany.css"
import axios from 'axios';
import Moment from 'react-moment';
function JobsWhichPostBycompanyBySearch() {
    const [job, setJobs] = useState([]);
    useEffect(() => {
        const cid = localStorage.getItem("isc_id")
        axios?.get(`http://localhost:8000/jobs/cid/${cid}`).then(e => setJobs(e.data))
    }, [])
    return (
        <>
        {job.length=== 0 ?<h1>No Positions Available</h1> : ""}
            {job.map((e) => {
               return <div class="job-details">
               
               <h4>{job.length} Positions Available </h4>
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
                    <div class="section">
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

export default JobsWhichPostBycompanyBySearch