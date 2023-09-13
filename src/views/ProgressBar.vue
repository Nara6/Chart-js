<template>
  <Bar :data="data" :options="options" :plugins="plugins" />
</template>
  
<script lang="ts">
import { Chart } from 'chart.js'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors,
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { plugin } from '../data/PgBarPlugin.js';
import ChartJSPluginDatalabels from 'chartjs-plugin-datalabels';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Colors)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      plugins: plugin,
      data: {
        labels: ['Reject', 'Pending', 'Selected'],
        datasets: [
          {
            label: 'The percentage of submission',
            data: [41, 20, 12],

            borderColor: [
              'rgba(145,189,195, 0.4)',
              'rgba(216,204,219, 0.4)',
              'rgba(235,176,152, 0.4)',
            ],
            borderWidth: 1,
            backgroundColor: [
              '#91BDC3',
              'rgb(216,204,219)',
              'rgb(235,176,152)',
            ],
            barPercentage: 0.2,
            categoryPercentage: 0.8,
            borderSkipped: false,
            borderRadius: 10

          }
        ],

      },
      options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
          x: {
            // You can customize the appearance of the x-axis here
            title: {
              display: true,
              text: 'Percentage',
              color: 'red', // Change the color of the x-axis title
            },
            grid: {
              display: false,
              drawBorder: false
            },
            // ticks: {
            //   display: false
            // },
            max: 100
            // ticks: {
            //   min: 0,
            //   max: 100,
            //   // callback: (value) => {
            //   //   return value + '%';
            //   // }
            // }
          },
          y: {
            // Customize the appearance of the y-axis here
            // title: {
            //   display: true,
            //   text: 'Number of Admission',
            // },

            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              display: false
            }
          },


        },
        plugins: {
          legend: {
            display: true,
            align: 'start',
            labels: {

              boxWidth: 0,
              // boxHeight: 100,
              font: {
                size: 35,
                weight: 600,

              },
              padding: 30,
              color: '#243673'
            }
          },
          // datalabels: {
          //   formatter: (value, ctx) => {
          //     let sum = 0;
          //     let dataArr = ctx.chart.data.datasets[0].data;
          //     dataArr.map(data => {
          //       sum += data;
          //     });
          //     let percentage = (value * 100 / sum).toFixed(2) + "%";
          //     return percentage;
          //   },
          //   color: '#fff',
          // }
        },
      }
    }
  }
}
</script>