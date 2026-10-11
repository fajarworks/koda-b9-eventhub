// import React from "react";
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function EventChart() {
  const data = {
    labels: ["Mar", "Apr", "Mei", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Registrations",
        data: [21, 38, 34, 56, 29, 48],
        borderWidth: 1,
        backgroundColor: "#FFBFA8",
        hoverBackgroundColor: "#FF5F22",
        borderRadius: "12"
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      Tooltip: {
        enabled:true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default EventChart;
