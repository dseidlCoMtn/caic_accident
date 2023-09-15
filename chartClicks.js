function aTypeOnClick(points){
    if (points.length) {
    aTypeSelected = 1;
    const clickedPoint = points[0];
    aType = barChartCanvas.data.labels[clickedPoint.index];
    const value = barChartCanvas.data.datasets[clickedPoint.datasetIndex].data[clickedPoint.index];
    const actLabels = barChartCanvas.options.scales.x.ticks;
    const dataset = barChartCanvas.data.datasets[0];
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
    if (monthSelected ==0 && modeSelected==0 && firstSelect==0 && roseSelected==0 && rSelected==0 && dSelected==0) {
        firstSelect= "aType";
        titleText="1st Filter";
        barChartDates.length=0;
        processBarChartDates();
        barChartModeArr.length=0;
        processBarChartMode();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        pieRArr.length=0;
        processRScale();
        pieDArr.length=0;
        processDScale();
        }
    else if (firstSelect == "aType") {
        titleText="1st Filter";
        monthSelected=0,month=0,modeSelected=0,mode=0,roseSelected=0;
        rSelected=0,rScale=0,dSelected=0,dScale=0;
        secondSelect=0,thirdSelect=0,fourthSelect=0, fifthSelect=0, sixthSelect=0;
        barChartDates.length=0;
        processBarChartDates();
        barChartModeArr.length=0;
        processBarChartMode();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        pieRArr.length=0;
        processRScale();
        pieDArr.length=0;
        processDScale();
        }
    else if ((secondSelect==0 && firstSelect=="mode") || (secondSelect=="aType" && firstSelect=="mode"))  {
        secondSelect="aType";
        titleText="2nd Filter";
        thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0;
        roseSelected=0;
        rSelected=0,dSelected=0,rScale=0,dScale=0;
        barChartDates.length=0;
        processBarChartDates();
        pieRArr.length=0, pieDArr.length=0;
        processRScale();
        processDScale();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        }
    else if ((secondSelect==0 && firstSelect=="month") || (secondSelect=="aType" && firstSelect=="month"))  {
        secondSelect="aType";
        titleText="2nd Filter";
        thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
        modeSelected=0,mode = 0;
        rSelected=0,dSelected=0,rScale=0,dScale=0;
        roseSelected=0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieRArr.length=0, pieDArr.length=0;
        processRScale();
        processDScale();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        }
    else if ((secondSelect==0 && firstSelect=="rose") || (secondSelect=="aType" && firstSelect=="rose"))  {
        secondSelect="aType";
        titleText="2nd Filter";
        thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
        modeSelected=0,mode = 0;
        monthSelected=0,month = 0;
        rSelected=0,dSelected=0,rScale=0,dScale=0;
        pieRArr.length=0, pieDArr.length=0;
        processRScale();
        processDScale();
        barChartModeArr.length=0;
        processBarChartMode();
        barChartDates.length=0;
        processBarChartDates();
        }
    else if ((secondSelect==0 && firstSelect=="rScale") || (secondSelect=="aType" && firstSelect=="rScale"))  {
        secondSelect="aType";
        titleText="2nd Filter";
        thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
        modeSelected=0,mode = 0;
        monthSelected=0,month = 0;
        roseSelected=0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        barChartModeArr.length=0;
        processBarChartMode();
        barChartDates.length=0;
        processBarChartDates();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose()
        }
    else if ((secondSelect==0 && firstSelect=="dScale") || (secondSelect=="aType" && firstSelect=="dScale"))  {
        secondSelect="aType";
        titleText="2nd Filter";
        thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
        modeSelected=0,mode = 0;
        monthSelected=0,month = 0;
        roseSelected=0;
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
        barChartModeArr.length=0;
        processBarChartMode();
        barChartDates.length=0;
        processBarChartDates();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose()
        }
    else if ((thirdSelect==0 && secondSelect=="rose" && firstSelect=="month") || (thirdSelect==0 && secondSelect=="month" && firstSelect=="rose") || (thirdSelect=="aType" && secondSelect=="rose" && firstSelect=="month") || (thirdSelect=="aType" && secondSelect=="month" && firstSelect=="rose")){
        thirdSelect="aType";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        modeSelected=0,mode = 0;
        rSelected=0,rScale=0;
        dSelected=0,dScale=0;
        pieRArr.length=0, pieDArr.length=0;
        processDScale();
        processRScale();
        barChartModeArr.length=0;
        processBarChartMode();
        }
    else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="rose" || thirdSelect=="aType" && secondSelect=="rose" && firstSelect=="mode" || thirdSelect=="aType" && secondSelect=="mode" && firstSelect=="rose"){
        thirdSelect="aType";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month = 0;
        rSelected=0,rScale=0;
        dSelected=0,dScale=0;
        pieRArr.length=0, pieDArr.length=0;
        processDScale();
        processRScale();
        barChartDates.length=0;
        processBarChartDates();
        }
    else if (thirdSelect==0 && secondSelect=="month" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="month" || thirdSelect=="aType" && secondSelect=="month" && firstSelect=="mode" || thirdSelect=="aType" && secondSelect=="mode" && firstSelect=="month"){
        thirdSelect="aType";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        rSelected=0,rScale=0;
        dSelected=0,dScale=0;
        pieRArr.length=0, pieDArr.length=0;
        processDScale();
        processRScale();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        }
    else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="rose" || thirdSelect=="aType" && secondSelect=="rose" && firstSelect=="rScale" || thirdSelect=="aType" && secondSelect=="rScale" && firstSelect=="rose"){
        thirdSelect="aType";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month = 0;
        modeSelected=0,mode = 0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        barChartModeArr.length=0;
        processBarChartMode();
        barChartDates.length=0;
        processBarChartDates();
        }
    else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="rose" || thirdSelect=="aType" && secondSelect=="rose" && firstSelect=="dScale" || thirdSelect=="aType" && secondSelect=="dScale" && firstSelect=="rose"){
        thirdSelect="aType";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month = 0;
        modeSelected=0,mode = 0;
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
        barChartModeArr.length=0;
        processBarChartMode();
        barChartDates.length=0;
        processBarChartDates();
        }
    else if (thirdSelect==0 && secondSelect=="month" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="month" || thirdSelect=="aType" && secondSelect=="month" && firstSelect=="rScale" || thirdSelect=="aType" && secondSelect=="rScale" && firstSelect=="month"){
        thirdSelect="aType";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        modeSelected=0,mode = 0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        barChartModeArr.length=0;
        processBarChartMode();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        }
    else if (thirdSelect==0 && secondSelect=="month" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="month" || thirdSelect=="aType" && secondSelect=="month" && firstSelect=="dScale" || thirdSelect=="aType" && secondSelect=="dScale" && firstSelect=="month"){
        thirdSelect="aType";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        modeSelected=0,mode = 0;
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
        barChartModeArr.length=0;
        processBarChartMode();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        }
    else if (thirdSelect==0 && secondSelect=="mode" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="mode" || thirdSelect=="aType" && secondSelect=="mode" && firstSelect=="rScale" || thirdSelect=="aType" && secondSelect=="rScale" && firstSelect=="mode"){
        thirdSelect="aType";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        monthSelected=0,month = 0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        barChartDates.length=0;
        processBarChartDates();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        }
    else if (thirdSelect==0 && secondSelect=="mode" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="mode" || thirdSelect=="aType" && secondSelect=="mode" && firstSelect=="dScale" || thirdSelect=="aType" && secondSelect=="dScale" && firstSelect=="mode"){
        thirdSelect="aType";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        monthSelected=0,month = 0;
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
        barChartDates.length=0;
        processBarChartDates();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        }
    else if (thirdSelect==0 && secondSelect=="rScale" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="rScale" || thirdSelect=="aType" && secondSelect=="rScale" && firstSelect=="dScale" || thirdSelect=="aType" && secondSelect=="dScale" && firstSelect=="rScale"){
        thirdSelect="aType";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        monthSelected=0,month = 0;
        modeSelected=0,mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        barChartDates.length=0;
        processBarChartDates();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && mode==0) || (fourthSelect=="aType" && dscale==0 && mode==0)){
        fourthSelect="aType";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && mode==0) || (fourthSelect=="aType" && rscale==0 && mode==0)){
        fourthSelect="aType";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && mode==0) || (fourthSelect=="aType" && month==0 && mode==0)){
        fourthSelect="aType";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        monthSelected=0,month = 0;
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && dScale==0) || (fourthSelect=="aType" && month==0 && dScale==0)){
        fourthSelect="aType";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        monthSelected=0,month = 0;
        barChartDates.length=0;
        processBarChartDates();
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && rScale==0) || (fourthSelect=="aType" && month==0 && rScale==0)){
        fourthSelect="aType";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        monthSelected=0,month = 0;
        barChartDates.length=0;
        processBarChartDates();
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && roseSelected==0) || (fourthSelect=="aType" && dScale==0 && roseSelected==0)){
        fourthSelect="aType";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && roseSelected==0) || (fourthSelect=="aType" && rScale==0 && roseSelected==0)){
        fourthSelect="aType";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && roseSelected==0) || (fourthSelect=="aType" && month==0 && roseSelected==0)){
        fourthSelect="aType";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        monthSelected=0,month = 0;
        barChartDates.length=0;
        processBarChartDates();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0 && roseSelected==0) || (fourthSelect=="aType" && mode==0 && roseSelected==0)){
        fourthSelect="aType";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && dScale==0) || (fourthSelect=="aType" && mode==0 && dScale==0)){
        fourthSelect="aType";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();                                                                    
        rSelected=0, rScale = 0;
        pieRArr.length=0;
        processRScale();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0) || (fourthSelect=="aType" && dScale==0)){
        fourthSelect="aType";
        titleText="5th Filter"
        sixthSelect=0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0) || (fourthSelect=="aType" && rScale==0)){
        fourthSelect="aType";
        titleText="5th Filter"
        sixthSelect=0;
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && roseSelected==0) || (fourthSelect=="aType" && roseSelected==0)){
        fourthSelect="aType";
        titleText="5th Filter"
        sixthSelect=0;
        roseSelected=0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0) || (fourthSelect=="aType" && mode==0)){
        fourthSelect="aType";
        titleText="5th Filter"
        sixthSelect=0;
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0) || (fourthSelect=="aType" && month==0)){
        fourthSelect="aType";
        titleText="5th Filter"
        sixthSelect=0;
        monthSelected=0,month = 0;
        barChartDates.length=0;
        processBarChartDates();
    }
    else  {
        sixthSelect="aType";
        titleText="6th Filter";
        }
    //console.log(aType, month, mode, firstSelect, secondSelect, thirdSelect,aTypeSelected, monthSelected, modeSelected);
    barChartCanvas.options.plugins.title.text = "Accidents by Avalanche Type | "+titleText+": "+value;
    barChartCanvas.update();
    mapChange();
    }
}

