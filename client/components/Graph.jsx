import React from 'react'


function Graph() {

    const buildGraph = () => {
        const config = {
            type: 'line',
            data: data,
          }

        const labels = ['meeting', 'meeting', 'meeting', 'meeting', 'meeting', 'meeting', 'meeting', ];
        const data = {
            labels: labels,
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          };
    }
    return (
        <div>
            {buildGraph()}
        </div>
    )
}

export default Graph
