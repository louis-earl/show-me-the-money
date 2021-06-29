import React, { useEffect } from 'react'

function DisplayTime({ runtime }) {
    const date = new Date(runtime)
    const hrs = date.getHours() - 12
    const min = date.getMinutes()
    const sec = date.getSeconds()

    // still show mins if we have hours
    const showHrs = hrs !=0
    const showMin = showHrs || min != 0

    const hrsText = hrs == 1 ? "hr" : "hrs"
    const minText = min == 1 ? "min" : "mins"
    const secText = sec == 1 ? "sec" : "secs"

    return (
        <span>
            {showHrs && <>{hrs} {hrsText}, </>}
            {showMin && <>{min} {minText}, </>}
            {sec} {secText}
        </span>
    )
}

export default DisplayTime