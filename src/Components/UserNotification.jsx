import React, { useEffect, useState } from 'react'
import "../Style/notifications.css"
import axios from 'axios'
function UserNotifications() {
    const [notification, setNotification] = useState([])    
    const [statusAccepted, setStatusAccepted] = useState([]) ;   
    useEffect(() => {
        const cid = localStorage.getItem("user_id");
        console.log(cid);
            axios?.get(`http://localhost:8000/allapplications/user/${cid}`).then(e => setNotification(e.data)).catch(e => alert(e))
        } , [])
    console.log(notification);
    useEffect(() =>{
       const status =  notification.filter((e) => {
            return  e.status !== "Pending"
        })
        setStatusAccepted(status);        
    } , [notification]);
    return (
        <>
            <div className='noti--main'>
            {statusAccepted.length == 0  ? <h1>Your notification feed is empty at the moment.</h1> : <h1>{statusAccepted.length} Notifications Found...</h1>}
                {statusAccepted?.map((e) => {
                   return  <div className="noti--body">
                        <div className='avatar'>
                            <div className='avatar--body'>{e?.cid?.company_name?.charAt(0)}</div>
                        </div>
                        <div className='noti--msg'>
                      <p className='c--msg'>{e?.cid?.company_name} has {e.status} for the {e.jobid.jobTitle} position. </p>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default UserNotifications