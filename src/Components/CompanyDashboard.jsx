import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function CompanyDashboard({setView}) {
    const [users, setUsers] = useState([]);
    const getdata = () => {
        const cid = localStorage.getItem("c_id");
        // console.log(cid);
        axios.get(`http://localhost:8000/allapplications/company/${cid}`).then(e => setUsers(e.data));
    };
    useEffect(() =>{
        getdata();
    }, [])

    const putStatusaccept = async (id) => {
        const result = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'Accepted' })
        };
        await fetch(`http://localhost:8000/jobapplication/id/update/${id}`, result).then(e => alert("Application Accepted")).catch(e => alert(e));
        getdata();

    }
    const putStatusreject = async (id) => {
        const result = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'Rejected' })
        };
        await fetch(`http://localhost:8000/jobapplication/id/update/${id}`, result).then(e => alert("Application Rejected")).catch(e => alert(e));
        getdata();
    }
    const handleDelete = async (delid) =>{
        const result = {
            method: 'DELETE',
        };
     const res =    await fetch(`http://localhost:8000/delete/app/${delid}`, result).then(e => alert("Application Deleted")).catch(e => alert(e));
        alert("Application deleted...");
        getdata();

    }


    return (
        <>
            <div className='container-fluid ' >
                <div class="dashboard c-fluid" >
                    <table class="table table-bordered table-hover table-striped table-light table-responsive table-small-text">
                        <thead className='table-dark'>
                            <tr>
                                <th className='table-info'>Position</th>
                                <th>Name</th>
                                <th>Skills</th>
                                <th>Profession</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Approve</th>
                                <th>Reject</th>
                                <th>Details</th>
                                <th>Clear</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {users.map((e, i) => { 
                                return <tr>
                                    <td className='table-dark'>{e.jobid?.jobTitle}</td>
                                    <td>{e.uid?.name}</td>
                                    <td>{e.uid?.skills}</td>
                                    <td>{e.uid?.profession}</td>
                                    <td>{e.uid?.location}</td>
                                    <td className={e.status === "Accepted" ? "green" : e.status === "Pending" ? "blue" : "red" }>{e?.status}</td>
                                    <td className='Approve-reject-btn'>
                                        <button class="btn btn-success" onClick={() => {
                                            putStatusaccept(e._id)

                                        }} >Approve</button>
                                    </td>
                                    <td className='text-center'>
                                        <button class="btn btn-danger" onClick={() => {
                                            putStatusreject(e._id)
                                        }}>Reject</button>
                                    </td>
                                    <td className='text-center'>
                                        <button class="btn btn-primary" onClick={() => {
                                           sessionStorage.setItem("user" , e.uid._id);
                                            setView("candidateprofile")}}>View Details</button>
                                    </td>
                                    <td className='text-center'>
                                        <button class="btn btn-danger" onClick={() => handleDelete(e._id)}>&times;</button>
                                    </td>
                                </tr>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CompanyDashboard