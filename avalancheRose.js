
// avy rose
d3.selectAll(".avy-rose-part")
.on("mouseover", function () {
    d3.select(this).classed('hovered', true);
})
.on("mouseout", function () {
    d3.select(this).classed('hovered', false);
})
.on('click', function () {
    // toggle the filter on the chart
    charts.rosePieChart.filter([$(this).attr('filter')]);
    dc.redrawAll();
});

// rose multifilters
$('.rose-multiselector').click(el => {
// remove all the existing filters on the rose
charts.rosePieChart.filterAll();

// get the filters to be applied from the element's filter attr
let filter = JSON.parse($(el.target).attr('filter') || '[]');

// apply and redraw
charts.rosePieChart.filter([filter]);
dc.redrawAll();
});

// sets the rose's values based on the current filters
function _setAvyRoseValues () {
// get the filtered values from the hidden rose chart
var rosePieVals = charts.rosePieChart.group().top(Infinity);

// iterate through valid rose keys, and if we have a dc value for them plot them on the rose. otherwise, 0.
ROSE_KEYS.forEach(key => {
    var pieVal = rosePieVals.find(groupedVal => groupedVal.key === key) || { value: 0 };
    $(`[filter='${key}']`).find('text').text(pieVal.value || '');
});
}
// fire it the first time
_setAvyRoseValues();
// and also update the avy rose whenever other filters update
charts.ndx.onChange(_setAvyRoseValues);

// attach event listener to each chart to show/hide filter elsewhere in the DOM
dc.chartRegistry.list().forEach(function (chart) {
$(chart.anchor()).closest('.chart-wrapper').find('.reset').click(() => {
    chart.filterAll();
    dc.redrawAll();
});

chart.on('filtered', function () {
    if (chart.hasFilter()) {
        $(chart.anchor()).closest('.chart-wrapper').find('.reset').removeClass('hidden');
    } else {
        $(chart.anchor()).closest('.chart-wrapper').find('.reset').addClass('hidden');
    }

    geo.clearPopup();

    // update highlighted parts of the rose automatically when it gets filtered
    // we only get one event listener per chart so we have to bundle it in here.
    if (chart.anchorName() === 'rose-pie-chart') {
        var filters = charts.rosePieChart.filters();

        // if there are no filters, we want nothing to show as not selected
        if (filters.length === 0) {
            $('.avy-rose-part').removeClass('not-selected');
        } else {
            // otherwise, there are filters to apply so we first deselect all elements...
            $('.avy-rose-part').addClass('not-selected');

            // and then remove this deselected class from the ones that are indeed selected.
            filters.forEach(filter => {
                $(`[filter='${filter}']`).removeClass('not-selected');
            });
        }
    }

    // if zones are filtered via the bar chart, zoom to zone bounds
    if (chart.anchorName() === 'zone-bar-chart') {
        if (chart.filters().length) {
            // zoom to the selected zone bounds
            var selectedZones = chart.filters();
            var bboxes = Object.values(ZONES).filter(zone => selectedZones.includes(zone.name)).map(zone => zone.bbox);
            var megaBbox = turf.bbox(turf.featureCollection(bboxes.map(bbox => turf.bboxPolygon(bbox))));
            geo.map.fitBounds(megaBbox);
        } else {
            // return to initial bounds
            geo.map.fitBounds(ZONES_BOUNDS);
        }
    }

    // update the data displayed by all layers in the map to only include the data we've filtered to
    var selectedFeaturesGeojson = utils.getEmptyGeoJson();
    selectedFeaturesGeojson.features = filteredObjs.top(Infinity);
    geo.filterToFeatures(selectedFeaturesGeojson);
    charts.obsDataTable.updatePagination(1); // reset to page 1 whenever filtered, staying on page X holds no meaning

    // if there's only one feature filtered, open the info box automatically
    if (selectedFeaturesGeojson.features.length == 1) {
        geo.makePopup(null, selectedFeaturesGeojson.features[0].properties.id);
    }
});
});

