function main() {
    var linkMotion = ''
    var linkRain = ''
    var linkServo = ''
    var linkGas = ''
    var linkSwitch = ''
    var linkLight = ''

    progress = setInterval(function()
    {
        if($('#progress-text').text()=='0%'){
        $('#progress-text').text('70' + '%');
        $('#progress-bar').css({'width':'70'+'%'});
    }}, 1000);
    // setInterval(function() {
    //         if (  $('#gasbar').attr('aria-valuenow')==40) {
    //           $('#progress .progress-text').text(progression + '%');
    //           $('#progress .progress-bar').css({'width':progression+'%'});
    //         }}, 1000)

    // setInterval(function() {
    //     $.ajax({
    //         url: linkDoor
    //     }).done(function(data) {
    //         console.log('done');
    //         if (data == 1 || data == 2) {
    //             $('#doorbox').val('Door : Open');
    //             $('#doorbutton').val('open');
    //         } else {
    //             $('#doorbox').val('Door : Close');
    //             $('#doorbutton').val('close');
    //         }
    //     }).fail(function() {
    //         console.error('Fail to receive Door');
    //     });
    // }, 400);
}
$().ready(main());
