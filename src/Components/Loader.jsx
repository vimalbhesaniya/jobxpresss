import React from 'react'
import "../Style/loader.css"
function Loader() {
    return (
        <>
            <div className='flex-spinner'>
                <div class="loader">
                    <span class="l">L</span>
                    <span class="o">o</span>
                    <span class="a">a</span>
                    <span class="d">d</span>
                    <span class="i">i</span>
                    <span class="n">n</span>
                    <span class="g">g</span>
                    <span class="d1">.</span>
                    <span class="d2">.</span>
                </div>
            </div>
        </>
    )
}

export default Loader