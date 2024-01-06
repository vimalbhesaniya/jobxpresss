import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import "../Style/company.css"
import Details from './Details';
import { TextField } from '@mui/material';
import "../Style/prof.css"
import CompanyDetailsForm from './CompanyDetailsForm';
import PostAJob from './PostAJob';
import ProfileRightHome from './profileRightHome';
import JobsWhichPostBycompany from './JobsWhichPostBycompany';
function CompanyProfile() {
	const [profile, setProfile] = useState("");
	const [view, setView] = useState("home");
	const renderScreen = () => {
		switch (view) {
			case "details":
				return <Details setView={setView} view={view} />
				break;
			case "formdetails":
				return <CompanyDetailsForm />
				break;
			case "postjob":
				return <PostAJob />
				break;
			case "home":
				return <ProfileRightHome />
				break;
			case "jobfromcompany":
				return <JobsWhichPostBycompany />
				break;

		}
	}
	useEffect(() => {
		const cid = localStorage.getItem("c_id")
		console.log(cid);
		axios.get(`http://localhost:8000/company/id/${cid}`).then((res) => {
			setProfile(res.data);
		}).catch(err => alert(err));
	}, [])
	console.log(profile);

	const [details, setDetails] = useState("");
	useEffect(() => {
		const cid = localStorage.getItem("c_id")
		axios.get(`http://localhost:8000/company/details/${cid}`).then((res) => {
			setDetails(res.data);
		}).catch(err => alert(err));
	}, [])
	// const name = profile ? profile[0].company_name.split(" ") : ""
	return (
		<>
			<div className='company--main'>
				<div className='c-left'>
					<div className='c-profilesection'>{profile ? profile[0]?.company_name : "loading..."}</div>
					<div className='c-table'>
						<div className='c-table-col'>
							<h2 style={{ textAlign: "center" }}>{profile ? profile[0].company_name : "loading.."}</h2>
						</div>
					</div>
					<div className='c-table'>
						<div className='c-table-lable-col'>
							<h3 className='c-lable'>Industry</h3>
						</div>
						<div className='c-table-col'>
							{profile ? profile[0].industry : "loading.."}
						</div>
					</div>
					<div className='c-table'>
						<div className='c-table-lable-col'>
							<h3 className='c-lable'>Location</h3>
						</div>
						<div className='c-table-col'>
							{profile ? profile[0].location : "loading.."}
						</div>
					</div>
					<div className='c-table'>
						<div className='c-table-lable-col'>
							<h3 className='c-lable'>Email</h3>
						</div>
						<div className='c-table-col'>
							{profile ? profile[0].email : "loading.."}
						</div>
					</div>
					<div className='c-table'>
						<div className='c-table-lable-col'>
							<h3 className='c-lable'>phone</h3>
						</div>
						<div className='c-table-col'>
							{profile ? profile[0].contact_phone : "loading.."}
						</div>
					</div>
					<div className='c-table-unborderd'>
						<button className='c-v-more btn----' onClick={() => setView("details")}>View More</button>
						{details.length == 0 ? <button className='c-d-more btn----' onClick={() => setView("formdetails")}>Add more details</button> : ""}
						<button className='btn-positions btn----' onClick={() => setView("jobfromcompany")}>Available Positions.</button>
					</div>
					<div className='c-hire'>
						<button className='btn-hire btn----' onClick={() => setView("postjob")}>Hire now</button>
					</div>
				</div>
				<div className='c-right'>
					{renderScreen()}
				</div>
			</div>
		</>
	)
}

export default CompanyProfile