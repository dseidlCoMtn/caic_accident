let avalancheRose = new Chart('bar-chart', {
    type: 'bar',
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Accidents by Month',
                padding: {
                    top: 10,
                    bottom: 10
                }
            },
            legend: false
        },
        maintainAspectRatio: false,
        onClick : evt=> {
                const points = barChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
                if (points.length) {
                    monthSelected = 1;
                    const clickedPoint = points[0];
                    month = barChart.data.labels[clickedPoint.index];
                    const value = barChart.data.datasets[clickedPoint.datasetIndex].data[clickedPoint.index];
                    const monthLabels = barChart.options.scales.x.ticks;
                    const dataset = barChart.data.datasets[0];
                    dataset.borderWidth = [];
                    dataset.borderColor = [];
                    for (let i = 0; i < dataset.data.length; i++) {
                        if (clickedPoint.index == i) {
                            dataset.borderWidth[i] = 4;
                            dataset.borderColor[i] = "black";
                        } else {
                            dataset.borderWidth[i] = 1;
                            dataset.borderColor[i] = "rgba(0, 0, 0, 0.1)";
                        }
                    }
                    if (actSelected==0 && modeSelected==0 && firstSelect==0) {
                        firstSelect= "month";
                        titleText="1st Filter";
                        barLabels.length=0;
                        updateActivityChart();
                        barChartModeArr.length=0;
                        processBarChartMode();
                        }
                    else if (firstSelect == "month") {
                        titleText="1st Filter";
                        actSelected=0;
                        activity=0;
                        modeSelected=0;
                        mode=0;
                        secondSelect=0;
                        thirdSelect=0;
                        barLabels.length=0;
                        updateActivityChart();
                        barChartModeArr.length=0;
                        processBarChartMode();
                        }
                    else if (secondSelect==0 && firstSelect=="activity")  {
                        secondSelect="month";
                        titleText="2nd Filter";
                        barChartModeArr.length=0;
                        processBarChartMode();
                        }
                    else if (secondSelect==0 && firstSelect=="mode")  {
                        secondSelect="month";
                        titleText="2nd Filter";
                        barLabels.length=0;
                        updateActivityChart();
                        }
                    else if (secondSelect=="month" && firstSelect=="mode")  {
                        titleText="2nd Filter";
                        barLabels.length=0;
                        updateActivityChart();
                        thirdSelect=0;
                        activity=0;
                        actSelected=0;
                        }
                        
                    else if (secondSelect=="month" && firstSelect=="activity") {
                        titleText="2nd Filter";
                        barChartModeArr.length=0;
                        processBarChartMode();
                        thirdSelect=0;
                        mode=0;
                        modeSelected=0;
                        }
                    else {
                        thirdSelect="month";
                        titleText="3rd Filter";
                        }
                    console.log(activity, month, mode, firstSelect, secondSelect, thirdSelect,actSelected, monthSelected, modeSelected);
                    barChart.options.plugins.title.text = "Accidents by Month | "+titleText+": "+value;
                    barChart.update();
                    mapChange();

                
              }},
        scales: {
            x: {
                title:{
                    text: 'Month',
                    display: false
                    }
            },
                    
            y: {
                title:{
                    text: 'Accidents',
                    display: true
                    },
                ticks: {callback: function(value) {if (value % 1 === 0) {return value;}}}
            }				
                
        }
    },
    data: {
        datasets: [
            {
            backgroundColor:'#cdced6'
    }
        ]
    }
    
});

let barChartDates = [];

async function processBarChartDates() {
    await delay (450);
    /* console.log("barChartDates: ", barChartDates); */
    /* Reduce the array of all accident dates  to an object with counts of unique months */
    let dateData = barChartDates.reduce((allDates, month) => {
            const currentCount = allDates[month] ?? 0;
            return {
            ...allDates,
            [month]: currentCount + 1,
            };
    }, {});


    /* Convert the dates and counts to array and sort by month */
    let dateDataArr=Object.entries(dateData);
    sortByMonth(dateDataArr);
    function sortByMonth(arr) {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        arr.sort(function(a, b){
        return months.indexOf(a[0]) - months.indexOf(b[0]);
    });
    }
    let barChartKeys = Object.keys(Object.fromEntries(dateDataArr));
    barChartValues=Object.values(Object.fromEntries(dateDataArr));
    
    /* // Update the bar chart with the labels and values */
    barChart.data.labels = barChartKeys;
    barChart.data.datasets[0].data=barChartValues;
    
    // Reset highlighting of previously selected month
    const dataset = barChart.data.datasets[0];
        dataset.borderWidth = [];
        dataset.borderColor = [];
        for (let i = 0; i < dataset.data.length; i++) {
            dataset.borderWidth[i] = 1;
            dataset.borderColor[i] = "rgba(0, 0, 0, 0.1)";
            }
    barChart.options.plugins.title.text = "Accidents by Month";
    barChart.update();
}