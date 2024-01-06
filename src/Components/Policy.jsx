import React, { useState } from 'react'

function Policy() {
  return (
<>
<div className="overlay " id="overlay">
        <div className="popup" id="popup">
            <h2>Pre-Registration Policy</h2>
            <p>
                Welcome to jobxpress. Before you proceed with the registration process, we ask that you review and agree to the following policies. These policies govern your use of our job portal platform.
            </p>
            <ol>
                <li>
                    <strong>Privacy Policy:</strong>
                    Before registering, please review our Privacy Policy. It explains how we collect, use, and protect your personal information. By registering, you acknowledge that you have read and agreed to our Privacy Policy.
                </li>
                <li>
                    <strong>Terms of Use:</strong>
                    Please review our Terms of Use. These terms outline the rules and guidelines for using our job portal. By registering, you agree to comply with these terms.
                </li>
                <li>
                    <strong>User Responsibilities:</strong>
                    As a registered user, you are responsible for maintaining the confidentiality of your account information, including your login credentials. Do not share your account details with others, and report any unauthorized access promptly.
                </li>
                <li>
                    <strong>Application Accuracy:</strong>
                    When applying for jobs through our portal, you agree to provide accurate and truthful information in your application materials, including your resume/CV and cover letter.
                </li>
                <li>
                    <strong>Communication Preferences:</strong>
                    By registering, you consent to receive job alerts, updates, and other communication related to your account and job applications. You can manage your communication preferences in your account settings.
                </li>
                <li>
                    <strong>Account Termination:</strong>
                    We reserve the right to suspend or terminate your account if you violate our policies or engage in behavior that harms our community.
                </li>
                <li>
                    <strong>Changes to Policies:</strong>
                    We may update our policies periodically. Any changes will be posted on our website, and your continued use of our platform after changes constitutes your acceptance.
                </li>
            </ol>
            <p>
                By clicking the "Register" button, you acknowledge that you have read and understood our policies and agree to comply with them. If you disagree with these policies, please do not proceed with registration.
            </p>
            <p>
                For questions or concerns about our policies, please contact us at [contact email or phone number].
            </p>
            <p>
                Website: <a href="/">JobXpress</a>
            </p>
            <label>
                <input type="checkbox" id="agreeCheckbox" /> I have read and agree to the policies.
            </label>
           
        </div>
    </div>
</> 
 )
}

export default Policy