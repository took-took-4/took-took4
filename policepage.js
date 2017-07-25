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
    var click1 = 0;
    var click2 = 0;
    var click3 = 0;
    var click4 = 0;
    var linkStop = 'http://158.108.165.223/data/TUK40/stop'

    $('#newbut1').click(function(){
      if(click1==0){
        click1 = 1
      $('#newbut1').attr('class','btn btn btn-lg');
      $('#newbut1').text('');
      $('#newbut1').append('<span id="text2"class="glyphicon glyphicon-off" aria-hidden="true"></span> Locked')
      $.ajax({
          url: linkStop + '/set/' + '1'
      }).done(function() {
          console.log('sent Stop action complete');
      }).fail(function() {
          console.error('Fail to sent Stop action');
      });
    }else{
      click1 = 0
      $('#newbut1').attr('class','btn btn-danger btn-lg');
      $('#newbut1').text('');
      $('#newbut1').append('<span id="text2"class="glyphicon glyphicon-off" aria-hidden="true"></span> Lock Down')
      $.ajax({
          url: linkStop + '/set/' + '0'
      }).done(function() {
          console.log('sent Stop action complete');
      }).fail(function() {
          console.error('Fail to sent Stop action');
      });
    }})

    $('#newbut2').click(function(){
      if(click2==0){
        click2 = 1
      $('#newbut2').attr('class','btn btn btn-lg');
      $('#newbut2').text('');
      $('#newbut2').append('<span id="text2"class="glyphicon glyphicon-off" aria-hidden="true"></span>  Locked')
      $.ajax({
          url: linkStop + '/set/' + '1'
      }).done(function() {
          console.log('sent Stop action complete');
      }).fail(function() {
          console.error('Fail to sent Stop action');
      });
    }else{
      click2 = 0
      $('#newbut2').attr('class','btn btn-danger btn-lg');
      $('#newbut2').text('');
      $('#newbut2').append('<span id="text2"class="glyphicon glyphicon-off" aria-hidden="true"></span> Lock Down')
      $.ajax({
          url: linkStop + '/set/' + '0'
      }).done(function() {
          console.log('sent Stop action complete');
      }).fail(function() {
          console.error('Fail to sent Stop action');
      });
    }})

    $('#newbut3').click(function(){
      if(click3==0){
        click3 = 1
      $('#newbut3').attr('class','btn btn btn-lg');
      $('#newbut3').text('');
      $('#newbut3').append('<span id="text2"class="glyphicon glyphicon-off" aria-hidden="true"></span> Locked')
      $.ajax({
          url: linkStop + '/set/' + '1'
      }).done(function() {
          console.log('sent Stop action complete');
      }).fail(function() {
          console.error('Fail to sent Stop action');
      });
    }else{
      click3 = 0
      $('#newbut3').attr('class','btn btn-danger btn-lg');
      $('#newbut3').text('');
      $('#newbut3').append('<span id="text2"class="glyphicon glyphicon-off" aria-hidden="true"></span> Lock Down')
      $.ajax({
          url: linkStop + '/set/' + '0'
      }).done(function() {
          console.log('sent Stop action complete');
      }).fail(function() {
          console.error('Fail to sent Stop action');
      });
    }})

    $('#newbut4').click(function(){
      if(click4==0){
        click4 = 1
      $('#newbut4').attr('class','btn btn btn-lg');
      $('#newbut4').text('');
      $('#newbut4').append('<span id="text2"class="glyphicon glyphicon-off" aria-hidden="true"></span> Locked')
      $.ajax({
          url: linkStop + '/set/' + '1'
      }).done(function() {
          console.log('sent Stop action complete');
      }).fail(function() {
          console.error('Fail to sent Stop action');
      });
    }else{
      click4 = 0
      $('#newbut4').attr('class','btn btn-danger btn-lg');
      $('#newbut4').text('');
      $('#newbut4').append('<span id="text2"class="glyphicon glyphicon-off" aria-hidden="true"></span> Lock Down')
      $.ajax({
          url: linkStop + '/set/' + '0'
      }).done(function() {
          console.log('sent Stop action complete');
      }).fail(function() {
          console.error('Fail to sent Stop action');
      });
    }})
    setupGraph(4, 3, 1, 3, 7);


    // addNew();
}
$().ready(main());
