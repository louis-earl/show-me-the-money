import React, {useState, useEffect} from 'react'
import displayTime from '../utils/meeting'
import {connect} from 'react-redux'
import {tickOneSecond} from '../actions/currentMeeting'
function Ticker(props) {
    const [seconds, setSeconds] = useState(0)
    const cost = props.currentMeeting.cost
    
    useEffect (() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds+1)
            props.dispatch(tickOneSecond())
        }, 1000) 
        return () => {clearInterval(interval)}
      }, [])

    return (
        <div>
            <p>Time: {seconds}</p>
            <p>Cost so far: ${cost.toFixed(2)} </p>
        </div>
    )
}


function mapStateToProps (globalState) {
  return {
    currentMeeting: globalState.currentMeeting

  }
}
export default connect(mapStateToProps)(Ticker)
