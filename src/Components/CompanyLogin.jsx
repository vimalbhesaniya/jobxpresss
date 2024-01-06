import React, { useState } from "react";
import Loader from "../Components/Loader"
import { TextField } from "@mui/material";
function CompanyLogin({ setScreen }) {
	const who = localStorage.getItem("whologed");
	if (who == "company") {
		setScreen("CompanyLogin");
	}
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const handlesubmit = async (e) => {
		if (username == "" && password == "") {
			alert("You must have to provide Username and Password")
		}
		else {
			let result = await fetch(
				'http://localhost:8000/loginAsCompany', {
				method: "post",
				body: JSON.stringify({ username, password }),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then((res) => res.json()).then(async (res) => {
				// console.log(res);
				if (res.error) {
					setError(res.error);
				}
				if (res.message) {
					localStorage.setItem("c_id", res.message);
					setScreen("loader")
					setTimeout(() => {
						setScreen("CompanyHomepage");
					}, 3000);
				}
				else {
					setUsername("");
					setPassword("");
				}

			}).catch((err) => console.log(err))
		}
	}
	return (
		<>
			<nav className="Title-name">
				<h1 className='Logo'>job<span className='X_css'>X</span>press</h1>
				<div className='signinnav' onClick={() => {
					localStorage.clear(); setScreen("Who")
				}}>←</div>
			</nav>
			<div className="form-main animate__animated animate__headShake">
				<h1 style={{ fontSize: "4vh" }}>Login as Company</h1>
				<section className="form">
					<div className="flex-column">
						<label>Email</label></div>
					<div className="inputForm">
						<TextField id="standard-basic" value={username} onChange={e => setUsername(e.target.value)} style={{ width: "400px" }} label="Email" variant="standard" />
					</div>
					<div className="flex-column">
						<label>Password </label></div>
					<div className="inputForm">
						<TextField id="standard-basic"
							value={password}
							style={{ width: "400px" }}
							type="password"
							label="Password" variant="standard"
							onChange={e => setPassword(e.target.value)} />
					</div>

					<div className="flex-row">
						<span className="span">Forgot password?</span>
						<p style={{ color: "red" }}>{error}</p>
					</div>
					<div className="flex-row">
						<button className="button-submit" onClick={() => handlesubmit()}>Find a Job!</button>
					</div>
					<p className="pp">Don't have an account? <span className="span" onClick={() => { setScreen("CompanySignup") }}>Sign Up</span></p>
				</section>
			</div>
			{/* footer */}
			<footer>
				<div className="Footerlog">
					<h4 className='webtitle'>jobXpress <small>©2023</small></h4>
					<p className="p_decorate">User Agreement</p>
					<p className="p_decorate">Privacy Policy</p>
					<p className="p_decorate">Community Guidelines</p>
					<p className="p_decorate">Cookie Policy</p>
					<p className="p_decorate">Copyright Policy</p>
					<p className="p_decorate">Send Feedback</p>
				</div>
			</footer>
		</>
	);
}

export default CompanyLogin;
