function main() {
    // var linkMotion = ''
    var linkRain = ''
    var linkServo = ''
    var linkGas = ''
    // var linkSwitch = ''
    var linkLight = 'http://158.108.165.223/data/TUK40/alert'
    var linkPerson = 'http://158.108.165.223/data/TUK40/people'

    var switauto = 1;

    $('#switchrain').bootstrapToggle('disable')
    //progress bar action
    $('#pbar').attr('style', 'width:70%');
    $('#pbar').text('70' + '%');

    $('#switchauto').change(function() {
        if (switauto == 0) {
            switauto = 1;
            $('#switchrain').bootstrapToggle('disable')
        } else {
            switauto = 0;
            $('#switchrain').bootstrapToggle('enable')
            // $('#switchrain').prop('disabled', true);
        }
    });

    setInterval(function(){
      console.log();
      $('#tempbox').text('Temperature : '+Math.floor(Math.random()*42)+'°C')
    },Math.floor(Math.random()*50000))

    //Receive person data
    setInterval(function() {
        $.ajax({
            url: linkPerson
        }).done(function(data) {
            console.log('Receive Person is done');
            if (data == 2) {
                $('#personpic').attr('src', "pic/user.png");
                $('#personnum').text('x 2');
                $('#personnum').css('color', 'black');
                $('#passbox').css('background-color', 'white');
            } else if (data == 3) {
                $('#personpic').attr('src', "pic/user3.png");
                $('#personnum').text('x 3');
                $('#personnum').css('color', 'black');
                $('#passbox').css('background-color', 'white');
            } else if (data == 0) {
                $('#personpic').attr('src', "pic/512x5ff12.png");
                $('#personnum').text('x 0');
                $('#personnum').css('color', 'black');
                $('#passbox').css('background-color', 'white');
            } else if (data == 1) {
                $('#personpic').attr('src', "pic/512x5ff12.png");
                $('#personnum').text('x 1');
                $('#personnum').css('color', 'black');
                $('#passbox').css('background-color', 'white');
            } else {
                $('#personpic').attr('src', "pic/userMORE.png");
                $('#personnum').text('x ' + data);
                $('#personnum').css('color', 'red');
                $('#passbox').css('background-color', 'red');
            }
        }).fail(function() {
            console.error('Fail to receive Person');
        });
    }, 400);

    ////Receive Gas data
    // setInterval(function() {
    //     $.ajax({
    //         url: linkGas
    //     }).done(function(data) {
    //         console.log('Receive Gas is done');
    //     }).fail(function() {
    //         console.error('Fail to receive Gas');
    //     });
    // }, 400);

    //Receive Alcohol data
    // setInterval(function() {
    //     $.ajax({
    //         url: linkGas
    //     }).done(function(data) {
    //         console.log('Receive Alcohol is done');
    //         $('#recentAl').text('Recently : '+$('#alcohol').text()+' Mg%')
    //         $('#alcohol').text(data+' Mg%');
    //     }).fail(function() {
    //         console.error('Fail to receive Alcohol');
    //     });
    // }, 400);

    //Receive Light data
    setInterval(function() {
        $.ajax({
            url: linkLight
        }).done(function(data) {
            console.log('Receive Alcohol is done');
        }).fail(function() {
            console.error('Fail to receive Alcohol');
        });
    }, 400);

    // //Receive Switch data
    // setInterval(function() {
    //     $.ajax({
    //         url: linkSwitch
    //     }).done(function(data) {
    //         console.log('Receive Switch is done');
    //     }).fail(function() {
    //         console.error('Fail to receive Switch');
    //     });
    // }, 400);

    //set the Servo
    // $('#lightbutton').click(function() {
    //     var msg
    //     if ($('#survobutton').val() === 'open') {
    //         msg = 'OFF';
    //         // $("#doorbutton").prop('value', 'Save');
    //         $("#survobutton").val("close");
    //         $("#survobutton").text('Open the Umbrella');
    //     } else {
    //         msg = 'ON';
    //         // $("#doorbutton").prop('value', 'Save');
    //         $("#survobutton").val('open');
    //         $("#survobutton").text('Close the Umbrella');
    //     }
    //     $.ajax({
    //         url: linkLight + '/set/' + msg
    //     }).done(function() {
    //         console.log('sent survo action complete');
    //     }).fail(function() {
    //         console.error('Fail to sent survo action');
    //     });
    // });
}
$().ready(main());
