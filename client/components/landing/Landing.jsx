import React from 'react'
import { Link } from 'react-router-dom'

function Landing(props) {

    return (
        <>
            <div className="section landing__grid">
                <div>
                    <h1>Meetings aren't just time consuming,</h1>
                    <h1>they cost <span className="error">money</span> too.</h1>
                </div>


                <img className="landing__image landing__image--boring" src="./images/boring-meeting.jpg" />
            </div>

            <div className="section landing__grid landing__grid--reverse">

                <img className="landing__image landing__image--example-ticker" src="./images/example-ticker.jpg" />

                <div>
                    <h1>Ever wondered how much they really cost?</h1>
                    <p>$how Me The Money is an app designed to display the cost of your meetings in real time.</p>
                    <p>The cost is calculated based on the hourly wages of the meeting's attendees and the current duration of the meeting.</p>
                </div>
            </div>

            <div className="section landing__grid">
                <h1>Keep a record of your meeting history.</h1>
                <img className="landing__image landing__image--history" src="./images/meeting-history.jpg" />
            </div>

            <div className="section landing__grid">
                <h1>Track the cost of your meetings over time.</h1>
                <img className="landing__image landing__image--statistics" src="./images/statistics.jpg" />
            </div>


            <div className="section card">
                <h1 className="center-text">Ready? Let's get started!</h1>
                <div className="columns columns--input columns--center">

                    <Link to="./login">
                        <div className="button">
                            Login
                        </div>
                    </Link>

                    <Link to="./register">
                        <div className="button">
                            Register
                        </div>
                    </Link>
                </div>
            </div>



        </>
    )
}

export default Landing