function monthOnClick(points){
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
        if (aTypeSelected==0 && modeSelected==0 && firstSelect==0 && roseSelected==0 && rScale==0 && dScale==0) {
            firstSelect= "month";
            titleText="1st Filter";
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartModeArr.length=0;
            processBarChartMode();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if (firstSelect == "month") {
            titleText="1st Filter";
            aTypeSelected=0,aType=0,modeSelected=0,mode=0,roseSelected=0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            secondSelect=0,thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartModeArr.length=0;
            processBarChartMode();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if ((secondSelect==0 && firstSelect=="aType") || (secondSelect=="month" && firstSelect=="aType"))  {
            secondSelect="month";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            mode=0, modeSelected=0, roseSelected =0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            barChartModeArr.length=0;
            processBarChartMode();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if ((secondSelect==0 && firstSelect=="mode") || (secondSelect=="month" && firstSelect=="mode")) {
            secondSelect="month";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, roseSelected =0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if ((secondSelect==0 && firstSelect=="rose") || (secondSelect=="month" && firstSelect=="rose")) {
            secondSelect="month";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, mode=0, modeSelected =0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if ((secondSelect==0 && firstSelect=="rScale") || (secondSelect=="month" && firstSelect=="rScale")) {
            secondSelect="month";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, mode=0, modeSelected =0;
            dSelected=0,dScale=0, roseSelected=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartModeArr.length=0;
            processBarChartMode();
            pieDArr.length=0;
            processDScale();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            }
        else if ((secondSelect==0 && firstSelect=="dScale") || (secondSelect=="month" && firstSelect=="dScale")) {
            secondSelect="month";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, mode=0, modeSelected =0;
            rSelected=0,rScale=0, roseSelected=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            }
        else if ((thirdSelect==0 && secondSelect=="rose" && firstSelect=="aType") || (thirdSelect==0 && secondSelect=="aType" && firstSelect=="rose") || (thirdSelect=="month" && secondSelect=="rose" && firstSelect=="aType") || (thirdSelect=="month" && secondSelect=="aType" && firstSelect=="rose")){
            thirdSelect="month";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            modeSelected=0,mode = 0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="rose" || thirdSelect=="month" && secondSelect=="rose" && firstSelect=="mode" || thirdSelect=="month" && secondSelect=="mode" && firstSelect=="rose"){
            thirdSelect="month";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aTypeSelected=0,aType = 0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="aType" || thirdSelect=="month" && secondSelect=="aType" && firstSelect=="mode" || thirdSelect=="month" && secondSelect=="mode" && firstSelect=="aType"){
            thirdSelect="month";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="aType" || thirdSelect=="month" && secondSelect=="aType" && firstSelect=="dScale" || thirdSelect=="month" && secondSelect=="dScale" && firstSelect=="aType"){
            thirdSelect="month";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            rSelected=0,rScale=0,modeSelected=0,mode=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            barChartModeArr.length=0;
            processBarChartMode();
            }
        else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="aType" || thirdSelect=="month" && secondSelect=="aType" && firstSelect=="rScale" || thirdSelect=="month" && secondSelect=="rScale" && firstSelect=="aType"){
            thirdSelect="month";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            dSelected=0,dScale=0,modeSelected=0,mode=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieDArr.length=0;
            processDScale();
            barChartModeArr.length=0;
            processBarChartMode();
            }
        else if (thirdSelect==0 && secondSelect=="mode" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="mode" || thirdSelect=="month" && secondSelect=="mode" && firstSelect=="dScale" || thirdSelect=="month" && secondSelect=="dScale" && firstSelect=="mode"){
            thirdSelect="month";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            rSelected=0,rScale=0,aTypeSelected=0,aType = 0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            barChartATypeArr.length=0;
            updateATypeChart();
            }
        else if (thirdSelect==0 && secondSelect=="mode" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="mode" || thirdSelect=="month" && secondSelect=="mode" && firstSelect=="rScale" || thirdSelect=="month" && secondSelect=="rScale" && firstSelect=="mode"){
            thirdSelect="month";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            dSelected=0,dScale=0,aTypeSelected=0,aType = 0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieDArr.length=0;
            processDScale();
            barChartATypeArr.length=0;
            updateATypeChart();
            }
        else if (thirdSelect==0 && secondSelect=="dScale" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="dScale" || thirdSelect=="month" && secondSelect=="dScale" && firstSelect=="rScale" || thirdSelect=="month" && secondSelect=="rScale" && firstSelect=="dScale"){
            thirdSelect="month";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            modeSelected=0,mode=0,aTypeSelected=0,aType = 0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartModeArr.length=0;
            processBarChartMode();
            }
        else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="rose" || thirdSelect=="month" && secondSelect=="rose" && firstSelect=="rScale" || thirdSelect=="month" && secondSelect=="rScale" && firstSelect=="rose"){
            thirdSelect="month";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            modeSelected=0,mode=0,aTypeSelected=0,aType = 0;
            dSelected=0,dScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartModeArr.length=0;
            processBarChartMode();
            pieDArr.length=0;
            processDScale();  
            }	
        else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="rose" || thirdSelect=="month" && secondSelect=="rose" && firstSelect=="dScale" || thirdSelect=="month" && secondSelect=="dScale" && firstSelect=="rose"){
            thirdSelect="month";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            modeSelected=0,mode=0,aTypeSelected=0,aType = 0;
            rSelected=0,rScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            } 
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0 && roseSelected==0) || (fourthSelect=="month" && mode==0 && roseSelected==0)){
            fourthSelect="month";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && roseSelected==0) || (fourthSelect=="month" && rScale==0 && roseSelected==0)){
            fourthSelect="month";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
        }	
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && roseSelected==0) || (fourthSelect=="month" && dScale==0 && roseSelected==0)){
            fourthSelect="month";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            dSelected=0,dScale=0;
            pieDArr.length=0;
            processDScale();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && rScale==0) || (fourthSelect=="month" && dScale==0 && rScale==0)){
            fourthSelect="month";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            dSelected=0,dScale=0;
            pieDArr.length=0;
            processDScale();
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
        }	
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && aType==0) || (fourthSelect=="month" && dScale==0 && aType==0)){
            fourthSelect="month";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            dSelected=0,dScale=0;
            pieDArr.length=0;
            processDScale();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }	
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && aType==0) || (fourthSelect=="month" && rScale==0 && aType==0)){
            fourthSelect="month";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && roseSelected==0 && aType==0) || (fourthSelect=="month" && roseSelected==0 && aType==0)){
            fourthSelect="month";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0 && aType==0) || (fourthSelect=="month" && mode==0 && aType==0)){
            fourthSelect="month";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0 && dScale==0) || (fourthSelect=="month" && mode==0 && dScale==0)){
            fourthSelect="month";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            dSelected=0,dScale=0;
            pieDArr.length=0;
            processDScale();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0 && rScale==0) || (fourthSelect=="month" && mode==0 && rScale==0)){
            fourthSelect="month";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0) || (fifthSelect=="month" && dScale==0)){
            fifthSelect="month";
            titleText="5th Filter"
            sixthSelect=0;
            dSelected=0,dScale=0;
            pieDArr.length=0;
            processDScale();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0) || (fifthSelect=="month" && rScale==0)){
            fifthSelect="month";
            titleText="5th Filter"
            sixthSelect=0;
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && roseSelected==0) || (fifthSelect=="month" && roseSelected==0)){
            fifthSelect="month";
            titleText="5th Filter"
            sixthSelect=0;
            roseSelected=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0) || (fifthSelect=="month" && mode==0)){
            fifthSelect="month";
            titleText="5th Filter"
            sixthSelect=0;
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && aType==0) || (fifthSelect=="month" && aType==0)){
            fifthSelect="month";
            titleText="5th Filter"
            sixthSelect=0;
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else {
            sixthSelect="month";
            titleText="6th Filter";
            }
        //console.log(aType, month, mode, firstSelect, secondSelect, thirdSelect,aTypeSelected, monthSelected, modeSelected);
        barChart.options.plugins.title.text = "Accidents by Month | "+titleText+": "+value;
        barChart.update();
        mapChange();
    }
}

