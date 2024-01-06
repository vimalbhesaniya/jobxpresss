import React from "react";
import "../Style/candidate.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function Candidateprofiles({ setView, cview }) {
	const [detail, setDetails] = useState([]);
	const isuser = sessionStorage.getItem("yes");
	useEffect(() => {
		const uid = sessionStorage.getItem("user");
		axios
			.get(`http://localhost:8000/seekers/id/${uid}`)
			.then((e) => setDetails(e.data));
	}, []);
	console.log(detail);
	const edu = detail[0]?.education[0].split(",");
	return (
		<>
			{detail.map((e) => {
				return (
					<div class="container---">
						<div
							className="signinnav--profile"
							onClick={() => {
								isuser ? setView("candidate") : setView("dashboard");
							}}
						>
							←
						</div>
						<div class="main-body">
							<div class="row gutters-sm">
								<div class="col-md-4 mb-3 card----center">
									<div class="card">
										<div class="card-body">
											<div class="d-flex flex-column align-items-center text-center">
												<img
													src="https://bootdey.com/img/Content/avatar/avatar7.png"
													alt="Admin"
													class="rounded-circle"
													width="150"
												/>
												<div class="mt-3 g-5 text-center">
													<h4>{e.name}</h4>
													<p class="text-secondary mb-1">{e.profession}</p>
													<p class="text-muted font-size-sm">{e.location}</p>
													{!isuser ? (
														<>
															<button class="btn btn-success">Accept</button>{" "}
															&nbsp;
															<button class="btn btn-danger">Reject</button>
														</>
													) : (
														""
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-8">
									<div class="card mb-3">
										<div class="card-body">
											<div class="row">
												<div class="col-sm-3">
													<h6 class="mb-0">Full Name</h6>
												</div>
												<div class="col-sm-9 text-secondary">{e.name}</div>
											</div>
											{/* <hr /> */}
											<div class="row">
												<div class="col-sm-3">
													<h6 class="mb-0">Email</h6>
												</div>
												<div class="col-sm-9 text-secondary">{e.email}</div>
											</div>
											{/* <hr /> */}
											<div class="row">
												<div class="col-sm-3">
													<h6 class="mb-0">Phone</h6>
												</div>
												<div class="col-sm-9 text-secondary">{e.phone}</div>
											</div>
											{/* <hr /> */}
											<div class="row">
												<div class="col-sm-3">
													<h6 class="mb-0">Mobile</h6>
												</div>
												<div class="col-sm-9 text-secondary">-</div>
											</div>
											{/* <hr /> */}
											<div class="row">
												<div class="col-sm-3">
													<h6 class="mb-0">Address</h6>
												</div>
												<div class="col-sm-9 text-secondary">{e.address}</div>
											</div>
											{/* <hr /> */}
										</div>
									</div>

									<div class="row gutters-sm">
										<div class="col-sm-6 mb-3">
											<div class="card h-100">
												<div class="card-body">
													<h6 class="d-flex align-items-center mb-3">
														Education Status
													</h6>
													<div>
														{edu.map((e) => (
															<p>{e}</p>
														))}
													</div>
												</div>
											</div>
										</div>
										<div class="col-sm-6 mb-3">
											<div class="card h-100">
												<div class="card-body">
													<h6 class="d-flex align-items-center mb-3">
														Experience Status
													</h6>
													<div>{e.experience}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default Candidateprofiles;
