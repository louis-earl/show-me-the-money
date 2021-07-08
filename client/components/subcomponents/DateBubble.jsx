import React from 'react'

function DateBubble({ date }) {

  const dateObject = new Date(date * 1000)
  const day = dateObject.toLocaleString("en-US", {day: "numeric"})
  const month = dateObject.toLocaleString("en-US", {month: "long"}) // December
  const year = dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019



  return (

    <div className="columns">
      <img className="ticker__icon" src="./images/date.png" />
      <p className="ticker__info-text">
          {day + " " + month + " " + year}
      </p>
    </div>

  )

}

export default DateBubble
