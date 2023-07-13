
        // this is not doing anything yet.
		
		//add link to d3 here
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