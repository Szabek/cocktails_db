import React from 'react'
import {Doughnut} from "react-chartjs-2";
import Chart from 'chart.js/auto';

const GlassTypeChart = ({chartData}) => {
    let keys = Object.keys(chartData);
    let values = Object.values(chartData);
    const randomColorsArray = [];

    function getRandomRgb() {
        const num = Math.round(0xffffff * Math.random());
        const r = num >> 16;
        const g = num >> 8 & 255;
        const b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

    keys.forEach(function() {
        randomColorsArray.push(getRandomRgb())
    })
    
    return (
        <Doughnut
            data={{
                labels: keys,
                datasets: [
                    {
                        data: values,
                        backgroundColor: randomColorsArray,
                        borderColor: randomColorsArray,
                        borderWidth: 1,
                    },
                ],
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
        />
    )
}

export default GlassTypeChart
