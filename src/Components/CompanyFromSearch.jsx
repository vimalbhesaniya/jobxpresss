import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import "../Style/company.css"
import CompanyDetailsFromSearch from './CompanyDetailsFromSearch';
import "../Style/prof.css"
import ProfileRightHome from './profileRightHome';
import JobsWhichPostBycompanyBySearch from './jobwhichpostedbycompnayInsearchPage';
function CompanyFromsearch() {
	const [profile, setProfile] = useState("");
	const [view, setView] = useState("home");
	const renderScreen = () => {
		switch (view) {
			case "details":
				return <CompanyDetailsFromSearch setView={setView} />
				break;
			case "home":
				return <ProfileRightHome />
				break;
			case "jobsbysearch":
				return <JobsWhichPostBycompanyBySearch setView={setView} />
				break;
		}
	}
	useEffect(() => {
		const cid = localStorage.getItem("isc_id")
		axios.get(`http://localhost:8000/company/id/${cid}`).then((res) => {
			setProfile(res.data);
		}).catch(err => alert(err));
	}, [])
	console.log(profile);

	const [details, setDetails] = useState([]);
	useEffect(() => {
		const cid = localStorage.getItem("isc_id")
		axios.get(`http://localhost:8000/company/details/${cid}`).then((res) => {
			setDetails(res.data);
		}).catch(err => alert(err));
	}, [])
	console.log(details);
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
						<button className='btn-positions btn----' onClick={() => setView("jobsbysearch")}>Available Positions.</button>
					</div>
				</div>
				<div className='c-right'>
					{renderScreen()}
				</div>
			</div>
		</>
	)
}

export default CompanyFromsearch