function modeOnClick(points){
    if (points.length) {
        modeSelected = 1;
        const clickedPoint = points[0];
        mode = barChartMode.data.labels[clickedPoint.index];
        const value = barChartMode.data.datasets[clickedPoint.datasetIndex].data[clickedPoint.index];
        const actLabels = barChartMode.options.scales.x.ticks;
        const dataset = barChartMode.data.datasets[0];
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
        if (aTypeSelected==0 && monthSelected==0 && firstSelect==0 && roseSelected==0 && rScale==0 && dScale==0) {
            firstSelect= "mode";
            titleText="1st Filter";
            barChartATypeArr.length=0;
            updateATypeChart();
            monthSelected=0,month = 0;
            barChartDates.length=0;
            processBarChartDates();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if (firstSelect == "mode") {
            titleText="1st Filter";
            aTypeSelected=0,aType=0,monthSelected=0,month = 0,roseSelected=0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            secondSelect=0,thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if ((secondSelect==0 && firstSelect=="aType") || (secondSelect=="mode" && firstSelect=="aType"))  {
            secondSelect="mode";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            monthSelected=0,month = 0, roseSelected =0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            barChartDates.length=0;
            processBarChartDates();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if ((secondSelect==0 && firstSelect=="month") || (secondSelect=="mode" && firstSelect=="month")) {
            secondSelect="mode";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, roseSelected =0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if ((secondSelect==0 && firstSelect=="rose") || (secondSelect=="mode" && firstSelect=="rose")) {
            secondSelect="mode";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, monthSelected=0,month=0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if ((secondSelect==0 && firstSelect=="rScale") || (secondSelect=="mode" && firstSelect=="rScale")) {
            secondSelect="mode";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, monthSelected=0,month=0;
            dSelected=0,dScale=0, roseSelected=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            pieDArr.length=0;
            processDScale();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            }
        else if ((secondSelect==0 && firstSelect=="dScale") || (secondSelect=="mode" && firstSelect=="dScale")) {
            secondSelect="mode";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, monthSelected=0,month=0;
            rSelected=0,rScale=0, roseSelected=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            pieRArr.length=0;
            processRScale();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            }
        else if ((thirdSelect==0 && secondSelect=="rose" && firstSelect=="aType") || (thirdSelect==0 && secondSelect=="aType" && firstSelect=="rose") || (thirdSelect=="mode" && secondSelect=="rose" && firstSelect=="aType") || (thirdSelect=="mode" && secondSelect=="aType" && firstSelect=="rose")){
            thirdSelect="mode";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            barChartDates.length=0;
            processBarChartDates();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="month" || thirdSelect==0 && secondSelect=="month" && firstSelect=="rose" || thirdSelect=="mode" && secondSelect=="rose" && firstSelect=="month" || thirdSelect=="mode" && secondSelect=="month" && firstSelect=="rose"){
            thirdSelect="mode";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aTypeSelected=0,aType = 0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="month" || thirdSelect==0 && secondSelect=="month" && firstSelect=="aType" || thirdSelect=="mode" && secondSelect=="aType" && firstSelect=="month" || thirdSelect=="mode" && secondSelect=="month" && firstSelect=="aType"){
            thirdSelect="mode";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            rSelected=0,rScale=0,dSelected=0,dScale=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            pieDArr.length=0;
            processDScale();
            }
        else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="aType" || thirdSelect=="mode" && secondSelect=="aType" && firstSelect=="dScale" || thirdSelect=="mode" && secondSelect=="dScale" && firstSelect=="aType"){
            thirdSelect="mode";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            rSelected=0,rScale=0,monthSelected=0,month=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            barChartDates.length=0;
            processBarChartDates();
            }
        else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="aType" || thirdSelect=="mode" && secondSelect=="aType" && firstSelect=="rScale" || thirdSelect=="mode" && secondSelect=="rScale" && firstSelect=="aType"){
            thirdSelect="mode";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            dSelected=0,dScale=0,monthSelected=0,month=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieDArr.length=0;
            processDScale();
            barChartDates.length=0;
            processBarChartDates();
            }
        else if (thirdSelect==0 && secondSelect=="month" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="month" || thirdSelect=="mode" && secondSelect=="month" && firstSelect=="dScale" || thirdSelect=="mode" && secondSelect=="dScale" && firstSelect=="month"){
            thirdSelect="mode";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            rSelected=0,rScale=0,aTypeSelected=0,aType = 0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            barChartATypeArr.length=0;
            updateATypeChart();
            }
        else if (thirdSelect==0 && secondSelect=="month" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="month" || thirdSelect=="mode" && secondSelect=="month" && firstSelect=="rScale" || thirdSelect=="mode" && secondSelect=="rScale" && firstSelect=="month"){
            thirdSelect="mode";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            dSelected=0,dScale=0,aTypeSelected=0,aType = 0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieDArr.length=0;
            processDScale();
            barChartATypeArr.length=0;
            updateATypeChart();
            }
        else if (thirdSelect==0 && secondSelect=="dScale" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="dScale" || thirdSelect=="mode" && secondSelect=="dScale" && firstSelect=="rScale" || thirdSelect=="mode" && secondSelect=="rScale" && firstSelect=="dScale"){
            thirdSelect="mode";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            monthSelected=0,month=0,aTypeSelected=0,aType = 0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            }
        else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="rose" || thirdSelect=="mode" && secondSelect=="rose" && firstSelect=="rScale" || thirdSelect=="mode" && secondSelect=="rScale" && firstSelect=="rose"){
            thirdSelect="mode";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0,aTypeSelected=0,aType = 0;
            dSelected=0,dScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            pieDArr.length=0;
            processDScale();  
            }	
        else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="rose" || thirdSelect=="mode" && secondSelect=="rose" && firstSelect=="dScale" || thirdSelect=="mode" && secondSelect=="dScale" && firstSelect=="rose"){
            thirdSelect="mode";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0,aTypeSelected=0,aType = 0;
            rSelected=0,rScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            pieRArr.length=0;
            processRScale();
            } 
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && roseSelected==0) || (fourthSelect=="mode" && month==0 && roseSelected==0)){
            fourthSelect="mode";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            monthSelected=0,month=0;
            barChartDates.length=0;
            processBarChartDates();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && roseSelected==0) || (fourthSelect=="mode" && rScale==0 && roseSelected==0)){
            fourthSelect="mode";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
        }	
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && roseSelected==0) || (fourthSelect=="mode" && dScale==0 && roseSelected==0)){
            fourthSelect="mode";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            dSelected=0,dScale=0;
            pieDArr.length=0;
            processDScale();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && rScale==0) || (fourthSelect=="mode" && dScale==0 && rScale==0)){
            fourthSelect="mode";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            dSelected=0,dScale=0;
            pieDArr.length=0;
            processDScale();
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
        }	
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && aType==0) || (fourthSelect=="mode" && dScale==0 && aType==0)){
            fourthSelect="mode";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            dSelected=0,dScale=0;
            pieDArr.length=0;
            processDScale();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }	
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && aType==0) || (fourthSelect=="mode" && rScale==0 && aType==0)){
            fourthSelect="mode";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && roseSelected==0 && aType==0) || (fourthSelect=="mode" && roseSelected==0 && aType==0)){
            fourthSelect="mode";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && aType==0) || (fourthSelect=="mode" && month==0 && aType==0)){
            fourthSelect="mode";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0;
            barChartDates.length=0;
            processBarChartDates();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && dScale==0) || (fourthSelect=="mode" && month==0 && dScale==0)){
            fourthSelect="mode";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0;
            barChartDates.length=0;
            processBarChartDates();
            dSelected=0,dScale=0;
            pieDArr.length=0;
            processDScale();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && rScale==0) || (fourthSelect=="mode" && month==0 && rScale==0)){
            fourthSelect="mode";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0;
            barChartDates.length=0;
            processBarChartDates();
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0) || (fifthSelect=="mode" && dScale==0)){
            fifthSelect="mode";
            titleText="5th Filter"
            sixthSelect=0;
            dSelected=0,dScale=0;
            pieDArr.length=0;
            processDScale();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0) || (fifthSelect=="mode" && rScale==0)){
            fifthSelect="mode";
            titleText="5th Filter"
            sixthSelect=0;
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && roseSelected==0) || (fifthSelect=="mode" && roseSelected==0)){
            fifthSelect="mode";
            titleText="5th Filter"
            sixthSelect=0;
            roseSelected=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0) || (fifthSelect=="mode" && month==0)){
            fifthSelect="mode";
            titleText="5th Filter"
            sixthSelect=0;
            monthSelected=0,month=0;
            barChartDates.length=0;
            processBarChartDates();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && aType==0) || (fifthSelect=="mode" && aType==0)){
            fifthSelect="mode";
            titleText="5th Filter"
            sixthSelect=0;
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else {
            sixthSelect="mode";
            titleText="6th Filter";
            }
        //console.log(aType, month, mode, firstSelect, secondSelect, thirdSelect, aTypeSelected, monthSelected, modeSelected);
        barChartMode.options.plugins.title.text = "Accidents by Travel Mode | "+titleText+": "+value;
        barChartMode.update();
        mapChange();
  }
}

