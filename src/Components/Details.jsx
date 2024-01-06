import React, { useEffect, useState } from 'react'
import "../Style/details.css"
import axios from 'axios';
function Details({ setView }) {
    const [aboutus, setaboutus] = useState();
    const [mission, setmission] = useState();
    const [whyworkwithus, setWhyworkwithus] = useState();
    const [established_year, setEstablished_year] = useState();
    const [currentopenings, setCurrentopenings] = useState();
    const [website, setWebsite] = useState();
    let [social_media_links, setSocial_media_links] = useState();
    const [details, setDetails] = useState();
    useEffect(() => {
        const cid = localStorage.getItem("c_id")
        console.log(cid);
        axios.get(`http://localhost:8000/company/details/${cid}`).then((res) => {
            setDetails(res.data);
        }).catch(err => alert(err));
    }, [])

    const makeUpdate = async () => {
        social_media_links = social_media_links?.split(",");
        const upid = details[0]?._id;
        await fetch(
            `http://localhost:8000/company/details/update/${upid}`, {
            method: "put",
            body: JSON.stringify({ mission, aboutus, established_year, currentopenings, website, social_media_links, whyworkwithus }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        alert("update successfully")
    }
    console.log();
    return (
        <>
            <div className='details--main animate__animated animate__bounceInLeft'>
                {details?.length != 0 ? <div className='hide-show'>
                    <div class="container-fluid mt-5">
                        <h2>Othere details</h2>
                        <table class="table table-bordered  table-responsive-md">
                            <tbody>
                                <tr>
                                    <th>About us</th>
                                    <td>{details ? details[0]?.aboutus : ""}</td>
                                    <td><button class="btn btn-primary" data-toggle="modal" data-target="#editaboutusModal1" >Edit</button></td>
                                </tr>
                                <tr>
                                    <th>Mission</th>
                                    <td>{details ? details[0]?.mission : ""}</td>
                                    <td><button class="btn btn-primary" data-toggle="modal" data-target="#editMissionModal1" >Edit</button></td>
                                </tr>
                                <tr>
                                    <th>Why Work With Us</th>
                                    <td>{details ? details[0]?.whyworkwithus : ""}</td>
                                    <td><button class="btn btn-primary" data-toggle="modal" data-target="#editWhyWorkModal1" >Edit</button></td>
                                </tr>
                                <tr>
                                    <th>Current Openings</th>
                                    <td>{details ? details[0]?.currentopenings : ""}</td>
                                    <td><button class="btn btn-primary" data-toggle="modal" data-target="#editOpeningsModal1" >Edit</button></td>
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
                                    <td><button class="btn btn-primary" data-toggle="modal" data-target="#editsocialmedia1" >Edit</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='signinnav-details' onClick={() => { setView("home") }}>←</div>

                    <div class="modal fade" id="editMissionModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                </div>
                                <div class="modal-body">
                                    <input type="text" class="form-control" value={mission} onChange={(e) => setmission(e.target.value)} placeholder="Enter your Mission" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={() => makeUpdate()}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="editaboutusModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                </div>
                                <div class="modal-body">
                                    <input type="text" class="form-control" value={aboutus} onChange={(e) => setaboutus(e.target.value)} placeholder="Enter your About us " />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={() => makeUpdate()}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="editWhyWorkModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                </div>
                                <div class="modal-body">
                                    <input type="text" class="form-control" value={whyworkwithus} onChange={(e) => setWhyworkwithus(e.target.value)} placeholder="Enter your Why work with us" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={() => makeUpdate()}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="editOpeningsModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                </div>
                                <div class="modal-body">
                                    <input type="text" class="form-control" value={currentopenings} onChange={(e) => setCurrentopenings(e.target.value)} placeholder="Enter your Openings" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={() => makeUpdate()}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="editsocialmedia1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                </div>
                                <div class="modal-body">
                                    <input type="text" class="form-control" value={established_year} onChange={(e) => setEstablished_year(e.target.value)} placeholder="Enter your Established year" /><br />
                                    <input type="text" class="form-control" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Enter your Website" /><br />
                                    <input type="text" class="form-control" value={social_media_links} onChange={(e) => setSocial_media_links(e.target.value)} placeholder="Enter your Social media links" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={() => makeUpdate()}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                    <>
                        <div>
                            <h1>No Details Found</h1>
                            <button className='mui-btn' onClick={() => setView("formdetails")}>Add details</button>
                        </div>
                    </>

                }
            </div>
        </>
    )
}

export default Details