import React, { useEffect, useState } from 'react'
import 'animate.css';
import Loading from './loading';
import axios from 'axios';
import "../Style/profile.css"
function Allprofiles() {
    const [user, setUser] = useState();
    const [limit, setLimit] = useState(3);
    const [toggle, setToggle] = useState(false);
    const toggleSet = () => {
        setToggle(!toggle);
    }
    useEffect(() => {
        if (!toggle) {
            setLimit(3);
        }
        else if (toggle) {
            setLimit("");
        }
    })
    useEffect(() => {
        const logeduser = localStorage.getItem("user_id");
        axios.get(`http://localhost:8000/profiles/id/${logeduser}/${limit}`).then((e) => setUser(e.data));
    }, [user])
    return (
        <>
            <div className="titletext" style={{ marginTop: "150px" }} data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <h1>Meet Our   <span>Talented</span> Individuals </h1>
            </div>
            <div className="container">
                {
                    !user ? <Loading /> :
                        user?.map((e) => {
                            return <div className="card">
                                <div className="card__header">
                                    <p>{e.name.charAt(0)} </p>
                                </div>
                                <div className="card__body">
                                    <span className="tag"></span>
                                    <h4>{e.name}</h4>
                                    <p className='profession-name'>{e.profession}</p>
                                </div>
                                <div className="card__footer">
                                    <div className="user">
                                        <div className="user__info">
                                            <ul className='skillul'>
                                                {e.skills.map((val) => {
                                                    return <li>{val}</li>
                                                })}
                                            </ul>
                                            <div style={{ textAlign: "center" }}><button className='vbtn ' onClick={() => {
                                                // sessionStorage.setItem("userid", e.id); setScreen("UserProfile");
                                            }}>view profile</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                }
            </div>
            <div className='viewButton'>
                <button className='mui-btn' onClick={() => toggleSet()}>{toggle ? "view less" : "view more"}</button>
            </div>

        </>
    )
}

export default Allprofiles