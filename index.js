function main() {
    var linkMotion = ''
    var linkRain = ''
    var linkServo = ''
    var linkGas = ''
    var linkSwitch = ''
    var linkLight = ''

    //progress bar action
    progress = setInterval(function()
    {
        if($('#progress-text').text()=='0%'){
        $('#progress-text').text('70' + '%');
        $('#progress-bar').css({'width':'70'+'%'});
    }}, 1000);

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
    setInterval(function() {
        $.ajax({
            url: linkGas
        }).done(function(data) {
            console.log('Receive Alcohol is done');
            $('#recentAl').text('Recently : '+$('#alcohol').text()+' Mg%')
            $('#alcohol').text(data+' Mg%');
        }).fail(function() {
            console.error('Fail to receive Alcohol');
        });
    }, 400);

    //Receive Light data
    // setInterval(function() {
    //     $.ajax({
    //         url: linkLight
    //     }).done(function(data) {
    //         console.log('Receive Alcohol is done');
    //     }).fail(function() {
    //         console.error('Fail to receive Alcohol');
    //     });
    // }, 400);

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
    $('#lightbutton').click(function() {
        var msg
        if ($('#survobutton').val() === 'open') {
            msg = 'OFF';
            // $("#doorbutton").prop('value', 'Save');
            $("#survobutton").val("close");
            $("#survobutton").text('Open the Umbrella');
        } else {
            msg = 'ON';
            // $("#doorbutton").prop('value', 'Save');
            $("#survobutton").val('open');
            $("#survobutton").text('Close the Umbrella');
        }
        $.ajax({
            url: linkLight + '/set/' + msg
        }).done(function() {
            console.log('sent survo action complete');
        }).fail(function() {
            console.error('Fail to sent survo action');
        });
    });

}
$().ready(main());
