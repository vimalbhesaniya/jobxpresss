import React, { useEffect, useState } from 'react'
import "../Style/about.css"
import axios from 'axios';
function AllUsers({ setView }) {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/seekers").then(e => setProfile(e.data));
    }, [])

    return (
        <>
            <section class="vh-100" style={{ backgroundColor: "#f4f5f7;" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center  align-items-center h-100">
                        <div class="col col-lg-12 mb-4 mb-lg-0">
                            {profile.map((e) => {
                                return <div class="card w-100 mb-3" style={{ borderRadius: "5rem;", background: "transparent" }}>
                                    <div class="row g-0">
                                        <div class="col-4 gradient-custom text-center text-white"
                                            style={{ borderTopLeftRadius: "5rem", borderBottomLeftRadius: "5rem" }}>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                alt="Avatar" class="img-fluid my-5" style={{ width: "80px;" }} />
                                            <h1 className='text-white'>{e.name}</h1>
                                            <p className='text-center'>{e.profession}</p>

                                            <button class="mb-5 btn btn-outline-light" onClick={() => {
                                                sessionStorage.setItem("yes", "yes");
                                                sessionStorage.setItem("user", e._id);
                                                setView("candidateprofile")
                                            }}>Visit profile</button>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body p-4">
                                                <h6>Information</h6>
                                                <hr class="mt-0 mb-4" />
                                                <div class="row pt-1">
                                                    <div class="col-12 mb-3">
                                                        <h6>Email</h6>
                                                        <p class="">{e.email}</p>
                                                    </div>
                                                    <div class="col-12 mb-3">
                                                        <h6>Phone</h6>
                                                        <p class="text-muted">{e.phone}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllUsers