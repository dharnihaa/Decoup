import React, { useEffect, useRef } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  LineElement,
  LineController,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  RadarController,
  PolarAreaController,
  RadialLinearScale
} from 'chart.js';

// Register components
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  LineElement,
  LineController,
  PointElement,
  ArcElement,
  RadarController,
  PolarAreaController,
  RadialLinearScale,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const barChartRef = useRef(null);
  const dualLineRef = useRef(null);
  const areaChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const polarChartRef = useRef(null);
  const radarChartRef = useRef(null);

  // Store chart instances
  const chartInstances = useRef({});

  useEffect(() => {
    // Clean up existing charts
    Object.values(chartInstances.current).forEach(chart => {
      if (chart) {
        chart.destroy();
      }
    });

    // Bar Chart: Coupon Redemptions by Month
    const barChartCtx = barChartRef.current.getContext('2d');
    chartInstances.current.barChart = new Chart(barChartCtx, {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Coupon Redemptions',
          data: [120, 150, 130, 160, 180, 170, 190, 210, 200, 220, 240, 230],
          backgroundColor: '#4c84ff',
        }]
      },
      options: {
        plugins: {
          legend: { display: true },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { display: true }
          },
          y: {
            grid: { display: true },
            ticks: { display: true }
          }
        }
      }
    });

    // Dual Line Chart: Coupon Usage and New Coupons Issued
    const dualLineCtx = dualLineRef.current.getContext('2d');
    chartInstances.current.dualLineChart = new Chart(dualLineCtx, {
      type: 'line',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Coupons Used",
            pointRadius: 4,
            pointBackgroundColor: 'rgba(255,255,255,1)',
            pointBorderWidth: 2,
            fill: false,
            backgroundColor: 'transparent',
            borderColor: '#fdc506',
            data: [50, 60, 70, 80]
          },
          {
            label: "New Coupons Issued",
            fill: false,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(255,255,255,1)',
            pointBorderWidth: 2,
            backgroundColor: 'transparent',
            borderColor: '#4c84ff',
            data: [40, 50, 60, 70]
          }
        ]
      },
      options: {
        plugins: {
          legend: { display: true },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { display: true }
          },
          y: {
            grid: { display: true },
            ticks: { display: true }
          }
        }
      }
    });

    // Area Chart: Coupon Redemption Trends
    const areaChartCtx = areaChartRef.current.getContext('2d');
    chartInstances.current.areaChart = new Chart(areaChartCtx, {
      type: 'line',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Redemption Trends",
            pointRadius: 0,
            fill: true,
            backgroundColor: 'rgba(76, 132, 255, 0.5)',
            borderColor: 'rgba(76, 132, 255, 0.9)',
            data: [30, 40, 50, 60]
          }
        ]
      },
      options: {
        plugins: {
          legend: { display: true },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { display: true }
          },
          y: {
            grid: { display: true },
            ticks: { display: true }
          }
        }
      }
    });

    // Line Chart with Gradient: Coupon Usage by Category
    const lineChartCtx = lineChartRef.current.getContext('2d');
    const gradientFill = lineChartCtx.createLinearGradient(0, 120, 0, 0);
    gradientFill.addColorStop(0, "rgba(41,204,151,0.5)");
    gradientFill.addColorStop(1, "rgba(41,204,151,0.2)");

    chartInstances.current.lineChart = new Chart(lineChartCtx, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Usage by Category",
            lineTension: 0,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(255,255,255,1)',
            pointBorderWidth: 2,
            fill: true,
            backgroundColor: gradientFill,
            borderColor: '#29cc97',
            borderWidth: 2,
            data: [15, 30, 45, 40, 55]
          }
        ]
      },
      options: {
        plugins: {
          legend: { display: true },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { display: true }
          },
          y: {
            grid: { display: true },
            ticks: { display: true }
          }
        }
      }
    });

    // Polar Chart: Coupon Distribution by Type
    const polarChartCtx = polarChartRef.current.getContext('2d');
    chartInstances.current.polarChart = new Chart(polarChartCtx, {
      type: 'polarArea',
      data: {
        datasets: [{
          data: [35, 25, 20, 15, 5],
          backgroundColor: [
            'rgba(41,204,151,0.5)',
            'rgba(254,88,101,0.5)',
            'rgba(128,97,239,0.5)',
            'rgba(254,196,0,0.5)',
            'rgba(76,132,255,0.5)'
          ],
          label: 'Coupon Types'
        }],
        labels: ['Type A', 'Type B', 'Type C', 'Type D', 'Type E']
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'right' },
          title: { display: false }
        },
        scales: {
          r: {
            ticks: { beginAtZero: true }
          }
        }
      }
    });

    // Radar Chart: Coupon Effectiveness by Campaign
    const radarChartCtx = radarChartRef.current.getContext('2d');
    chartInstances.current.radarChart = new Chart(radarChartCtx, {
      type: 'radar',
      data: {
        labels: ['Campaign A', 'Campaign B', 'Campaign C', 'Campaign D', 'Campaign E'],
        datasets: [{
          label: 'Effectiveness',
          backgroundColor: 'rgba(76,132,255,0.2)',
          borderColor: '#4c84ff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointBorderColor: 'rgba(76,132,255,1)',
          pointBackgroundColor: '#ffffff',
          data: [70, 65, 80, 75, 60]
        }]
      },
      options: {
        plugins: {
          legend: { position: 'top' },
          tooltip: { enabled: true }
        },
        scales: {
          r: {
            angleLines: { display: true },
            grid: { color: '#e5e5e5' },
            ticks: { display: true }
          }
        }
      }
    });

    // Cleanup function to destroy charts
    return () => {
      Object.values(chartInstances.current).forEach(chart => {
        if (chart) {
          chart.destroy();
        }
      });
    };
  }, []);

  return (
    <div className="chart-wrapper">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-chart rounded bg-white p-3">
            <h3>Coupon Redemptions</h3>
            <p className="text-muted">Monthly Data</p>
            <div className="chartjs-wrapper">
              <canvas ref={barChartRef}></canvas>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-chart rounded bg-white p-3">
            <h3>Weekly Usage</h3>
            <p className="text-muted">Coupons Used and Issued</p>
            <div className="chartjs-wrapper">
              <canvas ref={dualLineRef}></canvas>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-chart rounded bg-white p-3">
            <h3>Redemption Trends</h3>
            <p className="text-muted">Weekly Trends</p>
            <div className="chartjs-wrapper">
              <canvas ref={areaChartRef}></canvas>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-chart rounded bg-white p-3">
            <h3>Category Usage</h3>
            <p className="text-muted">Coupon Usage by Category</p>
            <div className="chartjs-wrapper">
              <canvas ref={lineChartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="single-chart rounded bg-white p-3">
            <h3 className="text-center pb-4">Coupon Types</h3>
            <div className="chartjs-wrapper">
              <canvas ref={polarChartRef}></canvas>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="single-chart rounded bg-white p-3">
            <h3 className="text-center pb-4">Campaign Effectiveness</h3>
            <div className="chartjs-wrapper">
              <canvas ref={radarChartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
