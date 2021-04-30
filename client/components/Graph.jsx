import React, { useEffect } from 'react'
import { Line, Chart } from 'react-chartjs-2';
import { connect } from 'react-redux'

import { getMeetings } from '../actions/meetings'


function Graph(props) {

    useEffect(() => {
        props.dispatch(getMeetings())
    }, [])
    console.log(props.meetingsHistory)

    const buildGraph = () => {
        // var ctx = document.getElementById('myChart').getContext('2d');
        // const chart = new Chart(ctx, {
        //     type: 'line',
        //     data: {
        //         labels: props.meetingsHistory.map((meeting) => meeting.meeting_name),
        //         datasets: [{
        //             label: 'Cost of meetings over time',
        //             //   data: [65, 59, 80, 81, 56, 55, 40],
        //             data: props.meetingsHistory.map((meeting) => meeting.cost),
        //             fill: false,
        //             borderColor: 'rgb(75, 192, 192)',
        //             tension: 0.1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             yAxes: [{
        //                 ticks: {
        //                     beginAtZero: true,
        //                 }
        //             }]
        //         }
        //     }
        // })

        // return chart
          const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
        const labels = props.meetingsHistory.map((meeting) => meeting.meeting_name)
        const data = {
            labels: labels,
            datasets: [{
              label: 'Cost of meetings over time',
            //   data: [65, 59, 80, 81, 56, 55, 40],
              data: props.meetingsHistory.map((meeting) => meeting.cost),
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }
        return <Line labels={labels} data={data} options={options} />
    }

    return (
        <div id="myChart">
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
