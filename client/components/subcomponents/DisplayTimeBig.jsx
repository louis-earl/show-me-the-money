import React from 'react'

function DisplayTime({ runtime }) {
    const date = new Date(runtime)
    const hrs = date.getHours() - 12
    const min = date.getMinutes()
    const sec = date.getSeconds()

    // still show mins if we have hours
    const showHrs = hrs !=0
    const showMin = showHrs || min != 0
    const showSec = !(showHrs && showMin) && sec != 0

    const hrsText = hrs == 1 ? "hr" : "hrs"
    const minText = min == 1 ? "min" : "mins"
    const secText = sec == 1 ? "sec" : "secs"

    return (
        <span>
            {showHrs && <><span className="statistic__text">{hrs}</span>&nbsp;{hrsText} </>}
            {showMin && <><span className="statistic__text">{min}</span>&nbsp;{minText} </>}
            {showSec && <><span className="statistic__text">{sec}</span>&nbsp;{secText}</>}
        </span>
    )
}

export default DisplayTime