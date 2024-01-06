import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import Policy from "./Policy";
// import { set } from "mongoose";
function CompanySignup({ setScreen }) {
    const id = new Date().getUTCMilliseconds();
    const [error, setErrors] = useState("");
    const [code, setCode] = useState("");
    const [company_name, setCompany_name] = useState("");
    const [email, setContact_email] = useState('');
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    const [contact_phone, setContact_phone] = useState('');
    const [website, setWebsite] = useState('');
    let [industry, setIndustry] = useState("");
    const handleOnSubmit = async (e) => {

        let result = await fetch(
            'http://localhost:8000/company', {
            method: "post",
            body: JSON.stringify({ id, company_name, email, password, contact_phone, location, industry }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result.json().then(e => { setErrors(e.errors); setCode(e.code); }).catch(e => console.log(e))
        if (code == 11000) {
            alert("Email is already Exist")
        }
        console.log(error);
        if (error == undefined && code == undefined) {
            clearFields();
        }
    }
    const clearFields = () => {
        alert("Thank you's for Registration")
        setCode("")
        setCompany_name("")
        setContact_email("")
        setContact_phone("")
        setErrors("")
        setLocation("")
        setIndustry("")
        setPassword("")
        setScreen("CompanyLogin")

    };

    return (
        <>

            <nav className="Title-name">
                <h1 className='Logo'>job<span className='X_css'>X</span>press</h1>
            </nav>
            <div className="form-main animate__animated animate__headShake">
                <h3 className="typing-demo4 ">Join with us</h3>
                <h2 style={{ fontSize: "4vh", marginBottom: "10px" }}><b>Register Your Company</b></h2>
                <section className="formsign">
                    <div className="flex-column">
                        <div className='er'>{error?.company_name?.kind}</div>
                        <label>Company Name</label></div>
                    <div className="inputForm">
                        <TextField id="standard-basic" onChange={(e) => setCompany_name(e.target.value)} style={{ width: "100%" }} label="Company Name*" value={company_name} variant="standard" />
                    </div>
                    <div className="flex-column">
                        <div className='er' style={{ fontSize: "10px", width: "100" }}>{error?.email?.message}</div>
                        <label>Email</label></div>
                    <div className="inputForm">
                        <TextField id="standard-basic"
                            style={{ width: "100%" }}
                            value={email}
                            onChange={(e) => setContact_email(e.target.value)}
                            label="Email*" variant="standard" />
                    </div>
                    <div className="flex-column">
                        <div className='er'>{error?.password?.message}</div>
                        <label>Password</label></div>
                    <div className="inputForm">
                        <TextField type="password" id="standard-basic"
                            style={{ width: "100%" }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password*" variant="standard" />
                    </div>
                    <div className="flex-column">
                        <div className='er'>{error?.contact_phone?.message}</div>
                        <label>Phone </label></div>
                    <div className="inputForm">
                        <TextField id="standard-basic"
                            style={{ width: "100%" }}
                            value={contact_phone}
                            onChange={(e) => setContact_phone(e.target.value)}
                            label="Phone*" variant="standard" />
                    </div>
                    <div className="flex-column">
                        <div className='er'>{error?.industry?.kind}</div>
                        <label>Industry</label></div>
                    <div className="inputForm">
                        <select id="standard-basic"
                            style={{ width: "100%" }}
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            label="Education*" variant="standard" >
                            <option value="1">select industry</option>
                            <option value="it">Information Technology</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="finance">Finance</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="education">Education</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="retail">Retail</option>
                            <option value="agriculture">Agriculture</option>
                            <option value="aviation">Aviation</option>
                            <option value="biotechnology">Biotechnology</option>
                            <option value="chemical">Chemical</option>
                            <option value="e-commerce">E-commerce</option>
                            <option value="insurance">Insurance</option>
                            <option value="mining">Mining</option>
                            <option value="printing">Printing & Publishing</option>
                            <option value="software">Software Development</option>
                            <option value="textile">Textile & Apparel</option>
                            <option value="tourism">Tourism</option>
                            <option value="wholesale">Wholesale & Distribution</option>
                            <option value="gaming">Gaming</option>
                            <option value="fitness">Fitness & Wellness</option>
                            <option value="interior-design">Interior Design</option>
                            <option value="logistics">Logistics & Supply Chain</option>
                            <option value="maritime">Maritime & Shipping</option>
                            <option value="renewable-energy">Renewable Energy</option>
                            <option value="robotics">Robotics & Automation</option>
                            <option value="space">Space & Aerospace</option>
                            <option value="wine">Wine & Spirits</option>
                            <option value="cosmetics">Cosmetics & Beauty</option>
                            <option value="hospitality">Hospitality</option>
                            <option value="automotive">Automotive</option>
                            <option value="telecommunications">Telecommunications</option>
                            <option value="energy">Energy</option>
                            <option value="construction">Construction</option>
                            <option value="fashion">Fashion</option>
                            <option value="food">Food & Beverage</option>
                            <option value="travel">Travel & Hospitality</option>
                            <option value="real-estate">Real Estate</option>
                            <option value="environment">Environmental Services</option>
                            <option value="media">Media & Communications</option>
                            <option value="pharmaceutical">Pharmaceutical</option>
                            <option value="sports">Sports & Recreation</option>
                            <option value="transportation">Transportation</option>
                            <option value="nonprofit">Nonprofit & Social Services</option>
                            <option value="government">Government & Public Administration</option>
                            <option value="consulting">Consulting</option>
                            <option value="marketing">Marketing & Advertising</option>
                            <option value="law">Legal Services</option>
                            <option value="engineering">Engineering</option>
                            <option value="architecture">Architecture</option>
                            <option value="music">Music</option>
                        </select>
                    </div>
                    <div className="flex-column">
                        <div className='er'>{error?.location?.message}</div>
                        <label>Location</label></div>
                    <div className="inputForm">
                        <TextField id="standard-basic"
                            style={{ width: "100%" }}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            label="location*" variant="standard" />

                    </div>
                    <button className="button-submit" onClick={() => handleOnSubmit()}>Sign Up</button>
                    <p className="pp">already have an account? <span className="span" onClick={() => { setScreen("Login") }}>Sign In</span></p>
                </section>
            </div>
            {/* footer */}
            <footer>
                <div className="Footerlog">
                    <h4 className=''>jobXpress <small>©2023</small>  </h4>
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

export default CompanySignup;
