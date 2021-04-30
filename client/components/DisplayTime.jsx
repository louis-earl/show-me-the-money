import React, { useEffect } from 'react'

function DisplayTime(props) {
    {/*  DISPLAY: hours | min | sec */ }
    let runtime = props.runtime
    let hours = Math.floor(runtime / 60 / 60)
    let min = Math.floor(runtime / 60)
    let sec = runtime % 60
    return <span>{hours} hrs, {min} mins, {sec} secs</span>
}

export default DisplayTime