import React, { useState, useEffect } from 'react'
import "../Style/application.css"
import axios from 'axios';
import Animere from 'animere'
import moment from 'moment';
function Applications({ setView }) {
    new Animere()
    const [job, setJob] = useState([]);
    useEffect(() => {
        // const cid = localStorage.getItem("user_id")
        // console.log(cid);
        // fetch("http://localhost:8000/jobs").then(e =>e.json()).then(e => console.log(e))
        axios.get(`http://localhost:8000/jobs`).then((res) => {
            setJob(res.data);
        }).catch(err => alert(err));
    }, [])
    const [all, setAll] = useState([]);
    useEffect(() => {
        const uid = localStorage.getItem("user_id");
        axios.get(`http://localhost:8000/allapplications/user/${uid}`).then(e => setAll(e.data))
        all.map((e) => {
            sessionStorage.setItem(e.jobid?._id, e.jobid?._id);
        })
    }, [job])

    return (
        <>
            <div class="app--main">
                <p className='app--title'>Discover Your Dream Job:</p>

                {job?.map((e) => {
                    return <>
                        <div class="app--inner" data-animere="zoomIn" data-animere-duration="1500ms">
                            <div class="app--head">
                                <div className='head--col'>
                                    <p class="job--title">{e.jobTitle}</p>
                                    <p><i class="fa  fa-location-pin"></i>{e.location}</p>
                                </div>
                                <div className='head--col'>
                                    <p class="job--date">Posted On : {moment(e.postedOn.split("T")[0], "YYYYMMDD").fromNow()}                                 </p>
                                    <p class="job--by">Posted By  :{e?.company?.company_name} </p>
                                    <p></p>
                                </div>
                            </div>
                            <div class="app--body">
                                <div className='app--col-1'>
                                    <h4>
                                        Minimum Requirements
                                    </h4>
                                    <ul>
                                        {
                                            e.requirements.split(",").map(e => {
                                                return <>
                                                    <li style={{ borderBottom: "1px solid black" }}>✤{e}</li>
                                                </>
                                            })

                                        }
                                    </ul>
                                </div>
                                <div className='app--col-2'>
                                    <h4>
                                        Description
                                    </h4>
                                    <p>{e.jobDescription}</p>
                                </div>
                            </div>
                            <div className='app--aria-btn'>
                                <button class="app--btnmore" onClick={() => {
                                    setView("Fulljobdescription"); localStorage.setItem("job", e._id);
                                }}>Learn more</button>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </>
    )
}

export default Applications