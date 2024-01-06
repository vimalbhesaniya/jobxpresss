import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../Style/fontawesome-free-6.4.2-web/css/all.css"
function Company_profile_root({ setScreen, screen }) {
    const [user, setUser] = useState();
    const [limit, setLimit] = useState(3);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        if (!toggle) {
            setLimit(3);
        }
        else if (toggle) {
            setLimit("");
        }
        if (screen == "Candidate") {
            setLimit("");
        }
    });

    return (
        <>
            <div className="cardbody">
                {
                    user?.map((e) => {
                        return <>
                            <div className="profilebody">
                                <div className="profilepicture">
                                    <div className="picture">
                                        <p>{e?.name?.charAt(0)}</p>
                                    </div>
                                </div>
                                <div className="information">
                                    <p className="username">{e?.name}</p>
                                    <p className="profession">{e?.profession}</p>
                                    <p className="location"><i className="fa fa-location-dot"></i>Surat,Gujarat</p>
                                </div>
                                <div className="viewprofilebutton">
                                    <button className="button">
                                        <i className='fa fa-user bell'></i>
                                        View profile
                                        <div className="arrow">&gt;</div>
                                    </button>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </>
    )
}

export default Company_profile_root