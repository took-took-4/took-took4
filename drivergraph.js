function setupGraph(Ladprao, Ramkamhaeng, Sukhumvit, Bangna,Siam) {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ladprao', 'Ramkamhaeng', 'Sukhumvit', 'Bangna', 'Siam'],
            datasets: [{
                label: '# of District',
                data: [Ladprao, Ramkamhaeng, Sukhumvit, Bangna, Siam],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 4
            }]
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

function main(){
  setupGraph(26,22,21,19,18);
}
$().ready(main());
