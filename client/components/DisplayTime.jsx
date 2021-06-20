import React, { useEffect } from 'react'

function DisplayTime({runtime}) {
    const date = new Date(runtime)
    const hours = date.getHours() - 12
    const min = date.getMinutes()
    const sec = date.getSeconds()
    return <span>{hours} hrs, {min} mins, {sec} secs</span>
}

export default DisplayTime