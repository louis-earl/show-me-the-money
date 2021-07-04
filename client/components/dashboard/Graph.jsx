import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { connect } from 'react-redux'


function Graph(props) {

    const buildGraph = () => {

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }

        const labels = props.meetingsHistory.map((meeting) => meeting.meeting_name)
        const data = {
            labels: labels,
            datasets: [{
                data: props.meetingsHistory.map((meeting) => meeting.cost),
                backgroundColor: '#00be4faa',
                borderColor: "#00be4f",
                borderWidth: 2,
                tension: 0.1
            }]
        }
        return <>
        <h2>Cost of meetings</h2>
        <Bar labels={labels} data={data} options={options}/>
        </>
    }

    return (
        <div className="chart section">
            {buildGraph()}
        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
        meetingsHistory: globalState.meetingsHistory
    }
}

export default connect(mapStateToProps)(Graph)
