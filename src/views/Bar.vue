<template>
    <Bar :data="data" :options="options" />
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
  
  
  Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Colors)
  
  export default {
    name: 'App',
    components: {
      Bar
    },
    data() {
      return {
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Number of Admission',
              data: [40, 20, 12, 22, 16, 60, 24],
              borderColor: [
                '#FF5ACA',
                '#5D78FC',
                '#63B3F8',
                '#61D4F8',
                '#8AFF64',
                '#FBA265',
                '#FCDF5C'
              ],
              borderWidth: 2,
              backgroundColor: [
                '#FFCDEF',
                '#CED6FEE6',
                '#D2E9FD',
                '#CFF2FD',
                '#E3FFDA',
                '#FEE7D7',
                '#FEF5CC'
              ],
              maxBarThickness: 100 // change width of the box
  
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              // You can customize the appearance of the x-axis here
              title: {
                display: true,
                text: 'Days of the Week',
                color: 'red', // Change the color of the x-axis title
              },
            },
            y: {
              // Customize the appearance of the y-axis here
              title: {
                display: true,
                text: 'Number of Admission',
              },
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
          },
        }
      }
    }
  }
  </script>