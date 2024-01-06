import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Animere from "animere";
function AdminUsers({ setView }) {
	const [users, setUsers] = useState([]);
	useEffect(() => {

		new Animere();
	})
	useEffect(() => {
		axios.get("http://localhost:8000/seekers").then((e) => setUsers(e.data));

	}, []);
	const search = (e) => {

		if (e) {
			axios.get(`http://localhost:8000/search/admin/user/${e}`).then(e => setUsers(e.data)).catch(e => console.error(e))
		}
		else {
			axios.get("http://localhost:8000/seekers").then((e) => setUsers(e.data));

		}
	}

	const handleDelete = (e) => {
		axios.delete(`http://localhost:8000/delete/seekers/${e}`).then((e) => {
			alert("User Deleted...");
			setUsers(e.data);
		});

	}
	return (
		<>
			<div className="container p-0 text-white ">
				<div className="row">
					<div className="col-12">
						<div className="card---ad">
							<div className="card-body---ad text-center">
								<h2 className="admin---title m-b-0">Job Seekers</h2>
								<div className="d-flex gap-3">
									<h4 className="text-dark">{users.length} Results Found...</h4>
									<input type="text" className="btn btn-light" onChange={(e) => search(e.target.value)} placeholder="Type to search..." />
								</div>
							</div>
							<div className="table-responsive">
								<table className="table bg----">
									<thead className="bg-light ">
										<tr className="text-uppercase ">
											<th scope="col">_id</th>
											<th scope="col">Name</th>
											<th scope="col">Profession</th>
											<th scope="col">Phone</th>
											<th scope="col">Email</th>
											<th scope="col">Location</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody className="customtable "  >
										{users.map((e) => {
											return <tr className="text-dark" data-animere="fadeIn">
												<td ><p className="text-dark">{e._id}</p></td>
												<td>{e.name}</td>
												<td>{e.profession}</td>
												<td>{e.phone}</td>
												<td>{e.email}</td>
												<td>{e.location}</td>
												<td><button className="btn btn-danger" onClick={() => handleDelete(e._id)}>&times;</button></td>
											</tr>;
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

export default AdminUsers;
