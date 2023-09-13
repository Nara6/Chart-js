export const plugin = [{
    id: 'progressBar',
    beforeDatasetsDraw(chart, args, pluginOptions) {
        // console.log(chart.ctx);
        // console.log(args);
        // console.log(pluginOptions);
        const { ctx, data, scales: { x, y }, chartArea: { top, bottom, left, right, up, width, height } } = chart;
        const barHeigh = height / y.ticks.length * data.datasets[0].barPercentage * data.datasets[0].categoryPercentage;
        // console.log(y.ticks.length);
        var meta = chart.getDatasetMeta(0);
        // var widths = meta.data[0]._model.width;
        console.log(meta.data[0].width);
        ctx.save();
        // console.log(chart.getDatasetMeta(0));
        // console.log(y.getPixelForValue(1));



        // bg fill
        data.datasets[0].data.forEach((datapoint, index) => {
            console.log(data);
            
            ctx.textAlign = 'left';
            ctx.fillStyle = ['#F4511E','#FDD835', '#43A047'];
            ctx.font = "normal normal 600 15px Verdana";
            // ctx.fillStyle = data.datasets[0].backgroundColor[index];
            ctx.textBaseline = 'middle';
            ctx.fillText(data.labels[index], left + 5, y.getPixelForValue(index) - 25);

            ctx.textAlign = 'right';
            ctx.font = "normal normal 500 15px Verdana";
            ctx.fillStyle = '#2E86C1'
            ctx.textBaseline = 'middle';
            const text = datapoint + '%';
            ctx.fillText(text, meta.data[index].width, y.getPixelForValue(index) - 25);

            ctx.beginPath();
            ctx.fillStyle = data.datasets[0].borderColor[index];
            ctx.fillRect(left, y.getPixelForValue(index) - (barHeigh / 2), width, barHeigh)
        })

    }
}]