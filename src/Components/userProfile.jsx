import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../Style/prof.css";
function UserProfile() {

	const [profile, setProfile] = useState([]);
	useEffect(() => {
		const userid = localStorage.getItem("user_id");
		// console.log(userid);
		axios
			.get(`http://localhost:8000/seekers/id/${userid}`)
			.then((res) => {
				setProfile(res.data);
			})
			.catch((err) => alert(err));
	}, []);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [location, setLocation] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	let [skills, setSkills] = useState("");
	let [experience, setExperience] = useState("");
	let [education, setEducation] = useState("");
	const [profession, setProfesion] = useState("1");





	//   setMyProfile();
	const edu = profile[0]?.education[0].split(",");
	const makeUpdate = async () => {
		const userid = localStorage.getItem("user_id");
		await fetch(`http://localhost:8000/seekers/id/update/${userid}`, {
			method: "put",
			body: JSON.stringify({
				name,
				email,
				phone,
				address,
				skills,
				experience,
				education,
				profession,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(e => console.log(e)).catch(e => alert(e));
		setAddress("");
		setEducation("");
		setEmail("");
		setExperience("");
		setName("");
		setPhone("");
		setSkills("");
		setSkills("");
	};

	return (
		<>
			{profile.map((e) => {
				return (
					<div class="container---">
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
													<h4 style={{ fontSize: "25px", textAlign: "center" }}>
														{e.name}
													</h4>
													<p
														class="text-secondary mb-1 "
														style={{ fontSize: "15px", textAlign: "center" }}
													>
														{e.profession}
													</p>
													<p class="text-muted font-size-sm text-center">
														<i className="fa fa-location-pin text-center"></i>{" "}
														{e.location}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="container p-0  text-center">
										<div className="row">
											<div className="col p-2 ">
												<button
													type="button"
													className="btn btn-primary"
													data-toggle="modal"
													data-target="#editProfileModal"
												>
													Edit Profile
												</button>
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

			<div
				className="modal fade"
				id="editProfileModal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="editProfileModalLabel"
				aria-hidden="true">
				
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="editProfileModalLabel">
								Edit Profile
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{/* Profile fields */}
							<form>
								{/* Education */}
								<div className="form-group">
									<label htmlFor="education">Education</label>
									<input
										onChange={(e) => setEducation(e.target.value)}
										type="text"
										// value={education}
										className="form-control"
										id="education"
										placeholder="Your education"
									/>
								</div>

								{/* Experience */}
								<div className="form-group">
									<label htmlFor="experience">Experience</label>
									<input
										type="text"
										className="form-control"
										id="experience"
										placeholder="Your experience"
										// value={experience}
										onChange={(e) => setExperience(e.target.value)}
									/>
								</div>

								{/* Address */}
								<div className="form-group">
									<label htmlFor="address">Address</label>
									<input
										type="text"
										// value={address}
										onChange={(e) => setAddress(e.target.value)}
										className="form-control"
										id="address"
										placeholder="Your address"
									/>
								</div>

								{/* Location */}
								<div className="form-group">
									<label htmlFor="location">Location</label>
									<input
										type="text"
										// value={location}
										onChange={(e) => setLocation(e.target.value)}
										className="form-control"
										id="location"
										placeholder="Your location"
									/>
								</div>

								{/* Phone */}
								<div className="form-group">
									<label htmlFor="phone">Phone</label>
									<input
										type="tel"
										onChange={(e) => setPhone(e.target.value)}
										className="form-control"
										id="phone"
										// value={phone}
										placeholder="Your phone number"
									/>
								</div>
								{/* Email */}
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										onChange={(e) => setEmail(e.target.value)}
										className="form-control"
										id="email"
										// value={email}
										placeholder="Your email"
									/>
								</div>

								{/* Name */}
								<div className="form-group">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										onChange={(e) => setName(e.target.value)}
										className="form-control"
										id="name"
										// value={name}
										placeholder="Your name"
									/>
								</div>

								{/* Skills */}
								<div className="form-group">
									<label htmlFor="skills">Skills</label>
									<input
										type="text"
										className="form-control"
										onChange={(e) => setSkills(e.target.value)}
										id="skills"
										placeholder="Your skills(,)"
									/>
								</div>

								{/* Profession */}
								<div className="form-group">
									<label htmlFor="profession">Profession</label>
									<select id="profession" name="profession" className="form-control" value={profession} onChange={e => setProfesion(e.target.value)}>
										<option value="1">Select Your Profession:</option>
										<option value="software developer">Software Developer</option>
										<option value="nurse">Nurse</option>
										<option value="marketing manager">Marketing Manager</option>
										<option value="sales representative">Sales Representative</option>
										<option value="graphic designer">Graphic Designer</option>
										<option value="truck driver">Truck Driver</option>
										<option value="web_developer">Web Developer</option>
										<option value="receptionist">Receptionist</option>
										<option value="social worker">Social Worker (Non-Profit)</option>
										<option value="architect">Architect</option>
										<option value="teacher">Teacher</option>
										<option value="doctor">Doctor</option>
										<option value="accountant">Accountant</option>
										<option value="data_analyst">Data Analyst</option>
										<option value="mechanic">Mechanic</option>
										<option value="chef">Chef</option>
										<option value="lawyer">Lawyer</option>
										<option value="writer">Writer</option>
										<option value="photographer">Photographer</option>
										<option value="engineer">Engineer</option>
										<option value="scientist">Scientist</option>
										<option value="musician">Musician</option>
										<option value="athlete">Athlete</option>
										<option value="therapist">Therapist</option>
										<option value="designer">Designer</option>
										<option value="consultant">Consultant</option>
									</select>

								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => makeUpdate()}
							>
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserProfile;
