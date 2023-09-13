<template>
  <Doughnut :data="data" :options="options" />
</template>
  
<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from '../data/chartConfig.js'
import ChartJSPluginDatalabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend,ChartJSPluginDatalabels )

export default {
  name: 'App',
  components: {
    Doughnut
  },
  data() {
    return chartConfig
  }
}
</script>
  