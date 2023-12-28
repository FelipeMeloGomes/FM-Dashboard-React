import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
    labels: ["cats", "Dogs", "Fish", "Birds", "Hamsters"],
    datasets: [
        {
            label: "Popularity",
            data: [50, 40, 30, 20, 10, 5],
            backgroundColor: [
                "#f44336",
                "#9c27b0",
                "#03a9f4",
                "#8bc34a",
                "#ffc107",
            ],
            borderColor: "#f44336",
            borderWidth: 1,
        },
    ],
};

const BarChart = () => {
    return (
        <div>
            <Bar data={data}></Bar>
        </div>
    );
};

export default BarChart;
