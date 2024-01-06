import React, { useEffect, useState } from 'react'
import "../Style/notifications.css"
import axios from 'axios'
function CompanyNotifications() {
    // console.log(d.getTime());
    const [notification, setNotification] = useState([])
    useEffect(() => {
        const cid = localStorage.getItem("c_id")
        axios?.get(`http://localhost:8000/allapplications/company/${cid}`).then(e => setNotification(e.data))
    }, [])
    return (
        <>
            <div className='noti--main'>
            {notification.length===0  ? <h1 className='text-center'>No Notifications Available</h1> : <h1 className='text-center'>{notification.length} Notifications Available</h1>}
                {notification?.map((e) => {
                   return <div className="noti--body">
                        <div className='avatar'>
                            <div className='avatar--body'>{e?.uid?.name?.charAt(0)}</div>
                        </div>
                        <div className='noti--msg'>
                            <p className='c--msg'>{e?.uid?.name} has applied for the {e.jobid.jobTitle} position. </p>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default CompanyNotifications