function rScaleOnClick(points){
    if (points.length) {
    rSelected = 1;
    const clickedPoint = points[0];
    rScale = pieR.data.labels[clickedPoint.index];
    const value = pieR.data.datasets[clickedPoint.datasetIndex].data[clickedPoint.index];
    const dataset = pieR.data.datasets[0];
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
    if (aTypeSelected==0 && monthSelected==0 && firstSelect==0 && roseSelected==0 && mode==0 && dScale==0) {
        firstSelect= "rScale";
        titleText="1st Filter";
        barChartATypeArr.length=0;
        updateATypeChart();
        monthSelected=0,month = 0;
        barChartDates.length=0;
        processBarChartDates();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        }
    else if (firstSelect == "rScale") {
        titleText="1st Filter";
        aTypeSelected=0,aType=0,monthSelected=0,month=0,roseSelected=0;
        dSelected=0,dScale=0;
        secondSelect=0,thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        }
    else if ((secondSelect==0 && firstSelect=="aType") || (secondSelect=="rScale" && firstSelect=="aType"))  {
        secondSelect="rScale";
        titleText="2nd Filter";
        thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month = 0, roseSelected =0;
        dSelected=0,dScale=0;
        barChartDates.length=0;
        processBarChartDates();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        }
    else if ((secondSelect==0 && firstSelect=="month") || (secondSelect=="rScale" && firstSelect=="month")) {
        secondSelect="rScale";
        titleText="2nd Filter";
        thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
        aType=0, aTypeSelected=0, roseSelected =0;
        dSelected=0,dScale=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        }
    else if ((secondSelect==0 && firstSelect=="rose") || (secondSelect=="rScale" && firstSelect=="rose")) {
        secondSelect="rScale";
        titleText="2nd Filter";
        thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
        aType=0, aTypeSelected=0, monthSelected=0,month=0;
        dSelected=0,dScale=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        }
    else if ((secondSelect==0 && firstSelect=="mode") || (secondSelect=="rScale" && firstSelect=="mode")) {
        secondSelect="rScale";
        titleText="2nd Filter";
        thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
        aType=0, aTypeSelected=0, monthSelected=0,month=0;
        dSelected=0,dScale=0, roseSelected=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        pieDArr.length=0;
        processDScale();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        }
    else if ((secondSelect==0 && firstSelect=="dScale") || (secondSelect=="rScale" && firstSelect=="dScale")) {
        secondSelect="rScale";
        titleText="2nd Filter";
        thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
        aType=0, aTypeSelected=0, monthSelected=0,month=0;
        roseSelected=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        }
    else if ((thirdSelect==0 && secondSelect=="rose" && firstSelect=="aType") || (thirdSelect==0 && secondSelect=="aType" && firstSelect=="rose") || (thirdSelect=="rScale" && secondSelect=="rose" && firstSelect=="aType") || (thirdSelect=="rScale" && secondSelect=="aType" && firstSelect=="rose")){
        thirdSelect="rScale";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0;
        dSelected=0,dScale=0;
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        }
    else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="month" || thirdSelect==0 && secondSelect=="month" && firstSelect=="rose" || thirdSelect=="rScale" && secondSelect=="rose" && firstSelect=="month" || thirdSelect=="rScale" && secondSelect=="month" && firstSelect=="rose"){
        thirdSelect="rScale";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        aTypeSelected=0,aType = 0;
        dSelected=0,dScale=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        }
    else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="month" || thirdSelect==0 && secondSelect=="month" && firstSelect=="aType" || thirdSelect=="rScale" && secondSelect=="aType" && firstSelect=="month" || thirdSelect=="rScale" && secondSelect=="month" && firstSelect=="aType"){
        thirdSelect="rScale";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        dSelected=0,dScale=0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        }
    else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="aType" || thirdSelect=="rScale" && secondSelect=="aType" && firstSelect=="dScale" || thirdSelect=="rScale" && secondSelect=="dScale" && firstSelect=="aType"){
        thirdSelect="rScale";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        monthSelected=0,month=0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        barChartDates.length=0;
        processBarChartDates();
        }
    else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="aType" || thirdSelect=="rScale" && secondSelect=="aType" && firstSelect=="mode" || thirdSelect=="rScale" && secondSelect=="mode" && firstSelect=="aType"){
        thirdSelect="rScale";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        dSelected=0,dScale=0,monthSelected=0,month=0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        pieDArr.length=0;
        processDScale();
        barChartDates.length=0;
        processBarChartDates();
        }
    else if (thirdSelect==0 && secondSelect=="month" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="month" || thirdSelect=="rScale" && secondSelect=="month" && firstSelect=="dScale" || thirdSelect=="rScale" && secondSelect=="dScale" && firstSelect=="month"){
        thirdSelect="rScale";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        aTypeSelected=0,aType = 0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        barChartATypeArr.length=0;
        updateATypeChart();
        }
    else if (thirdSelect==0 && secondSelect=="month" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="month" || thirdSelect=="rScale" && secondSelect=="month" && firstSelect=="mode" || thirdSelect=="rScale" && secondSelect=="mode" && firstSelect=="month"){
        thirdSelect="rScale";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        dSelected=0,dScale=0,aTypeSelected=0,aType = 0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        pieDArr.length=0;
        processDScale();
        barChartATypeArr.length=0;
        updateATypeChart();
        }
    else if (thirdSelect==0 && secondSelect=="dScale" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="dScale" || thirdSelect=="rScale" && secondSelect=="dScale" && firstSelect=="mode" || thirdSelect=="rScale" && secondSelect=="mode" && firstSelect=="dScale"){
        thirdSelect="rScale";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        roseSelected=0;
        monthSelected=0,month=0,aTypeSelected=0,aType = 0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        }
    else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="rose" || thirdSelect=="rScale" && secondSelect=="rose" && firstSelect=="mode" || thirdSelect=="rScale" && secondSelect=="mode" && firstSelect=="rose"){
        thirdSelect="rScale";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0,aTypeSelected=0,aType = 0;
        dSelected=0,dScale=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        pieDArr.length=0;
        processDScale();  
        }	
    else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="dScale" || thirdSelect==0 && secondSelect=="dScale" && firstSelect=="rose" || thirdSelect=="rScale" && secondSelect=="rose" && firstSelect=="dScale" || thirdSelect=="rScale" && secondSelect=="dScale" && firstSelect=="rose"){
        thirdSelect="rScale";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0,aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        } 
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && roseSelected==0) || (fourthSelect=="rScale" && month==0 && roseSelected==0)){
        fourthSelect="rScale";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        roseSelected=0;  
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        monthSelected=0,month=0;
        barChartDates.length=0;
        processBarChartDates();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0 && roseSelected==0) || (fourthSelect=="rScale" && mode==0 && roseSelected==0)){
        fourthSelect="rScale";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        roseSelected=0;  
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }	
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && roseSelected==0) || (fourthSelect=="rScale" && dScale==0 && roseSelected==0)){
        fourthSelect="rScale";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        roseSelected=0;  
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && mode==0) || (fourthSelect=="rScale" && dScale==0 && mode==0)){
        fourthSelect="rScale";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }	
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && aType==0) || (fourthSelect=="rScale" && dScale==0 && aType==0)){
        fourthSelect="rScale";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
    }	
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0 && aType==0) || (fourthSelect=="rScale" && mode==0 && aType==0)){
        fourthSelect="rScale";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && roseSelected==0 && aType==0) || (fourthSelect=="rScale" && roseSelected==0 && aType==0)){
        fourthSelect="rScale";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        roseSelected=0;  
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
        aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && aType==0) || (fourthSelect=="rScale" && month==0 && aType==0)){
        fourthSelect="rScale";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0;
        barChartDates.length=0;
        processBarChartDates();
        aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && dScale==0) || (fourthSelect=="rScale" && month==0 && dScale==0)){
        fourthSelect="rScale";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0;
        barChartDates.length=0;
        processBarChartDates();
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && mode==0) || (fourthSelect=="rScale" && month==0 && mode==0)){
        fourthSelect="rScale";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0;
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0) || (fifthSelect=="rScale" && dScale==0)){
        fifthSelect="rScale";
        titleText="5th Filter"
        sixthSelect=0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0) || (fifthSelect=="rScale" && mode==0)){
        fifthSelect="rScale";
        titleText="5th Filter"
        sixthSelect=0;
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && roseSelected==0) || (fifthSelect=="rScale" && roseSelected==0)){
        fifthSelect="rScale";
        titleText="5th Filter"
        sixthSelect=0;
        roseSelected=0;
        roseData.length=0;
        rosePieChart.filterAll();
        roseFilters = rosePieChart.filters();
        processRose();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0) || (fifthSelect=="rScale" && month==0)){
        fifthSelect="rScale";
        titleText="5th Filter"
        sixthSelect=0;
        monthSelected=0,month=0;
        barChartDates.length=0;
        processBarChartDates();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && aType==0) || (fifthSelect=="rScale" && aType==0)){
        fifthSelect="rScale";
        titleText="5th Filter"
        sixthSelect=0;
        aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
    }
    else {
        sixthSelect="rScale";
        titleText="6th Filter";
        }
    //console.log(aType, month, mode, firstSelect, secondSelect, thirdSelect, aTypeSelected, monthSelected, modeSelected);
    pieR.options.plugins.title.text = "Accidents by R Scale | "+titleText+": "+value;
    pieR.update();
    mapChange();    
    }
}

