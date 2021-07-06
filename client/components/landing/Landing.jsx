import React from 'react'
import TickerExample from './TickerExample'

function Landing(props) {

    return (
        <>
            <div className="section landing__grid">
                <div>
                    <h1>Meetings aren't just time consuming,</h1>
                    <h1>they cost <span className="error">money</span> too.</h1>
                </div>


                <img className="landing__image--boring" src="./images/boring-meeting.jpg" />
            </div>

            <div className="section landing__grid">
                <div className="landing__ticker-example"><TickerExample /></div>
                <div>
                    <h1>Ever wondered how much they really cost?</h1>
                    <p>$how Me The Money is an app designed to display the cost of your meetings in real time.</p>
                    <p>The cost is calculated based on the hourly wages of the meeting's attendees and the current duration of the meeting.</p>
                </div>
            </div>

            <div className="section landing__grid">
                <h1>Keep a record of your meeting history.</h1>
            </div>

            <div className="section landing__grid">
                <h1>Track the cost of your meetings over time.</h1>
            </div>


            <h1 className="center-text">Ready? Let's get started!</h1>
            <div className="columns columns--input columns--center">

                <button className="" onClick={(e) => handlePause()}>
                    Login
                </button>

                <button className="" onClick={(e) => handleEnd()}>
                    Register
                </button>
            </div>



        </>
    )
}

export default Landing
