import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router';

import { receiveMeetings } from '../actions/meetings'

function PastMeetingFull(props) {
  const { id } = useParams();

  useEffect(() => {
        // go get the single meeting by id 
        console.log(id)
  }, [])

  return (
    <div>
      <h2>This is a meeting</h2>
      <p>Here is the total cost</p>
      <p>These are all the people who attended the meeting</p>
      <p>Sorry this information is so boring</p>
    </div>
  )
}


export default PastMeetingFull