function dScaleOnClick(points){
    if (points.length) {
        dSelected = 1;
        const clickedPoint = points[0];
        dScale = pieD.data.labels[clickedPoint.index];
        const value = pieD.data.datasets[clickedPoint.datasetIndex].data[clickedPoint.index];
        //const actLabels = pieR.options.scales.x.ticks;
        const dataset = pieD.data.datasets[0];
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
        if (aTypeSelected==0 && monthSelected==0 && firstSelect==0 && roseSelected==0 && mode==0 && rScale==0) {
            firstSelect= "dScale";
            titleText="1st Filter";
            barChartATypeArr.length=0;
            updateATypeChart();
            monthSelected=0,month = 0;
            barChartDates.length=0;
            processBarChartDates();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            }
        else if (firstSelect == "dScale") {
            titleText="1st Filter";
            aTypeSelected=0,aType=0,monthSelected=0,month=0,roseSelected=0;
            rSelected=0,rScale=0;
            secondSelect=0,thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            }
        else if ((secondSelect==0 && firstSelect=="aType") || (secondSelect=="dScale" && firstSelect=="aType"))  {
            secondSelect="dScale";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            monthSelected=0,month = 0, roseSelected =0;
            rSelected=0,rScale=0;
            barChartDates.length=0;
            processBarChartDates();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            }
        else if ((secondSelect==0 && firstSelect=="month") || (secondSelect=="dScale" && firstSelect=="month")) {
            secondSelect="dScale";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, roseSelected =0;
            rSelected=0,rScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            }
        else if ((secondSelect==0 && firstSelect=="rose") || (secondSelect=="dScale" && firstSelect=="rose")) {
            secondSelect="dScale";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, monthSelected=0,month=0;
            rSelected=0,rScale=0
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            }
        else if ((secondSelect==0 && firstSelect=="mode") || (secondSelect=="dScale" && firstSelect=="mode")) {
            secondSelect="dScale";
            titleText="2nd Filter";
            thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, monthSelected=0,month=0;
            rSelected=0,rScale=0, roseSelected=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            pieRArr.length=0;
            processRScale();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            }
        else if ((secondSelect==0 && firstSelect=="rScale") || (secondSelect=="dScale" && firstSelect=="rScale")) {
            secondSelect="dScale";
            titleText="2nd Filter";
            thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aType=0, aTypeSelected=0, monthSelected=0,month=0;
            roseSelected=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            }
        else if ((thirdSelect==0 && secondSelect=="rose" && firstSelect=="aType") || (thirdSelect==0 && secondSelect=="aType" && firstSelect=="rose") || (thirdSelect=="dScale" && secondSelect=="rose" && firstSelect=="aType") || (thirdSelect=="dScale" && secondSelect=="aType" && firstSelect=="rose")){
            thirdSelect="dScale";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0;
            rSelected=0,rScale=0;
            barChartDates.length=0;
            processBarChartDates();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            }
        else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="month" || thirdSelect==0 && secondSelect=="month" && firstSelect=="rose" || thirdSelect=="dScale" && secondSelect=="rose" && firstSelect=="month" || thirdSelect=="dScale" && secondSelect=="month" && firstSelect=="rose"){
            thirdSelect="dScale";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            aTypeSelected=0,aType = 0;
            rSelected=0,rScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            }
        else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="month" || thirdSelect==0 && secondSelect=="month" && firstSelect=="aType" || thirdSelect=="dScale" && secondSelect=="aType" && firstSelect=="month" || thirdSelect=="dScale" && secondSelect=="month" && firstSelect=="aType"){
            thirdSelect="dScale";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            rSelected=0,rScale=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            pieRArr.length=0;
            processRScale();
            }
        else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="aType" || thirdSelect=="dScale" && secondSelect=="aType" && firstSelect=="rScale" || thirdSelect=="dScale" && secondSelect=="rScale" && firstSelect=="aType"){
            thirdSelect="dScale";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            monthSelected=0,month=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            barChartDates.length=0;
            processBarChartDates();
            }
        else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="aType" || thirdSelect=="dScale" && secondSelect=="aType" && firstSelect=="mode" || thirdSelect=="dScale" && secondSelect=="mode" && firstSelect=="aType"){
            thirdSelect="dScale";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            rSelected=0,rScale=0,monthSelected=0,month=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            barChartDates.length=0;
            processBarChartDates();
            }
        else if (thirdSelect==0 && secondSelect=="month" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="month" || thirdSelect=="dScale" && secondSelect=="month" && firstSelect=="rScale" || thirdSelect=="dScale" && secondSelect=="rScale" && firstSelect=="month"){
            thirdSelect="dScale";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            aTypeSelected=0,aType = 0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            barChartATypeArr.length=0;
            updateATypeChart();
            }
        else if (thirdSelect==0 && secondSelect=="month" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="month" || thirdSelect=="dScale" && secondSelect=="month" && firstSelect=="mode" || thirdSelect=="dScale" && secondSelect=="mode" && firstSelect=="month"){
            thirdSelect="dScale";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            rSelected=0,rScale=0,aTypeSelected=0,aType = 0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            pieRArr.length=0;
            processRScale();
            barChartATypeArr.length=0;
            updateATypeChart();
            }
        else if (thirdSelect==0 && secondSelect=="rScale" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="rScale" || thirdSelect=="dScale" && secondSelect=="rScale" && firstSelect=="mode" || thirdSelect=="dScale" && secondSelect=="mode" && firstSelect=="rScale"){
            thirdSelect="dScale";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            roseSelected=0;
            monthSelected=0,month=0,aTypeSelected=0,aType = 0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            }
        else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="rose" || thirdSelect=="dScale" && secondSelect=="rose" && firstSelect=="mode" || thirdSelect=="dScale" && secondSelect=="mode" && firstSelect=="rose"){
            thirdSelect="dScale";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0,aTypeSelected=0,aType = 0;
            rSelected=0,rScale=0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            pieRArr.length=0;
            processRScale();  
            }	
        else if (thirdSelect==0 && secondSelect=="rose" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="rose" || thirdSelect=="dScale" && secondSelect=="rose" && firstSelect=="rScale" || thirdSelect=="dScale" && secondSelect=="rScale" && firstSelect=="rose"){
            thirdSelect="dScale";
            titleText="3rd Filter";
            fourthSelect=0,fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0,aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
            barChartDates.length=0;
            processBarChartDates();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            } 
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && roseSelected==0) || (fourthSelect=="dScale" && month==0 && roseSelected==0)){
            fourthSelect="dScale";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            monthSelected=0,month=0;
            barChartDates.length=0;
            processBarChartDates();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0 && roseSelected==0) || (fourthSelect=="dScale" && mode==0 && roseSelected==0)){
            fourthSelect="dScale";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
        }	
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && roseSelected==0) || (fourthSelect=="dScale" && rScale==0 && roseSelected==0)){
            fourthSelect="dScale";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && mode==0) || (fourthSelect=="dScale" && rScale==0 && mode==0)){
            fourthSelect="dScale";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
        }	
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && aType==0) || (fourthSelect=="dScale" && rScale==0 && aType==0)){
            fourthSelect="dScale";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }	
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0 && aType==0) || (fourthSelect=="dScale" && mode==0 && aType==0)){
            fourthSelect="dScale";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && roseSelected==0 && aType==0) || (fourthSelect=="dScale" && roseSelected==0 && aType==0)){
            fourthSelect="dScale";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            roseSelected=0;  
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && aType==0) || (fourthSelect=="dScale" && month==0 && aType==0)){
            fourthSelect="dScale";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0;
            barChartDates.length=0;
            processBarChartDates();
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && rScale==0) || (fourthSelect=="dScale" && month==0 && rScale==0)){
            fourthSelect="dScale";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0;
            barChartDates.length=0;
            processBarChartDates();
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
        }
        else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && mode==0) || (fourthSelect=="dScale" && month==0 && mode==0)){
            fourthSelect="dScale";
            titleText="4th Filter"
            fifthSelect=0,sixthSelect=0;
            monthSelected=0,month=0;
            barChartDates.length=0;
            processBarChartDates();
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0) || (fifthSelect=="dScale" && rScale==0)){
            fifthSelect="dScale";
            titleText="5th Filter"
            sixthSelect=0;
            rSelected=0,rScale=0;
            pieRArr.length=0;
            processRScale();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0) || (fifthSelect=="dScale" && mode==0)){
            fifthSelect="dScale";
            titleText="5th Filter"
            sixthSelect=0;
            modeSelected=0, mode = 0;
            barChartModeArr.length=0;
            processBarChartMode();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && roseSelected==0) || (fifthSelect=="dScale" && roseSelected==0)){
            fifthSelect="dScale";
            titleText="5th Filter"
            sixthSelect=0;
            roseSelected=0;
            roseData.length=0;
            rosePieChart.filterAll();
            roseFilters = rosePieChart.filters();
            processRose();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0) || (fifthSelect=="dScale" && month==0)){
            fifthSelect="dScale";
            titleText="5th Filter"
            sixthSelect=0;
            monthSelected=0,month=0;
            barChartDates.length=0;
            processBarChartDates();
        }
        else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && aType==0) || (fifthSelect=="dScale" && aType==0)){
            fifthSelect="dScale";
            titleText="5th Filter"
            sixthSelect=0;
            aTypeSelected=0,aType = 0;
            barChartATypeArr.length=0;
            updateATypeChart();
        }
        else {
            sixthSelect="dScale";
            titleText="6th Filter";
            }
        //console.log(aType, month, mode, firstSelect, secondSelect, thirdSelect, aTypeSelected, monthSelected, modeSelected);
        pieD.options.plugins.title.text = "Accidents by D Scale | "+titleText+": "+value;
        pieD.update();
        mapChange();
  }
}

