import React from 'react'
import TimeBubble from '../subcomponents/TimeBubble'
import AttendeesBubble from '../subcomponents/AttendeesBubble'

function TickerExample(props) {

    return (
        <div className="ring__wrapper ring__wrapper--meeting">
    
          <div className="ring ring--ticker">
            <div className="ticker">
              <p className="ticker__meeting-name">Daily Penguin Huddle</p>
              <p className="ticker__meeting-cost">$56.49</p>
              <p className="ticker__budget">of $100.00</p>
    
              <div className="ticker__info-wrapper">
    
                <div>
                    <TimeBubble time={1513000} />
                    <AttendeesBubble attendeeCount={5} />
                </div>
    
              </div>
            </div>
          </div>
    
        </div>
      )
}

export default TickerExample
