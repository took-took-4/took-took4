////chatbot for police page
// function chatAlert(){
//   var location = 'Saenpalm Nakorn Pathom'
//   $('#alertbox').append('Found Irregal TookTook at '+location+'\n');
// }
function chatBot(answer) {
    var ans = answer;
    var location = 'Saenpalm Nakorn Pathom'
    if (ans == 'h') {}
}

function getLocalDate() {
    var date = new Date()
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}

function setupGraph(north, west, middle, east, south) {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['North', 'West', 'Middle', 'East', 'South'],
            datasets: [{
                label: '# of Votes',
                data: [north, west, middle, east, south],
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

function addNew(head, detail) {
    $('#newbox').prepend('<div class="panel panel-primary" id="news"><div class="panel-heading">' + head + '</div><div class="panel-body"><div class = "col-md-10">' + detail + '</div> <div class = "col-md-2" ><button type = "button"class = "btn btn-danger btn-lg" ><span class = "glyphicon glyphicon-off"aria - hidden = "true" > </span> Lock down </button> </div> </div> </div>')
}

function main() {
    setupGraph(4, 3, 1, 3, 7);
    addNew('Jack', 'Giant');
}
$().ready(main());