function roseOnClick(){
    roseSelected = 1;
    roseData.length=0;
    if (aTypeSelected==0 && monthSelected==0 && firstSelect==0 && dScale==0 && mode==0 && rScale==0) {
        firstSelect= "rose";
        titleText="1st Filter";
        barChartATypeArr.length=0;
        updateATypeChart();
        monthSelected=0,month = 0;
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        pieRArr.length=0;
        processRScale();
        }
    else if (firstSelect == "rose") {
        titleText="1st Filter";
        aTypeSelected=0,aType=0,monthSelected=0,month=0,
        dSelected=0,dScale=0,rSelected=0,rScale=0;
        secondSelect=0,thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        pieRArr.length=0;
        processRScale();
        }
    else if ((secondSelect==0 && firstSelect=="aType") || (secondSelect=="rose" && firstSelect=="aType"))  {
        secondSelect="rose";
        titleText="2nd Filter";
        thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
        dSelected=0,dScale=0,monthSelected=0,month=0;
        rSelected=0,rScale=0;
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        pieRArr.length=0;
        processRScale();
        }
    else if ((secondSelect==0 && firstSelect=="month") || (secondSelect=="rose" && firstSelect=="month")) {
        secondSelect="rose";
        titleText="2nd Filter";
        thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
        aType=0, aTypeSelected=0
        dSelected=0,dScale=0,rSelected=0,rScale=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        pieRArr.length=0;
        processRScale();
        }
    else if ((secondSelect==0 && firstSelect=="dScale") || (secondSelect=="rose" && firstSelect=="dScale")) {
        secondSelect="rose";
        titleText="2nd Filter";
        thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
        aType=0,aTypeSelected=0, monthSelected=0,month=0;
        rSelected=0,rScale=0
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieRArr.length=0;
        processRScale();
        }
    else if ((secondSelect==0 && firstSelect=="mode") || (secondSelect=="rose" && firstSelect=="mode")) {
        secondSelect="rose";
        titleText="2nd Filter";
        thirdSelect=0, fourthSelect=0,fifthSelect=0,sixthSelect=0;
        aType=0, aTypeSelected=0, monthSelected=0,month=0;
        dSelected=0,dScale=0,rSelected=0,rScale=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        pieDArr.length=0;
        processDScale();
        pieRArr.length=0;
        processRScale();
        }
    else if ((secondSelect==0 && firstSelect=="rScale") || (secondSelect=="rose" && firstSelect=="rScale")) {
        secondSelect="rose";
        titleText="2nd Filter";
        thirdSelect=0,fourthSelect=0,fifthSelect=0,sixthSelect=0;
        aType=0, aTypeSelected=0, monthSelected=0,month=0;
        dSelected=0,dScale=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieDArr.length=0;
        processDScale();
        }
    else if ((thirdSelect==0 && secondSelect=="dScale" && firstSelect=="aType") || (thirdSelect==0 && secondSelect=="aType" && firstSelect=="dScale") || (thirdSelect=="rose" && secondSelect=="dScale" && firstSelect=="aType") || (thirdSelect=="rose" && secondSelect=="aType" && firstSelect=="dScale")){
        thirdSelect="rose";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0;
        rSelected=0,rScale=0;
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieRArr.length=0;
        processRScale();
        }
    else if (thirdSelect==0 && secondSelect=="dScale" && firstSelect=="month" || thirdSelect==0 && secondSelect=="month" && firstSelect=="dScale" || thirdSelect=="rose" && secondSelect=="dScale" && firstSelect=="month" || thirdSelect=="rose" && secondSelect=="month" && firstSelect=="dScale"){
        thirdSelect="rose";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        aTypeSelected=0,aType = 0;
        rSelected=0,rScale=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieRArr.length=0;
        processRScale();
        }
    else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="month" || thirdSelect==0 && secondSelect=="month" && firstSelect=="aType" || thirdSelect=="rose" && secondSelect=="aType" && firstSelect=="month" || thirdSelect=="rose" && secondSelect=="month" && firstSelect=="aType"){
        thirdSelect="rose";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        rSelected=0,rScale=0;
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        pieRArr.length=0;
        processRScale();
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        }
    else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="aType" || thirdSelect=="rose" && secondSelect=="aType" && firstSelect=="rScale" || thirdSelect=="rose" && secondSelect=="rScale" && firstSelect=="aType"){
        thirdSelect="rose";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0;
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        barChartDates.length=0;
        processBarChartDates();
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        }
    else if (thirdSelect==0 && secondSelect=="aType" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="aType" || thirdSelect=="rose" && secondSelect=="aType" && firstSelect=="mode" || thirdSelect=="rose" && secondSelect=="mode" && firstSelect=="aType"){
        thirdSelect="rose";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        rSelected=0,rScale=0,monthSelected=0,month=0;
        pieRArr.length=0;
        processRScale();
        barChartDates.length=0;
        processBarChartDates();
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        }
    else if (thirdSelect==0 && secondSelect=="month" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="month" || thirdSelect=="rose" && secondSelect=="month" && firstSelect=="rScale" || thirdSelect=="rose" && secondSelect=="rScale" && firstSelect=="month"){
        thirdSelect="rose";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        aTypeSelected=0,aType = 0;
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        barChartATypeArr.length=0;
        updateATypeChart();
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        }
    else if (thirdSelect==0 && secondSelect=="month" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="month" || thirdSelect=="rose" && secondSelect=="month" && firstSelect=="mode" || thirdSelect=="rose" && secondSelect=="mode" && firstSelect=="month"){
        thirdSelect="rose";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        rSelected=0,rScale=0,aTypeSelected=0,aType = 0;
        pieRArr.length=0;
        processRScale();
        barChartATypeArr.length=0;
        updateATypeChart();
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        }
    else if (thirdSelect==0 && secondSelect=="rScale" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="rScale" || thirdSelect=="rose" && secondSelect=="rScale" && firstSelect=="mode" || thirdSelect=="rose" && secondSelect=="mode" && firstSelect=="rScale"){
        thirdSelect="rose";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0,aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        }
    else if (thirdSelect==0 && secondSelect=="dScale" && firstSelect=="mode" || thirdSelect==0 && secondSelect=="mode" && firstSelect=="dScale" || thirdSelect=="rose" && secondSelect=="dScale" && firstSelect=="mode" || thirdSelect=="rose" && secondSelect=="mode" && firstSelect=="dScale"){
        thirdSelect="rose";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0,aTypeSelected=0,aType = 0;
        rSelected=0,rScale=0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        pieRArr.length=0;
        processRScale();  
        }	
    else if (thirdSelect==0 && secondSelect=="dScale" && firstSelect=="rScale" || thirdSelect==0 && secondSelect=="rScale" && firstSelect=="dScale" || thirdSelect=="rose" && secondSelect=="dScale" && firstSelect=="rScale" || thirdSelect=="rose" && secondSelect=="rScale" && firstSelect=="dScale"){
        thirdSelect="rose";
        titleText="3rd Filter";
        fourthSelect=0,fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0,aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        } 
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && dScale==0) || (fourthSelect=="rose" && month==0 && dScale==0)){
        fourthSelect="rose";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0;
        barChartDates.length=0;
        processBarChartDates();
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0 && dScale==0) || (fourthSelect=="rose" && mode==0 && dScale==0)){
        fourthSelect="rose";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }	
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && dScale==0) || (fourthSelect=="rose" && rScale==0 && dScale==0)){
        fourthSelect="rose";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && mode==0) || (fourthSelect=="rose" && rScale==0 && mode==0)){
        fourthSelect="rose";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }	
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0 && aType==0) || (fourthSelect=="rose" && rScale==0 && aType==0)){
        fourthSelect="rose";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
        aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
    }	
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0 && aType==0) || (fourthSelect=="rose" && mode==0 && aType==0)){
        fourthSelect="rose";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
        aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0 && aType==0) || (fourthSelect=="rose" && dScale==0 && aType==0)){
        fourthSelect="rose";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
        aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && aType==0) || (fourthSelect=="rose" && month==0 && aType==0)){
        fourthSelect="rose";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0;
        barChartDates.length=0;
        processBarChartDates();
        aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && rScale==0) || (fourthSelect=="rose" && month==0 && rScale==0)){
        fourthSelect="rose";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0;
        barChartDates.length=0;
        processBarChartDates();
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
    }
    else if ((fourthSelect==0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0 && mode==0) || (fourthSelect=="rose" && month==0 && mode==0)){
        fourthSelect="rose";
        titleText="4th Filter"
        fifthSelect=0,sixthSelect=0;
        monthSelected=0,month=0;
        barChartDates.length=0;
        processBarChartDates();
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && rScale==0) || (fifthSelect=="rose" && rScale==0)){
        fifthSelect="rose";
        titleText="5th Filter"
        sixthSelect=0;
        rSelected=0,rScale=0;
        pieRArr.length=0;
        processRScale();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && mode==0) || (fifthSelect=="rose" && mode==0)){
        fifthSelect="rose";
        titleText="5th Filter"
        sixthSelect=0;
        modeSelected=0, mode = 0;
        barChartModeArr.length=0;
        processBarChartMode();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && dScale==0) || (fifthSelect=="rose" && dScale==0)){
        fifthSelect="rose";
        titleText="5th Filter"
        sixthSelect=0;
        dSelected=0,dScale=0;
        pieDArr.length=0;
        processDScale();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && month==0) || (fifthSelect=="rose" && month==0)){
        fifthSelect="rose";
        titleText="5th Filter"
        sixthSelect=0;
        monthSelected=0,month=0;
        barChartDates.length=0;
        processBarChartDates();
    }
    else if ((fifthSelect==0 && fourthSelect!=0 && thirdSelect!=0 && secondSelect!=0 && firstSelect !=0 && aType==0) || (fifthSelect=="rose" && aType==0)){
        fifthSelect="rose";
        titleText="5th Filter"
        sixthSelect=0;
        aTypeSelected=0,aType = 0;
        barChartATypeArr.length=0;
        updateATypeChart();
    }
    else {
        sixthSelect="rose";
        titleText="6th Filter";
        }
    mapChange();
}