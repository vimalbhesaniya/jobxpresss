import React, { useEffect } from 'react'
import "../Style/searchcompany.css"
import { useState } from 'react'
import axios from 'axios';
function SearchUser({ setView }) {
    const [items, setItems] = useState([]);
useEffect(() => {
    if (items.length == 0) {
        axios.get(`http://localhost:8000/seekers`).then(e => setItems(e.data)).catch(e => console.error(e))
    }
} , [])

    const search = (e) => {
        if (e) {
            axios.get(`http://localhost:8000/search/user/${e}`).then(e => setItems(e.data)).catch(e => console.error(e))
        }        
    }

    return (
        <>
            <div class="width-100 recent-job">
                <div class="container-input">
                    <input type="text" placeholder="Search Condidates..." name="text" class="input" onChange={(e) => { search(e.target.value) }} autocomplete="off" />
                    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
                    </svg>
                </div>
                {items.length == 0 ? <h1>Not Found</h1> : <h1>{items.length} Results Found</h1>}
                <table class="table align-middle mb-0 bg-white">
                            <thead class="bg-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Profession</th>
                                    <th>Location</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                    {items?.map((e) => {
                        return <>
                            <tbody>
                                <tr>
                                    <td>{e.name}</td>
                                    <td>{e.profession}</td>
                                    <td>{e.location}</td>
                                    <td><button className="mui-btn mui-btn--primary" onClick={() => 
                                    {
                                        localStorage.setItem("isu_id" , e._id)
                                        setView("searchduser");
                                    }
                                    }>View Profile</button></td>
                                </tr>
                            </tbody>
                        </>
                    })}
                </table>
            </div>
        </>
    )
}

export default SearchUser