import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Fulljobdescription() {
    
    const [jobIs, setJobIs] = useState([]);
    const jobid = localStorage.getItem("job");
    const isapplied=  sessionStorage.getItem(jobid);
    const yes  = isapplied  ? true : false;
    const [dis , setDis] = useState(yes);
    const done  = isapplied  ? "Applied" : "Apply Now";
    const [apply, setApply] = useState(done);
    useEffect(() => {
        const jobid = localStorage.getItem("job");
        axios.get(`http://localhost:8000/jobs/id/${jobid}`).then(e => setJobIs(e.data))
    }, [])
    const handleApplyButton = async () => {
        const cid = jobIs[0]?.company?._id
        const uid = localStorage.getItem("user_id");
        const jobid = localStorage.getItem("job");
        const isapplied=  sessionStorage.getItem(jobid);
        const yes  = isapplied  ? true : false;
    // sessionStorage.getItem({})
        if (isapplied) {
            alert("You are already Applied for this job");
        }
        else {
            let result = await fetch(
                'http://localhost:8000/jobapplication', {
                    method: "post",
                    body: JSON.stringify({ cid, uid, jobid }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                alert("You are SuccessFully Applied for this job");
                // sessionStorage.setItem(jobid, jobid);
                setApply("Applied")
                
            }
        }
        const[all , setAll] = useState([]);
        useEffect(() => {
            const uid= localStorage.getItem("user_id");
            axios.get(`http://localhost:8000/allapplications/user/${uid}`).then(e => setAll(e.data))
            all.map((e) =>{
                    sessionStorage.setItem(e.jobid._id , e.jobid._id ,);
                    sessionStorage.setItem("status" , e.status,);
                })
            }, [jobIs])
        return (
            <>
            <div class="container" style={{ overflow: "scroll", height: "100vh", padding: "30px" }}>
                <h1>Job Details</h1>
                <table className="table  table-responsive-sm table-bordered table-hover  table-group-divider  ">
                    <tbody>
                        <tr>
                            <th>Job Title:</th>
                            <td id="jobTitle">{jobIs[0]?.jobTitle}</td>
                        </tr>
                        <tr>
                            <th>Company:</th>
                            <td id="company">{jobIs[0]?.company?.company_name}</td>
                        </tr>
                        <tr>
                            <th>Location:</th>
                            <td id="location">{jobIs[0]?.location}</td>
                        </tr>
                        <tr>
                            <th>Job Type:</th>
                            <td id="jobType">{jobIs[0]?.jobType}</td>
                        </tr>
                        <tr>
                            <th>Posted On:</th>
                            <td id="postedOn">{jobIs[0]?.postedOn?.split("T")[0]}</td>
                        </tr>
                        <tr>
                            <th>Application Deadline:</th>
                            <td id="applicationDeadline">{jobIs[0]?.applicationDeadline}</td>
                        </tr>
                        <tr>
                            <th>Job Description:</th>
                            <td id="jobDescription">{jobIs[0]?.jobDescription}</td>
                        </tr>
                        <tr>
                            <th>Requirements:</th>
                            <td id="requirements" className='text-white'>{jobIs[0]?.requirements?.split(",")?.map((e) => <p className='text-dark'>{e}</p>)}</td>
                        </tr>
                        <tr>
                            <th>Responsibilities:</th>
                            <td id="responsibilities">{jobIs[0]?.responsibilities?.split(",").map((e) => <p className='text-dark'>{e}</p>)}</td>
                        </tr>
                        <tr>
                            <th>Benefits:</th>
                            <td id="benefits">{jobIs[0]?.benefits}</td>
                        </tr>
                        <tr>
                            <th>Salary:</th>
                            <td id="salary">{jobIs[0]?.salary}</td>
                        </tr>
                    </tbody>
                </table>
                <h2>How to Apply ? : </h2>   <p>{jobIs[0]?.howToApply}</p>
                <button class="btn btn-primary" id="applyButton" onClick={() => {
                    handleApplyButton();
                }}  disabled={dis}> {apply}</button>
               
            </div>
        </>
    )
}

export default Fulljobdescription