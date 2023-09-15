function layerFilter(feature) {
    var roseFiltersFlat = roseFilters.flat();

    //rScale filter
    if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && moment(feature.properties.datetime) >= startDate && moment(feature.properties.datetime) < endDate) {
            return true
        }
        else {
            return false
        }
    }

    //dScale filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && moment(feature.properties.datetime) >= startDate && moment(feature.properties.datetime) < endDate) {
            return true
        }
        else {
            return false
        }
    }

    //rScale + dScale filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && moment(feature.properties.datetime) >= startDate && moment(feature.properties.datetime) < endDate) {
            return true
        }
        else {
            return false
        }
    }

    //Rose filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (roseFiltersFlat.includes(feature.properties.roseField)&& moment(feature.properties.datetime) >= startDate && moment(feature.properties.datetime) < endDate) {
            return true
        }
        else {
            return false
        }
    }

    //Rose + rScale filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && roseFiltersFlat.includes(feature.properties.roseField)&& moment(feature.properties.datetime) >= startDate && moment(feature.properties.datetime) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Rose + dScale filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && roseFiltersFlat.includes(feature.properties.roseField)&& moment(feature.properties.datetime) >= startDate && moment(feature.properties.datetime) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Rose + rScale + dScale filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && roseFiltersFlat.includes(feature.properties.roseField)&& moment(feature.properties.datetime) >= startDate && moment(feature.properties.datetime) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType + rScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType + dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType + rScale + dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType & rose filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }

    //aType & rose + rScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }

    //aType & rose + dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }

    //aType & rose + rScale + dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //rScale & lasso filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //dScale & lasso filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //dScale & rScale &  lasso filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType & lasso filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType & lasso & rScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType & lasso & dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType & lasso & dScale & rScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Lasso & rose filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if ((moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Lasso & rose + rScale filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Lasso & rose + dScale filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Lasso & rose + rScale + dScale filter
    else if (aType == 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType & lasso & rose filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType & lasso & rose & rScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType & lasso & rose & dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType & lasso & rose & rScale & dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode & rScale filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode & dScale filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode & rScale & dScale filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + rose filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + rose & rScale filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + rose & dScale filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + rose & rScale & dScale filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + lasso filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + lasso & rScale filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + lasso & dScale filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + lasso & rScale & dScale filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + lasso + rose filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + lasso + rose + rScale filter
        else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + lasso + rose + dScale filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + lasso + rose + rScale + dScale filter
    else if (mode != 0 && monthSelected == 0 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month & rScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month & dScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month & rScale & dScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + rose filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + rose & rScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + rose & dScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + rose & rScale & dScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + lasso filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + lasso & rScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + lasso & dScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + lasso & rScale & dScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + lasso + rose filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + lasso + rose & rScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + lasso + rose & dScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Month + lasso + rose & rScale & dScale filter
    else if (aType != 0 && monthSelected == 1 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode & rScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode & dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode & rScale & dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + rose filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + rose & rScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + rose & dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + rose & rScale & dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + lasso filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + lasso & rScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + lasso & dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + lasso & rScale & dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + lasso + rose filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + lasso + rose & rScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + lasso + rose & dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //aType + Travel Mode + lasso + rose & rScale & dScale filter
    else if (aType != 0 && monthSelected == 0 && modeSelected == 1 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.atype == aType && feature.properties.acc_travel_mode == mode && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month & rScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month & rScale & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + rose filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + rose & rScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + rose & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + rose & rScale & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + lasso filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + lasso & rScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + lasso & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + lasso & rScale & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + lasso + rose filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + lasso + rose & rScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + lasso + rose & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + lasso + rose & rScale & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType & rScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType & rScale & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + rose filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + rose & rScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + rose & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + rose & rScale & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + lasso filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + lasso & rScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + lasso & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + lasso & rScale & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + lasso + rose filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + lasso + rose & rScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + lasso + rose & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Travel Mode + Month + aType + lasso + rose & rScale & dScale filter
    else if (mode != 0 && monthSelected == 1 && aTypeSelected == 1 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && feature.properties.acc_travel_mode == mode && feature.properties.atype == aType && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Month filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Month & rScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Month & dScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Month & rScale & dScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
    //Month + rose filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Month + rose & rScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Month + rose & dScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Month + rose & rScale & dScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length == 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Month + lasso filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale==0) {
        if (moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Month + lasso & rScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Month + lasso & dScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Month + lasso & rScale & dScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length==0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id)) {
            return true
        }
        else {
            return false
        }
    }
    //Month + lasso + rose filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale==0) {
        if (moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Month + lasso + rose & rScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale==0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Month + lasso + rose & dScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale==0) {
        if (feature.properties.Dscale == dScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Month + lasso + rose & rScale & dScale filter
    else if (month != 0 && aTypeSelected == 0 && modeSelected == 0 && lassoIDs.length > 0 && roseFilters.length>0 && dScale!=0 && rScale!=0) {
        if (feature.properties.Rscale == rScale && feature.properties.Dscale == dScale && moment(feature.properties.datetime).format("MMM") == month && (moment(feature.properties.datetime)) >= startDate && (moment(feature.properties.datetime)) < endDate && lassoIDs.includes(feature.properties.acc_id) && roseFiltersFlat.includes(feature.properties.roseField)) {
            return true
        }
        else {
            return false
        }
    }
    //Date filter
    else {
        if ((moment(feature.properties.datetime)) >= startDate
            && (moment(feature.properties.datetime)) < endDate) {
            return true
        }
        else {
            return false
        }
    }
}