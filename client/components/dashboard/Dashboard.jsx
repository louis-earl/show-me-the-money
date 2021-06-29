import React from 'react'
import Graph from './Graph'

import RecentHistory from './RecentHistory'

function Dashboard() {
  return (

    <>
    <div className="dashboard">
    <RecentHistory />
    <Graph />
    </div>
    </>


  )
}

export default Dashboard
