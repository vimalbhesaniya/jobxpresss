import React from 'react'
import Profile_root from './Profiles_root'
import { useState } from 'react'
import About from './About'
import UserFromSearch from './UserFromSearch'
import AllUsers from './AllUsers'
import SearchUser from './SearchUser'
import CompanyNotifications from './CompanyNotifications'
import CompanyProfile from './CompanyProfile'
import CompanyDashboard from './CompanyDashboard'
import Candidateprofiles from './Candidateprofiles'
function CompanyHome({ setScreen }) {
    const [cview, setView] = useState("dashboard")
    const renderScreen = () => {
        switch (cview) {
            case "cHome":
                return <CompanyDashboard />
            // break
            case "Profile":
                return <Profile_root />
            // break;
            case "About":
                return <About />
            // break;
            case "companyProfile":
                return <CompanyProfile />
            // break;

            case "notifications":
                return <CompanyNotifications />
            // break;

            case "dashboard":
                return <CompanyDashboard setView={setView} />
            // break;
            case "candidateprofile":
                return <Candidateprofiles setView={setView} cview={cview} />
            // break;
            case "candidate":
                return <AllUsers setView={setView} />
            // break;
            case "aboutus":
                return <About setView={setView} />
            // break;
            case "searchduser":
                return <UserFromSearch setView={setView} />
            // break;
            case "search":
                return <SearchUser setView={setView} />
            // break;

            default:
                return "Not found..."
        }
    }
    return (
        <>
            <div className="main">
                {/* <!-- menubar --> */}
                <div className="menubar">
                    {/* <!-- logo --> */}
                    <div className="logo ">

                        <h1 className='Logo logo'>job<span className='X_css'>X</span>press</h1>
                    </div>
                    <div className="menu">
                        <div className={cview === "dashboard" ? "link_home link_home_bg" : "link_home"} onClick={() => {
                            sessionStorage.removeItem("yes");
                            setView("dashboard")
                        }}>
                            <div className="linkHover_home">
                                <i className="fa fa-house"></i><span>dashboard</span>
                            </div>
                        </div>
                        <div className={cview === "search" ? "link_home link_home_bg" : "link_home"} onClick={() => setView("search")}>
                            <div className="linkHover_home">
                                <i className="fa fa-search"></i> <span>Search</span>
                            </div>
                        </div>
                        <div className={cview === "candidate" ? "link_home link_home_bg" : "link_home"} onClick={() => {
                            sessionStorage.removeItem("yes");
                            setView("candidate")
                        }}>
                            <div className="linkHover_home">
                                <i className=" fa fa-compass"></i><span>Hire Candidates</span>
                            </div>
                        </div>
                        <div className={cview === "notifications" ? "link_home link_home_bg" : "link_home"} onClick={() => setView("notifications")}>
                            <div className="linkHover_home">
                                <i className="fa fa-bell"></i><span>Notifications</span>
                            </div>
                        </div>
                        <div className={cview === "About" ? "link_home link_home_bg" : "link_home"} onClick={() => setView("About")}>
                            <div className="linkHover_home">
                                <i className="fa  fa-info-circle"></i><span>About Us</span>
                            </div>
                        </div>
                        <div className={cview === "companyProfile" ? "link_home link_home_bg" : "link_home"} onClick={() => setView("companyProfile")}>
                            <div className="linkHover_home">
                                <i className="fa  fa-user" ></i><span>profile</span>
                            </div>
                        </div>
                        <div className="logout" onClick={() => {
                            localStorage.removeItem("c_id");
                            setScreen("CompanyLogin")
                        }}>
                            <div className="link_logout"><span id='span' className='span'
                            >Log Out</span></div>
                        </div>
                    </div>
                </div>
                {/* <!-- pages --> */}
                <div className="pages">
                    {renderScreen()}
                </div>
            </div>
        </>
    )
}

export default CompanyHome