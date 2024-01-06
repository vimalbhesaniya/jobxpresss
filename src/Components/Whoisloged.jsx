import React from 'react'

function Whoisloged({ setScreen, screen }) {
    const who = localStorage.getItem("whologed");
    if (screen != "who") {
        if (who == "user") {
            setScreen("userLogin")
        }
        else if (who == "company") {
            setScreen("CompanyLogin");
        }
        else {
            setScreen("Who");
        }
    }
    return (
        <>

            <div className='Who'>
                <div class="typing-demo">
                    Welcome to jobXpress....
                </div>
                <div className='typing-demo2'>What do you want ?
                    &nbsp;<span className='job' onClick={() => { setScreen("userLogin"); localStorage.setItem("whologed", "user") }}>i want job!</span> | <span className='staff' onClick={() => { setScreen("CompanyLogin"); localStorage.setItem("whologed", "company") }}>i want staff!</span>
                </div>
            </div>
        </>
    )
}

export default Whoisloged