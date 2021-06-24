import React, { useEffect } from 'react'

function DisplayTime({ runtime }) {
    const date = new Date(runtime)
    const hours = date.getHours() - 12
    const min = date.getMinutes()
    const sec = date.getSeconds()

    // still show mins if we have hours
    const showMins = hours || min

    return (
        <span>
            {hours && <>{hours} hrs, </>}
            {showMins && <>{min} mins, </>}
            {sec} secs
        </span>
    )
}

export default DisplayTime