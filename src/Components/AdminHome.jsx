import axios from "axios";
import React from "react";
import "../Style/adminhome.css"
import { useState, useEffect } from "react";
import CountUp from 'react-countup';
function AdminHome() {
	const [users, setUsers] = useState([]);
	const [company, setCompany] = useState([]);
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/seekers").then((e) => setUsers(e.data)).catch((e) => alert(e));
	}, []);
	useEffect(() => {
		axios.get("http://localhost:8000/company").then((e) => setCompany(e.data)).catch((e) => console.log(e));
	}, []);
	useEffect(() => {
		axios.get("http://localhost:8000/jobs").then((e) => setJobs(e.data)).catch((e) => console.log(e));
	}, []);
	return (
		<>
			<h2 className="admin---title">Admin Dashboard</h2>
			<div className="container  ">
				<div className="row">
					<div className="col-md-3 col-sm-6">
						<div className="counter">
							<div className="counter-content">
								<div className="counter-icon">
									<i className="fa  fa-users fa-1x" />
								</div>
								<h3>Registered Seekers</h3>
							</div>
							<span className="counter-value "><CountUp
								end={users.length}
								duration={3}
							/></span>
						</div>
					</div>
					<div className="col-md-3 col-sm-6">
						<div className="counter purple">
							<div className="counter-content">
								<div className="counter-icon">
									<i className="fa  fa-industry fa-1x" />
								</div>
								<h3>Registered Companies</h3>
							</div>
							<span className="counter-value"><CountUp
								end={company.length}
								duration={3}
							/></span>
						</div>
					</div>
					<div className="col-md-3 col-sm-6">
						<div className="counter red---count">
							<div className="counter-content">
								<div className="counter-icon">
									<i className="fa  fa-graduation-cap  fa-1x" />
								</div>
								<h3>Posted Jobs By Companies</h3>
							</div>
							<span className="counter-value"><CountUp
								end={jobs.length}
								duration={3}
							/></span>
						</div>
					</div>

				</div>
			</div>
		</>
	);
}

export default AdminHome;
