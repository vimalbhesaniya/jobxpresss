import React from 'react'
import Profile_root from './Profiles_root'
import { useState } from 'react'
import CompanyFromsearch from './CompanyFromSearch'
import Homepage from "./Homepage.jsx"
import UserProfile from './userProfile'
import About from './About'
import SearchCompany from './SearchCompany'
import Fulljobdescription from './Fulljobdescription'
import Applications from './Applications'
import UserNotifications from './UserNotification'
function UserHome({ setScreen }) {
    const [view, setView] = useState("Home")
    const renderScreen = () => {
        switch (view) {
            case "Home":
                return <Homepage />
                break
            case "Notifications":
                return <UserNotifications />
                break
            case "Profile":
                return <Profile_root />
                break;
            case "About":
                return <About />
                break;
            case "userProfile":
                return <UserProfile />
                break;
            case "applications":
                return <Applications setView={setView} />
                break;
            case "Fulljobdescription":
                return <Fulljobdescription />
                break;
            case "search":
                return <SearchCompany setView={setView} />
                break;
            case "searchedcompany":
                return <CompanyFromsearch setView={setView} />
                break;
         
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
                        <div className={view == "Home" ? "link_home link_home_bg"  : "link_home"} onClick={() => setView("Home")}>
                            <div className="linkHover_home">
                                <i className="fa fa-house"></i><span>Home</span>
                            </div>
                        </div>
                        <div className={view == "search" ? "link_home link_home_bg"  : "link_home"} onClick={() => setView("search")}>
                            <div className="linkHover_home">
                                <i className="fa  fa-search"></i> <span >Search</span>
                            </div>
                        </div>
                        <div className={view == "applications" ? "link_home link_home_bg"  : "link_home"} onClick={() => setView("applications")}>
                            <div className="linkHover_home">
                                <i className=" fa fa-compass"></i><span>Trending jobs</span>
                            </div>
                        </div>
                        <div className={view == "Notifications" ? "link_home link_home_bg"  : "link_home"}  onClick={() => setView("Notifications")}>
                            <div className="linkHover_home">
                                <i className="fa fa-bell"></i><span>Notifications</span>
                            </div>
                        </div>
                        <div className={view == "About" ? "link_home link_home_bg"  : "link_home"}  onClick={() => setView("About")}>
                            <div className="linkHover_home">
                                <i className="fa  fa-info-circle"></i><span>About Us</span>
                            </div>
                        </div>
                        <div className={view == "userProfile" ? "link_home link_home_bg"  : "link_home"} onClick={() => setView("userProfile")}>
                            <div className="linkHover_home">
                                <i className="fa  fa-user" ></i><span>MyProfile</span>
                            </div>
                        </div>
                        <div className="logout" onClick={() => {
                            localStorage.removeItem("user_id");
                            sessionStorage.clear();
                            setScreen("userLogin")
                        }}>
                            <div className="link_logout"><span id='span' className='span'
                            >Log Out</span></div>
                        </div>
                    </div>
                </div>
                {/* <!-- pages --> */}
                <div className="pages">
                    <div className="homepage">
                        {renderScreen()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserHome