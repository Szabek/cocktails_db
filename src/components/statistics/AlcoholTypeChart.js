import React from 'react'
import {Bar} from "react-chartjs-2";
import Chart from 'chart.js/auto';

const AlcoholTypeChart = ({chartData}) => {
    return (
            <Bar
                data={{
                    labels: [
                        'Alcoholic',
                        'Non-Alcoholic',
                    ],
                    datasets: [
                        {
                            data: [chartData.alcoholic, chartData.nonAlcoholic],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                            ],
                            borderWidth: 1,
                        },
                        // {
                        //   label: 'Quantity',
                        //   data: [47, 52, 67, 58, 9, 50],
                        //   backgroundColor: 'orange',
                        //   borderColor: 'red',
                        // },
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

export default AlcoholTypeChart
