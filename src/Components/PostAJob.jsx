import React, { useState } from 'react'
import "../Style/post.css"
import { Form, Button, Row, Col } from 'react-bootstrap';
import { TextField } from '@mui/material'
function PostAJob() {
    const today = new Date().toISOString()
    console.log(today);
    const [error, setErrors] = useState("")
    const [code, setCode] = useState("");
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState(localStorage.getItem("c_id"));
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [jobType, setJobType] = useState([]);
    const [postedOn, setPostedOn] = useState(today);
    const [applicationDeadline, setApplicationDeadline] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [benefits, setBenefits] = useState('');
    const [howToApply, setHowToApply] = useState('');
    const handleOnSubmit = async (e) => {
        alert("helo")
        let result = await fetch(
            'http://localhost:8000/joblisting', {
            method: "post",
            body: JSON.stringify({ jobTitle, company, location, jobType, postedOn, applicationDeadline, jobDescription, requirements, responsibilities, requirements, benefits, howToApply }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() =>clearFields())
       
        
    }
   
    const clearFields = () => {
    alert("Thank you's for Registration")
    setJobTitle('');
    setCompany(localStorage.getItem('c_id'));
    setLocation('');
    setSalary('');
    setJobType();
    setPostedOn(today);
    setApplicationDeadline('');
    setJobDescription('');
    setRequirements('');
    setResponsibilities('');
    setBenefits('');
    setHowToApply('');
    };
    return (
        <>
            <div className='container   bg-secondary  rounded w-75 bg-gradient '>
            <h1>Post Your Job</h1>
                <Form>
                    <Form.Group controlId="jobTitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter job title"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="salary">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="jobType">
                        <Form.Label>Job Type</Form.Label>

                    </Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Enter application deadline"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    />
                    <Form.Group controlId="applicationDeadline">
                        <Form.Label>Application Deadline</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter application deadline"
                            value={applicationDeadline}
                            onChange={(e) => setApplicationDeadline(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="jobDescription">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Enter job description"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="requirements">
                        <Form.Label>Requirements</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Enter job requirements"
                            value={requirements}
                            onChange={(e) => setRequirements(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="responsibilities">
                        <Form.Label>Responsibilities</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Enter job responsibilities"
                            value={responsibilities}
                            onChange={(e) => setResponsibilities(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="benefits">
                        <Form.Label>Benefits</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Enter job benefits"
                            value={benefits}
                            onChange={(e) => setBenefits(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="howToApply">
                        <Form.Label>How to Apply</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Enter instructions on how to apply"
                            value={howToApply}
                            onChange={(e) => setHowToApply(e.target.value)}
                        />
                    </Form.Group>
                    <div className='w-100 text-center'>

                    <Button onClick={() =>handleOnSubmit()} variant="primary" className='mt-3 text-center' type="submit">
                        Submit
                    </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default PostAJob