// render all charts, then draw the date selector for future date changes.
$('#loading-overlay').toggleClass('hidden', true)
dc.renderAll();
charts._renderDateSelector();
}


};
// avy rose
d3.selectAll(".avy-rose-part")
.on("mouseover", function () {
    d3.select(this).classed('hovered', true);
})
.on("mouseout", function () {
    d3.select(this).classed('hovered', false);
})
.on('click', function () {
    // toggle the filter on the chart
    charts.rosePieChart.filter([$(this).attr('filter')]);
    dc.redrawAll();
});

// rose multifilters
$('.rose-multiselector').click(el => {
// remove all the existing filters on the rose
charts.rosePieChart.filterAll();

// get the filters to be applied from the element's filter attr
let filter = JSON.parse($(el.target).attr('filter') || '[]');

// apply and redraw
charts.rosePieChart.filter([filter]);
dc.redrawAll();
});

// sets the rose's values based on the current filters
function _setAvyRoseValues () {
// get the filtered values from the hidden rose chart
var rosePieVals = charts.rosePieChart.group().top(Infinity);

// iterate through valid rose keys, and if we have a dc value for them plot them on the rose. otherwise, 0.
ROSE_KEYS.forEach(key => {
    var pieVal = rosePieVals.find(groupedVal => groupedVal.key === key) || { value: 0 };
    $(`[filter='${key}']`).find('text').text(pieVal.value || '');
});
}
// fire it the first time
_setAvyRoseValues();
// and also update the avy rose whenever other filters update
charts.ndx.onChange(_setAvyRoseValues);

// attach event listener to each chart to show/hide filter elsewhere in the DOM
dc.chartRegistry.list().forEach(function (chart) {
$(chart.anchor()).closest('.chart-wrapper').find('.reset').click(() => {
    chart.filterAll();
    dc.redrawAll();
});

chart.on('filtered', function () {
    if (chart.hasFilter()) {
        $(chart.anchor()).closest('.chart-wrapper').find('.reset').removeClass('hidden');
    } else {
        $(chart.anchor()).closest('.chart-wrapper').find('.reset').addClass('hidden');
    }

    geo.clearPopup();

    // update highlighted parts of the rose automatically when it gets filtered
    // we only get one event listener per chart so we have to bundle it in here.
    if (chart.anchorName() === 'rose-pie-chart') {
        var filters = charts.rosePieChart.filters();

        // if there are no filters, we want nothing to show as not selected
        if (filters.length === 0) {
            $('.avy-rose-part').removeClass('not-selected');
        } else {
            // otherwise, there are filters to apply so we first deselect all elements...
            $('.avy-rose-part').addClass('not-selected');

            // and then remove this deselected class from the ones that are indeed selected.
            filters.forEach(filter => {
                $(`[filter='${filter}']`).removeClass('not-selected');
            });
        }
    }

    // if zones are filtered via the bar chart, zoom to zone bounds
    if (chart.anchorName() === 'zone-bar-chart') {
        if (chart.filters().length) {
            // zoom to the selected zone bounds
            var selectedZones = chart.filters();
            var bboxes = Object.values(ZONES).filter(zone => selectedZones.includes(zone.name)).map(zone => zone.bbox);
            var megaBbox = turf.bbox(turf.featureCollection(bboxes.map(bbox => turf.bboxPolygon(bbox))));
            geo.map.fitBounds(megaBbox);
        } else {
            // return to initial bounds
            geo.map.fitBounds(ZONES_BOUNDS);
        }
    }

    // update the data displayed by all layers in the map to only include the data we've filtered to
    var selectedFeaturesGeojson = utils.getEmptyGeoJson();
    selectedFeaturesGeojson.features = filteredObjs.top(Infinity);
    geo.filterToFeatures(selectedFeaturesGeojson);
    charts.obsDataTable.updatePagination(1); // reset to page 1 whenever filtered, staying on page X holds no meaning

    // if there's only one feature filtered, open the info box automatically
    if (selectedFeaturesGeojson.features.length == 1) {
        geo.makePopup(null, selectedFeaturesGeojson.features[0].properties.id);
    }
});
});

// render all charts, then draw the date selector for future date changes.
$('#loading-overlay').toggleClass('hidden', true)
dc.renderAll();
charts._renderDateSelector();
}
};