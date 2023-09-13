<!-- <template>
  <div>
    <h1>My Donut Chart</h1>
    <canvas id="myDonutChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import { Doughnut, mixins } from 'vue-chartjs';
import 'chartjs-plugin-datalabels';

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(
      {
        labels: ['Man', 'Woman'],
        datasets: [
          {
            borderColor: ['#FBA265', '#63B3F8'],
            borderWidth: 1,
            backgroundColor: ['#FEE7D7', '#D2E9FD'],
            data: [40, 20],
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 50,
        plugins: {
          datalabels: {
            display: true,
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => {
                sum += data;
              });
              let percentage = ((value / sum) * 100).toFixed(2) + '%';
              return percentage;
            },
            color: '#fff',
          },
        },
        legend: {
          display: true,
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'The percentage of students based on gender',
          fontSize: 16,
        },
        tooltips: {
          enabled: true,
        },
      }
    );
  },
};
</script>

<style>
/* Add any custom CSS styling here */
</style> -->
