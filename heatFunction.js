//Function to call L.heatLayer
function createHeatmap(map, points, minDate, maxDate, aType, month, mode, lassoIDs, roseFiltersFlat, rScale, dScale) {
    const pointsArray = [];
    //roseFiltersFlat = roseFilters.flat();
    //console.log(aType, month, mode, lassoIDs, roseFiltersFlat);
    //console.log(roseFilters);
    if (roseFiltersFlat == "undefined"){
        console.log("yes");
        roseFilters = rosePieChart.filters();
        roseFiltersFlat = roseFilters.flat();
    }
    //rScale
    if (rScale!=0 && dScale==0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    //dScale
    else if (rScale==0 && dScale!=0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    //dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointDScale = points[i][8];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && pointRScale == rScale && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    //No graph selections + lasso
    else if (rScale==0 && dScale==0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointDate = moment(points[i][2]);
            if (lassoIDs.includes(pointID) === true && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    // lasso + rScale
    else if (rScale!=0 && dScale==0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && lassoIDs.includes(pointID) === true && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    // lasso + dScale
    else if (rScale==0 && dScale!=0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && lassoIDs.includes(pointID) === true && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    // lasso + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointDScale = points[i][8];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && lassoIDs.includes(pointID) === true && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    //Rose
    else if (rScale==0 && dScale==0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointRose = points[i][6];
            const pointDate = moment(points[i][2]);
            if (roseFiltersFlat.includes(pointRose) === true && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    //Rose + rScale
    else if (rScale!=0 && dScale==0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointRose = points[i][6];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && roseFiltersFlat.includes(pointRose) === true && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    //Rose + dScale
    else if (rScale==0 && dScale!=0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointRose = points[i][6];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && roseFiltersFlat.includes(pointRose) === true && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    //Rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointRose = points[i][6];
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && roseFiltersFlat.includes(pointRose) === true && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    //Rose + dScale + rScale + lasso
    else if (rScale!=0 && dScale!=0 && aType == 0 && month == 0 && mode ==0 && lassoIDs != undefined && lassoIDs.length != 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointRose = points[i][6];
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (lassoIDs.includes(pointID) === true && pointRScale == rScale && pointDScale == dScale && roseFiltersFlat.includes(pointRose) === true && (pointDate >= minDate) && (pointDate < maxDate)){
                pointsArray.push([points[i][0], points[i][1]]);
                }
            }
        }
    //aType + month + mode
    else if (rScale==0 && dScale==0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointaType = points[i][3];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointMode = points[i][4];
                const pointDate = moment(points[i][2]);
                if ((pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + month + mode + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + mode + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointMode = points[i][4];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + mode + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointMode = points[i][4];
            const pointDScale = points[i][8];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + mode + rose
    else if (rScale==0 && dScale==0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointaType = points[i][3];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointMode = points[i][4];
                const pointDate = moment(points[i][2]);
                const pointRose = points[i][6];
                if ((pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + month + mode + rose + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
    for (i in points) {
        const pointaType = points[i][3];
        const pointMonth = moment(points[i][2]).format("MMM");
        const pointMode = points[i][4];
        const pointDate = moment(points[i][2]);
        const pointRose = points[i][6];
        const pointRScale = points[i][7];
        if (pointRScale == rScale && (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
            pointsArray.push([points[i][0], points[i][1]]);	
            }
        } 
    }
    //aType + month + mode + rose + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointMode = points[i][4];
            const pointDate = moment(points[i][2]);
            const pointRose = points[i][6];
            const pointDScale = points[i][8];
            if (pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
        }
    //aType + month + mode + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointMode = points[i][4];
            const pointDate = moment(points[i][2]);
            const pointRose = points[i][6];
            const pointDScale = points[i][8];
            const pointRScale = points[i][7];
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
        }
    //aType + month + mode + lasso
    else if (rScale==0 && dScale==0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointaType = points[i][3];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointMode = points[i][4];
                const pointDate = moment(points[i][2]);
                if ((pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + month + mode + lasso + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + mode + lasso + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointMode = points[i][4];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + mode + lasso + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + mode + lasso + rose
    else if (rScale==0 && dScale==0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointaType = points[i][3];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointMode = points[i][4];
                const pointDate = moment(points[i][2]);
                const pointRose = points[i][6];
                if ((pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + month + mode + lasso + rose + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + mode + lasso + rose + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointMode = points[i][4];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            const pointRose = points[i][6];
            if (pointDScale == dScale &&  (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + mode + lasso + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && month !=0 && mode!=0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointMode = points[i][4];
            const pointDScale = points[i][8];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale &&  (pointaType == aType) && (pointMonth == month) && (pointMode==mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month
    else if (rScale==0 && dScale==0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointaType = points[i][3];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                if ((pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate))  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + month + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointRScale = points[i][7];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointDScale = points[i][8];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + rose
    else if (rScale==0 && dScale==0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointaType = points[i][3];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                const pointRose = points[i][6];
                if ((pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + month + rose + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + rose + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + lasso
    else if (rScale==0 && dScale==0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointaType = points[i][3];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                if ((pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& 	lassoIDs.includes(pointID) == true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + month + lasso + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& 	lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + lasso + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& 	lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + lasso + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDScale = points[i][8];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& 	lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + lasso + rose
    else if (rScale==0 && dScale==0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointaType = points[i][3];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                const pointRose = points[i][6];
                if ((pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + month + lasso + rose + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + lasso + rose + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + month + lasso + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && month !=0 && mode ==0 && lassoIDs != undefined &&  lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode
    else if (rScale==0 && dScale==0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointaType = points[i][3];
                const pointDate = moment(points[i][2]);
                const pointMode = points[i][4];
                if ((pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + mode + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointMode = points[i][4];
            if (pointRScale == rScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointMode = points[i][4];
            if (pointDScale == dScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointRScale = points[i][7];
            const pointMode = points[i][4];
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode + rose
    else if (rScale==0 && dScale==0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointaType = points[i][3];
                const pointDate = moment(points[i][2]);
                const pointMode = points[i][4];
                const pointRose = points[i][6];
                if ((pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + mode + rose + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode + rose + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointMode = points[i][4];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined &&  lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode + lasso
    else if (rScale==0 && dScale==0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointaType = points[i][3];
                const pointDate = moment(points[i][2]);
                const pointMode = points[i][4];
                if ((pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + mode + lasso + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointMode = points[i][4];
            if (pointRScale == rScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode + lasso + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointMode = points[i][4];
            if (pointDScale == dScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode + lasso + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointMode = points[i][4];
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode + lasso + rose
    else if (rScale==0 && dScale==0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointaType = points[i][3];
                const pointDate = moment(points[i][2]);
                const pointMode = points[i][4];
                const pointRose = points[i][6];
                if ((pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + mode + lasso + rose + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointMode = points[i][4];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode + lasso + rose + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointMode = points[i][4];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + mode + lasso + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && mode !=0 && month ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointMode = points[i][4];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + mode
    else if (rScale==0 && dScale==0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                const pointMode = points[i][4];
                if ((pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Month + mode + rScale
    else if (rScale!=0 && dScale==0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointMode = points[i][4];
            if (pointRScale == rScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + mode + dScale
    else if (rScale==0 && dScale!=0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointMode = points[i][4];
            if (pointDScale == dScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + mode + dScale + rScale
    else if (rScale!=0 && dScale!=0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointRScale = points[i][7];
            const pointMode = points[i][4];
            if (pointRScale == rScale && pointDScale == dScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + mode + rose
    else if (rScale==0 && dScale==0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                const pointMode = points[i][4];
                const pointRose = points[i][6];
                if ((pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Month + mode + rose + rScale
    else if (rScale!=0 && dScale==0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + mode + rose + dScale
    else if (rScale==0 && dScale!=0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointMode = points[i][4];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + mode + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointMode = points[i][4];
            const pointDScale = points[i][8];
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + mode + lasso
    else if (rScale==0 && dScale==0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                const pointMode = points[i][4];
                if ((pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Month + mode + lasso + rScale
    else if (rScale!=0 && dScale==0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointMode = points[i][4];
            if (pointRScale == rScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + mode + lasso + dScale
    else if (rScale==0 && dScale!=0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointMode = points[i][4];
            if (pointDScale == dScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + mode + lasso + dScale + rScale
    else if (rScale!=0 && dScale!=0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointMode = points[i][4];
            if (pointRScale == rScale && pointDScale == dScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }

    //Month + mode + lasso + rose
    else if (rScale==0 && dScale==0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                const pointMode = points[i][4];
                const pointRose = points[i][6];
                if ((pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Month + mode + lasso + rose + rScale
    else if (rScale!=0 && dScale==0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + mode + lasso + rose + dScale
    else if (rScale==0 && dScale!=0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointMode = points[i][4];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + mode + lasso + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && month !=0 && mode !=0 && aType ==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointMonth == month) && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType only
    else if (rScale==0 && dScale==0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointaType = points[i][3];
                const pointDate = moment(points[i][2]);
                if ((pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate))  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + rose
    else if (rScale==0 && dScale==0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointaType = points[i][3];
                const pointDate = moment(points[i][2]);
                const pointRose = points[i][6];
                if ((pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + rose + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + rose + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + lasso
    else if (rScale==0 && dScale==0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointaType = points[i][3];
                const pointDate = moment(points[i][2]);
                if ((pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + lasso + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + lasso + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + lasso + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + lasso + rose
    else if (rScale==0 && dScale==0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointaType = points[i][3];
                const pointDate = moment(points[i][2]);
                const pointRose = points[i][6];
                if ((pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //aType + lasso + rose + rScale
    else if (rScale!=0 && dScale==0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + lasso + rose + dScale
    else if (rScale==0 && dScale!=0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //aType + lasso + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && aType !=0 && mode==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointaType = points[i][3];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointaType == aType) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month only
    else if (rScale==0 && dScale==0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                if ((pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate))  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Month + rScale
    else if (rScale!=0 && dScale==0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + dScale
    else if (rScale==0 && dScale!=0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + dScale + rScale
    else if (rScale!=0 && dScale!=0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDScale = points[i][8];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + rose
    else if (rScale==0 && dScale==0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                const pointRose = points[i][6];
                if ((pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Month + rose + rScale
    else if (rScale!=0 && dScale==0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + rose + dScale
    else if (rScale==0 && dScale!=0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + lasso
    else if (rScale==0 && dScale==0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                if ((pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Month + lasso + rScale
    else if (rScale!=0 && dScale==0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + lasso + dScale
    else if (rScale==0 && dScale!=0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + lasso + dScale + rScale
    else if (rScale!=0 && dScale!=0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Lasso + rose
    else if (rScale==0 && dScale==0 && month ==0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointDate = moment(points[i][2]);
                const pointRose = points[i][6];
                if ((pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Lasso + rose + rScale
    else if (rScale!=0 && dScale==0 && month ==0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Lasso + rose + dScale
    else if (rScale==0 && dScale!=0 && month ==0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Lasso + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && month ==0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + lasso + rose
    else if (rScale==0 && dScale==0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointMonth = moment(points[i][2]).format("MMM");
                const pointDate = moment(points[i][2]);
                const pointRose = points[i][6];
                if ((pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Month + lasso + rose + rScale
    else if (rScale!=0 && dScale==0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + lasso + rose + dScale
    else if (rScale==0 && dScale!=0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Month + lasso + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && month !=0 && aType==0 && mode==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMonth = moment(points[i][2]).format("MMM");
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointMonth == month) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode only
    else if (rScale==0 && dScale==0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointMode = points[i][4];
                const pointDate = moment(points[i][2]);
                if ((pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Mode + rScale
    else if (rScale!=0 && dScale==0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode + dScale
    else if (rScale==0 && dScale!=0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointMode = points[i][4];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode + dScale + rScale
    else if (rScale!=0 && dScale!=0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate))  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode + rose
    else if (rScale==0 && dScale==0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointMode = points[i][4];
                const pointDate = moment(points[i][2]);
                const pointRose = points[i][6];
                if ((pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Mode + rose + rScale
    else if (rScale!=0 && dScale==0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointMode = points[i][4];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode + rose + dScale
    else if (rScale==0 && dScale!=0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointMode = points[i][4];
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length == 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointMode = points[i][4];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate) && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode + lasso
    else if (rScale==0 && dScale==0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointMode = points[i][4];
                const pointDate = moment(points[i][2]);
                if ((pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Mode + lasso + rScale
    else if (rScale!=0 && dScale==0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode + lasso + dScale
    else if (rScale==0 && dScale!=0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMode = points[i][4];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointDScale == dScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode + lasso + dScale + rScale
    else if (rScale!=0 && dScale!=0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length == 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMode = points[i][4];
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointDate = moment(points[i][2]);
            if (pointRScale == rScale && pointDScale == dScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode + lasso + rose
    else if (rScale==0 && dScale==0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
            for (i in points) {
                const pointID = points[i][5];
                const pointMode = points[i][4];
                const pointDate = moment(points[i][2]);
                const pointRose = points[i][6];
                if ((pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                    pointsArray.push([points[i][0], points[i][1]]);	
                    }
                } 
        }
    //Mode + lasso + rose + rScale
    else if (rScale!=0 && dScale==0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMode = points[i][4];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointRose = points[i][6];
            if (pointRScale == rScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode + lasso + rose + dScale
    else if (rScale==0 && dScale!=0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMode = points[i][4];
            const pointDate = moment(points[i][2]);
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointDScale == dScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    //Mode + lasso + rose + dScale + rScale
    else if (rScale!=0 && dScale!=0 && mode !=0 && aType==0 && month==0 && lassoIDs != undefined && lassoIDs.length > 0 && roseFiltersFlat != undefined && roseFiltersFlat.length > 0){
        for (i in points) {
            const pointID = points[i][5];
            const pointMode = points[i][4];
            const pointDate = moment(points[i][2]);
            const pointRScale = points[i][7];
            const pointDScale = points[i][8];
            const pointRose = points[i][6];
            if (pointRScale == rScale && pointDScale == dScale && (pointMode == mode) && (pointDate >= minDate) && (pointDate < maxDate)&& lassoIDs.includes(pointID) == true && roseFiltersFlat.includes(pointRose) === true)  {
                pointsArray.push([points[i][0], points[i][1]]);	
                }
            } 
    }
    else{
            //check if the date picker has been used
            if ((minDate != undefined) && (maxDate != undefined)) {
                for (i in points) {
                    const pointDate = moment(points[i][2]);
                    if ((pointDate >= minDate) && (pointDate < maxDate))  {
                        pointsArray.push([points[i][0], points[i][1]]);
                    }
                }
            } else {
                for (i in points) {
                    pointsArray.push([points[i][0], points[i][1]]);
                }
            }

        }
    return L.heatLayer(pointsArray, {
        radius: 21,
        blur: 12,
        minOpacity: 0.4,
        gradient: {.3: 'cyan', 0.7: 'blue', .98: 'purple'},
        maxZoom: 25
        });
}