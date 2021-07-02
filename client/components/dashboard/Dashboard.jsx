import React from 'react'
import Graph from './Graph'

import RecentHistory from './RecentHistory'
import Statistics from './Statistics'

function Dashboard() {

  return (

    <div className="dashboard">
      <RecentHistory />
      <Graph />
      <Statistics />
    </div>

  )
}

export default Dashboard
