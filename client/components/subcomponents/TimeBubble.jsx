import React from 'react'

import DisplayTime from './DisplayTime'

function TimeBubble({ time }) {

  return (

    <div className="columns">
      <img className="ticker__icon" src="./images/time.png" />
      <p className="ticker__info-text">
        <DisplayTime runtime={time} />
      </p>
    </div>

  )

}

export default TimeBubble
