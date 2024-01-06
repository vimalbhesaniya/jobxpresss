import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
function SignUp({ setScreen }) {
    const id = new Date().getUTCMilliseconds();
    // console.log(id);
    const [error, setErrors] = useState("");
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    let [skills, setSkills] = useState("");
    let [experience, setExperience] = useState("Job Title:[Title],Companyname:[Companyname],Duration:[Date-EndDate]");
    let [education, setEducation] = useState("Degree Earned:[Degree Name],Institution: [Name of University/College],Location: [City, State],Date: [Month, Year] - [Month, Year],GPA: [Your GPA]");
    const [profession, setProfesion] = useState('1');
    const handleOnSubmit = async (e) => {
        // alert("clicked")
        let array = skills?.split(',')
        skills = array;
        let edu = education?.split(',');
        education = edu;
        let ex = experience?.split(',');
        experience = ex;
        console.log(array);
        let result = await fetch(
            'http://localhost:8000/seekers', {
            method: "post",
            body: JSON.stringify({ id, name, email, password, phone, address, skills, experience, education, profession, location }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result.json().then(e => { setErrors(e.errors); setCode(e.code); }).catch(e => console.log(e))
        if (code == 11000) {
            alert("Email is already Exist")
        }
        if (error != "" && code != "") {
            alert("Registration Success Fully")
            setCode("");
            setName('');
            setEmail('');
            setPassword('');
            setPhone('');
            setAddress('');
            setSkills('');
            setExperience("Job Title:[Title],Companyname:[Companyname],Duration:[Date-EndDate]");
            setEducation("Degree Earned:[Degree Name],Institution: [Name of University/College],Location: [City, State],Date: [Month, Year] - [Month, Year],GPA: [Your GPA]");
            setProfesion('1');
        }
    }

    return (
        <>
            <nav className="Title-name">
                <h1 className='Logo'>job<span className='X_css'>X</span>press</h1>
            </nav>
            <div className="form-main animate__animated animate__headShake">
                <h2 style={{ fontSize: "4vh", marginBottom: "10px" }}><b> Job Seeker Registration Page </b></h2>
                <section className="formsign mt-5">
                    <div className="flex-column">
                        <div className='er'>{error?.name?.kind}</div>
                        <label>Full Name</label></div>
                    <div className="inputForm">
                        <TextField id="standard-basic" onChange={(e) => setName(e.target.value)} style={{ width: "100%" }} label="Full Name*" value={name} variant="standard" />
                    </div>
                    <div className="flex-column">
                        <div className='er' style={{ fontSize: "10px", width: "100" }}>{error?.email?.message}</div>
                        <label>Email </label></div>
                    <div className="inputForm">
                        <TextField id="standard-basic"
                            style={{ width: "100%" }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        <div className='er'>{error?.phone?.message}</div>
                        <label>Phone </label></div>
                    <div className="inputForm">
                        <TextField id="standard-basic"
                            style={{ width: "100%" }}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            label="Phone*" variant="standard" />
                    </div>
                    <div className="flex-column">
                        <div className='er'>{error?.address?.kind}</div>
                        <label>Address</label></div>
                    <div className="inputForm">
                        <TextField id="standard-basic"
                            style={{ width: "100%" }}
                            value={address}
                            type="address"
                            onChange={(e) => setAddress(e.target.value)}
                            label="Address*" variant="standard" />
                    </div>
                    <div className="flex-column">
                        <div className='er'>{error?.skills?.message}</div>
                        <label>Skills </label></div>
                    <div className="inputForm">
                        <TextField id="standard-basic"
                            style={{ width: "100%" }}
                            value={skills}
                            placeholder="skill1,skill2,skill3"
                            onChange={(e) => setSkills(e.target.value)}
                            label="Skills*" variant="standard" />
                    </div>
                    <div className="flex-column">
                        <div className='er'>{error?.experience?.kind}</div>
                        <label>Experience</label></div>
                    <div className="inputForm">
                        <TextField id="standard-basic"
                            style={{ width: "100%" }}
                            placeholder="Job Title:[Title],Companyname:[Companyname],Duration:[Date-EndDate]"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            label="Experience*" variant="standard" />
                    </div>
                    <div className="flex-column">
                        <div className='er'>{error?.education?.kind}</div>
                        <label>Education</label></div>
                    <div className="inputForm">
                        <TextField id="standard-basic"
                            style={{ width: "100%" }}
                            placeholder="Degree Earned:[Degree Name],Institution: [Name of University/College],Location: [City, State],Date: [Month, Year] - [Month, Year],GPA: [Your GPA]"
                            value={education}
                            onChange={(e) => setEducation(e.target.value)}
                            label="Education*" variant="standard" />

                    </div>
                    <div className="flex-column">
                        <div className='er'>{error?.profession?.message}</div>
                        <label>Profession </label></div>
                    <div className="inputForm">
                        <select id="profession" name="profession" value={profession} className='inputField' onChange={e => setProfesion(e.target.value)}>
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

export default SignUp;
