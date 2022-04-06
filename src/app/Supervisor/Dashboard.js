import React, { Component } from "react";
import { FixedScaleAxis } from "react-chartist";

export class Dashboard extends Component {
  state = {
    startDate: new Date(),
    dateRange: [new Date() - 1, new Date()],
  };

  performanceIndicatorChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "may",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    series: [
      [30, 25, 50, 25, 50, 25, 50, 55, 20, 35, 25, 30],
      [25, 50, 10, 35, 30, 15, 20, 20, 30, 25, 10, 15],
      [45, 25, 40, 40, 20, 60, 30, 25, 50, 40, 65, 55],
    ],
  };

  performanceIndicatorChartOptions = {
    stackBars: true,
    height: 200,
    axisY: {
      type: FixedScaleAxis,
      ticks: [0, 25, 50, 75, 100],
    },
    showGridBackground: false,
  };

  performanceIndicatorChartResponsiveOptions = [
    [
      "screen and (max-width: 480px)",
      {
        height: 150,
      },
    ],
  ];

  sessionsDoughnutData = {
    datasets: [
      {
        data: [55, 25, 20],
        backgroundColor: ["#ffca00", "#38ce3c", "#ff4d6b"],
        borderColor: ["#ffca00", "#38ce3c", "#ff4d6b"],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Reassigned", "Not Assigned", "Assigned"],
  };

  sessionsDoughnutOptions = {
    cutoutPercentage: 75,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  incomeExpenseSummaryChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [505, 781, 480, 985, 410, 822, 388, 874, 350, 642, 320, 796],
      [700, 430, 725, 390, 686, 392, 757, 500, 820, 400, 962, 420],
    ],
  };

  incomeExpenseSummaryChartOptions = {
    height: 300,
    axisY: {
      high: 1000,
      low: 250,
      referenceValue: 1000,
      type: FixedScaleAxis,
      ticks: [250, 500, 750, 1000],
    },
    showArea: true,
    showPoint: false,
    fullWidth: true,
  };

  incomeExpenseSummaryChartResponsiveOptions = [
    [
      "screen and (max-width: 480px)",
      {
        height: 150,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value;
          },
        },
      },
    ],
  ];
  toggleProBanner() {
    document.querySelector(".proBanner").classList.toggle("hide");
  }
  render() {
    return <div></div>;
  }
}

export default Dashboard;
