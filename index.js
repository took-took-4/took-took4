function main() {
    // var linkMotion = ''
    var linkRain = ''
    var linkServo = ''
    var linkGas = ''
    // var linkSwitch = ''
    var linkLight = 'http://158.108.165.223/data/TUK40/alert'
    var linkPerson = ''

    var switauto = 1;

    $('#switchrain').bootstrapToggle('disable')
    //progress bar action
    setInterval(function() {
        if ($('#progress-bar').text() == '0%') {
            $('#progress-bar').text('70' + '%');
            $('#progress-bar').attr('style', 'width:70%');
        }
    }, 1000);

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

    // //Receive person data
    // setInterval(function() {
    //     $.ajax({
    //         url: linkPerson
    //     }).done(function(data) {
    //         console.log('Receive Person is done');
    //         if (data == 2) {
    //           $('#personpic').attr('src',"pic/user2.png");
    //           $('#personnum').text('x 2');
    //           $('#personnum').css('color','black');
    //         }
    //         else if (data==3) {
    //           $('#personpic').attr('src',"pic/user3.png");
    //           $('#personnum').text('x 3');
    //           $('#personnum').css('color','black');
    //         }
    //         else{
    //           $('#personpic').attr('src',"pic/userMORE.png");
    //           $('#personnum').text('x '+data);
    //           $('#personnum').css('color','red');
    //         }
    //     }).fail(function() {
    //         console.error('Fail to receive Person');
    //     });
    // }, 400);

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
