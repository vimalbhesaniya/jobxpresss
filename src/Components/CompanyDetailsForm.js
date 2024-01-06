import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

const CompanyDetailsForm = () => {
    const cid = localStorage.getItem("c_id");
    const [company, setCompanyName] = useState(cid);
    const [aboutus, setaboutus] = useState("");
    const [mission, setmission] = useState("");
    const [whyworkwithus, setWhyworkwithus] = useState("");
    const [established_year, setEstablished_year] = useState("");
    const [currentopenings, setCurrentopenings] = useState("");
    const [website, setWebsite] = useState("");
    let [social_media_links, setSocial_media_links] = useState("");

    const handleSave = async () => {
        social_media_links = social_media_links?.split
        await fetch(`http://localhost:8000/company/details/`, {
            method: "POST",
            body: JSON.stringify({
                company,
                mission,
                aboutus,
                established_year,
                currentopenings,
                website,
                social_media_links,
                whyworkwithus,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(e => alert("Saved Successfully")).catch(e => console.log("Something Went Wrong"));
        clearAllStates()
    }
    const clearAllStates = () => {
        setCompanyName("");
        setaboutus("");
        setmission("");
        setWhyworkwithus("");
        setEstablished_year("");
        setCurrentopenings("");
        setWebsite("");
        setSocial_media_links("");
    };
    return (
        <div className="container   overflow-scroll animate__animated animate__fadeInLeft ">
            <h1 className="text-center ">Add More details</h1>
            <div className="form-group ">
                <label htmlFor="mission">AboutUs</label>
                <textarea type="text" className="form-control" value={aboutus} onChange={() => setaboutus()} placeholder="About Us" rows="5" />
            </div>
            <div className="form-group ">
                <label htmlFor="mission">Mission</label>
                <textarea
                    className="form-control"
                    id="mission"
                    rows="4"
                    value={mission}
                    onChange={(e) => setmission(e.target.value)}
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="whyWorkWithUs">Why Work With Us</label>
                <textarea
                    className="form-control"
                    id="whyWorkWithUs"
                    rows="4"
                    value={whyworkwithus}
                    onChange={(e) => setWhyworkwithus(e.target.value)}
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="establishedYear">Established Year</label>
                <input
                    type="text"
                    className="form-control"
                    id="establishedYear"
                    value={established_year}
                    onChange={(e) => setEstablished_year(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="currentOpenings">Current Openings</label>
                <input
                    type="text"
                    className="form-control"
                    id="currentOpenings"
                    value={currentopenings}
                    onChange={(e) => setCurrentopenings(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                    type="text"
                    className="form-control"
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="socialMediaLinks">Social Media Links</label>
                <textarea
                    className="form-control"
                    id="socialMediaLinks"
                    rows="4"
                    value={social_media_links}
                    onChange={(e) => setSocial_media_links(e.target.value)}
                ></textarea>
            </div>
            <div>

                <div className="container p-0 text-center">
                    <Button
                        onClick={() => handleSave()}
                        variant="primary"
                        className="mt-3"
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default CompanyDetailsForm;
