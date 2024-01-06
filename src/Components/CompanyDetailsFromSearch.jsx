import React, { useEffect, useState } from 'react'
import "../Style/details.css"
import axios from 'axios';
function CompanyDetailsFromSearch({ setView }) {
    const [aboutus, setaboutus] = useState();
    const [mission, setmission] = useState();
    const [whyworkwithus, setWhyworkwithus] = useState();
    const [established_year, setEstablished_year] = useState();
    const [currentopenings, setCurrentopenings] = useState();
    const [website, setWebsite] = useState();
    let [social_media_links, setSocial_media_links] = useState();
    const [details, setDetails] = useState();
    useEffect(() => {
        const cid = localStorage.getItem("isc_id")
        axios.get(`http://localhost:8000/company/details/${cid}`).then((res) => {
            setDetails(res.data);
        }).catch(err => alert(err));
    }, [])
    console.log();
    return (
        <>
            <div className='details--main animate__animated animate__bounceInLeft'>
                {details?.length != 0 ? <div className='hide-show'>
                    <div class="container-fluid mt-5">
                        <h2>Othre details</h2>
                        <table class="table table-bordered  table-responsive-md">
                            <tbody>
                                <tr>
                                    <th>About us</th>
                                    <td>{details ? details[0]?.aboutus : ""}</td>

                                </tr>
                                <tr>
                                    <th>Mission</th>
                                    <td>{details ? details[0]?.mission : ""}</td>

                                </tr>
                                <tr>
                                    <th>Why Work With Us</th>
                                    <td>{details ? details[0]?.whyworkwithus : ""}</td>

                                </tr>
                                <tr>
                                    <th>Current Openings</th>
                                    <td>{details ? details[0]?.currentopenings : ""}</td>

                                </tr>
                                <tr>
                                    <th>Contact Us</th>
                                    <td>
                                        <ul style={{ display: "flex" }}>
                                            <li>Established Year: {details ? details[0]?.established_year : ""}</li>
                                            <li>Website: <a href="https://www.example.com" target="_blank">{details ? details[0]?.website : ""}</a></li>
                                            <li>Social Media Links:
                                                <ul>
                                                    {details ? details[0]?.social_media_links.map((e) => {
                                                        return <li><a href={e} target="_blank">{e}</a></li>
                                                    }) : ""}
                                                </ul>
                                            </li>
                                            <li></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='signinnav-details' onClick={() => { setView("home") }}>←</div>
                </div> :
                    <>
                        <div>
                            <h1>No Details Found</h1>
                        </div>
                    </>

                }
            </div>
        </>
    )
}

export default CompanyDetailsFromSearch