let roseData = {
    labels: [
      'N',
      'NE',
      'E',
      'SE',
      'S',
      'SW',
      'W',
      'NW'
    ],
    datasets: [{
      label: 'Avalanche Rose',
      data: [11, 16, 7, 3, 14, 12, 3, 10],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
  
  let avalancheRose = new Chart('rose', {
    type: 'polarArea',
    data: {
        datasets: [
            roseData
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Avalanche Rose',
                padding: {
                    top: 10,
                    bottom: 10
                }
            },
            legend: false
        },
        elements: {
            arc: {
                circular: false,
                angle: 45
            }
        },
        maintainAspectRatio: false,
    },
    
});

