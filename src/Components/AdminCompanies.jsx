import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Animere from "animere";
function AdminCompanies() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        new Animere();
    })
    useEffect(() => {
        axios.get("http://localhost:8000/company").then((e) => setUsers(e.data));
    }, []);
    const search = (e) => {
        if (e) {
            axios
                .get(`http://localhost:8000/search/admin/company/${e}`)
                .then((e) => setUsers(e.data))
                .catch((e) => console.error(e));
        } else {
            axios.get("http://localhost:8000/company").then((e) => setUsers(e.data));
        }
    };

    const handleDelete = (e) => {
        axios.delete(`http://localhost:8000/delete/company/${e}`).then((e) => {
            alert("Company Deleted...");
            setUsers(e.data);
        });
    };
    return (
        <>
            <div className="container p-0 text-white ">
                <div className="row">
                    <div className="col-12">
                        <div className="card---ad">
                            <div className="card-body---ad text-center">
                                <h2 className="admin---title m-b-0">Employers</h2>
                                <div className="d-flex">
                                    <h4 className="text-dark">{users.length} Results Found...</h4>
                                    <input
                                        type="text"
                                        className="btn btn-light"
                                        onChange={(e) => search(e.target.value)}
                                        placeholder="Type to search..."
                                    />
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table bg-c-c">
                                    <thead className="bg-light  ">
                                        <tr className="text-uppercase">
                                            <th scope="col">_id</th>
                                            <th scope="col">Company Name</th>
                                            <th scope="col">Industry</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone No.</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="customtable">
                                        {users.map((e) => {
                                            return (
                                                <tr className="text-dark" data-animere="fadeIn">
                                                    <td className="font-weight-bold "><p>{e._id}</p></td>
                                                    <td>{e.company_name}</td>
                                                    <td>{e.industry}</td>
                                                    <td>{e.email}</td>
                                                    <td>{e.contact_phone}</td>
                                                    <td>{e.location}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => handleDelete(e._id)}
                                                        >
                                                            &times;
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminCompanies;
