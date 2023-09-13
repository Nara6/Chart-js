export const data = {
    labels: ['Man', 'Woman'],
    datasets: [
      {
        // borderColor: ['#FBA265', '#63B3F8'],
        borderWidth: 1,
        backgroundColor: ['#FFCEFE', '#AAE3E2'],
        data: [40, 20],

      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: false
    },
    plugins:{
      legend:{
        display: true,
        position: 'bottom',
        labels:{
          boxWidth: 40,
          boxHeight: 40,
          padding: 25,
          usePointStyle: true,
          pointStyle: 'circle'
        },
        
      },
      title:{
        display: true,
        text: 'The percentage of student base on gender',
        font:{
          size: 14
        }
      },
      datalabels: {
        display:true,
        formatter: (value, ctx) => {
            let sum = 0;
            console.log(ctx);
            
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map(data => {
                sum += data;
            });
            let percentage = (value*100 / sum).toFixed(2)+"%";
            return percentage;
        },
        color: ['#2E4053'],
        labels: {
          title: {
            font: {
              size: 15,
              weight: '600'
            }
          },
        }
      }

    },
    
}
  