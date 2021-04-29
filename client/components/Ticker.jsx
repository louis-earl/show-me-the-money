import React, {useState, useEffect} from 'react'
import displayTime from '../utils/meeting'

function Ticker() {
    const [seconds, setSeconds] = useState(0)

    useEffect (() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds+1)
        }, 1000)
        return () => {clearInterval(interval)}
      }, [])



    return (
        <div>
            <p>{seconds}</p>
        </div>
    )
}

export default Ticker
