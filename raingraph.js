function setupGraph(Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['19 Jul', '20 Jul', '21 Jul', '22 Jul', '23 Jul', '24 Jul', '25 Jul(Today)'],
            datasets: [{
                    label: 'Year 2016',
                    data: [947, 750, 870, 1001, 790, 820, 795],
                    backgroundColor: [
                        'rgba(0, 158, 15, 0.2)',
                        'rgba(255, 158, 33, 0.2)',
                        'rgba(33, 255, 247, 0.2)',
                        'rgba(159, 0, 239, 0.2)',
                        'rgba(255, 0, 0, 0.2)',
                        'rgba(231, 252, 0, 0.2)',
                        'rgba(247, 49, 155, 0.2)'
                    ],
                    borderColor: [
                        'rgba(0, 158, 15, 0.4)',
                        'rgba(255, 158, 33, 0.4)',
                        'rgba(33, 255, 247, 0.4)',
                        'rgba(159, 0, 239, 0.4)',
                        'rgba(255, 0, 0, 0.4)',
                        'rgba(231, 252, 0, 0.4)',
                        'rgba(247, 49, 155, 0.4)'
                    ],
                    borderWidth: 4
                }, {
                    label: 'Year 2017',
                    data: [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday],
                    backgroundColor: [
                        'rgba(0, 158, 15, 0.8)',
                        'rgba(255, 158, 33, 0.8)',
                        'rgba(33, 255, 247, 0.8)',
                        'rgba(159, 0, 239, 0.8)',
                        'rgba(255, 0, 0, 0.8)',
                        'rgba(231, 252, 0, 0.8)',
                        'rgba(247, 49, 155, 0.8)'
                    ],
                    borderColor: [
                        'rgba(0, 158, 15, 1)',
                        'rgba(255, 158, 33, 1)',
                        'rgba(33, 255, 247, 1)',
                        'rgba(159, 0, 239, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(231, 252, 0, 1)',
                        'rgba(247, 49, 155, 1)'
                    ],
                    borderWidth: 4
                }

            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function main() {
    setupGraph(1025, 957, 1000, 900, 941, 870, 774);
}
$().ready(main)
