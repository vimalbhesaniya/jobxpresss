import React, { useState } from 'react'

function Helo() {
    const [data , setData] = useState("");
  return (
    <div>
      <input type='text' onChange={(e) => setData(e.target.value)}/>
      <p>{data}</p>
    </div>
  )
}

export default Helo
