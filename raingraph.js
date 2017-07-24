function setupGraph(Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) {
    var ctx = document.getElementById("myChart");
    var linkDatabase = 'http://158.108.165.223/data/fame/database'
    var tempData = {}
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['19 Jul', '20 Jul', '21 Jul', '22 Jul', '23 Jul', '24 Jul', '25 Jul'],
            datasets: [{
                    label: 'Year 2016',
                    data: [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 206, 86, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(255, 159, 64, 0.4)'
                    ],
                    borderWidth: 4
                },{ label: 'Year 2017',
                data: [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 4

        }],
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }});
}
function main() {
    setupGraph(20, 17, 17, 18, 19, 16,20,15);
}
$().ready(main())
