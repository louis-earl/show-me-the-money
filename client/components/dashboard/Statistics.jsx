import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Statistics(props) {

    const totalCost = 0
    const totalMeetings = props.meetingsHistory.length
    const totalTime = 0

    return <div className="history section">
        <div className="page-title">
            <h2>Statistics</h2>
        </div>
        {
            props.meetingsHistory.length > 0 ?
                <div className="dashboard__grid">

                    <div className="ring__wrapper">
                        <div className="statistic__ring">
                            <div className="ticker">
                                <h3>Total Cost</h3>
                                {/* <p>By attending meetings, {props.user.first_name} has cost</p> */}
                                <p className="cost">${totalCost}</p>
                            </div>
                        </div>
                    </div>

                    <div className="ring__wrapper">
                        <div className="statistic__ring">
                            <div className="ticker">
                                <h3>Total Time</h3>
                                <p><span className="statistic">{totalTime}</span> hrs</p>
                            </div>
                        </div>
                    </div>

                    <div className="ring__wrapper">
                        <div className="statistic__ring">
                            <div className="ticker">
                                <h3>Meeting Count</h3>
                                <p><span className="statistic">{totalMeetings}</span> meetings</p>
                            </div>
                        </div>
                    </div>

                </div>

                :
                <p>
                    Nothing to see here yet! <Link to="/meeting" className="link">Start a new meeting.</Link>
                </p>
        }
    </div>
}

function mapStateToProps(globalState) {
    return {
        meetingsHistory: globalState.meetingsHistory,
        user: globalState.auth.user,
    }
}

export default connect(mapStateToProps)(Statistics)