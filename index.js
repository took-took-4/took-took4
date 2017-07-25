function main() {
    // var linkMotion = ''
    var linkRain = 'http://158.108.165.223/data/TUK40/rain'
    var linkServo = 'http://158.108.165.223/data/TUK40/roof'
    var linkGas = 'http://158.108.165.223/data/TUK40/gas'
    // var linkSwitch = ''
    var linkLight = 'http://158.108.165.223/data/TUK40/alert'
    var linkPerson = 'http://158.108.165.223/data/TUK40/people'
    var linkAlcohol = 'http://158.108.165.223/data/TUK40/alcohol'

    var switauto = 1;
    var notRed = true;
    var notRedgas = true;
    var swit = 1;
    var nonManual = true;

    $('#switchrain').bootstrapToggle('off')


    $('#switchrain').bootstrapToggle('disable')
    //progress bar action
    $('#pbar').attr('style', 'width:70%');
    $('#pbar').text('70' + '%');

    $('#switchauto').change(function() {
        if (switauto == 0) {
            switauto = 1;
            $('#switchrain').bootstrapToggle('disable')
            nonManual = true;
        } else {
            nonManual = false;
            switauto = 0;
            $('#switchrain').bootstrapToggle('enable')
            // $('#switchrain').prop('disabled', true);
        }
    });

    setInterval(function() {
        $.ajax({
            url: linkServo
        }).done(function(data) {
            console.log('Receive Servo is done');
            swit = data;
        }).fail(function() {
            console.error('Fail to receive Servo');
        });
    }, 400);


    $('#switchrain').change(function() {
        if (swit == 0) {
            swit = 1;
            $.ajax({
                url: linkServo + '/set/' + swit
            }).done(function() {
                console.log('sent survo action complete');
            }).fail(function() {
                console.error('Fail to sent survo action');
            });
        } else {
            swit = 0;
            $.ajax({
                url: linkServo + '/set/' + swit
            }).done(function() {
                console.log('sent survo action complete');
            }).fail(function() {
                console.error('Fail to sent survo action');
            }); // $('#switchrain').prop('disabled', true);
        }
    })

    $('#graphpic').hover(function() {
        $('#graphpic').attr('width', '45%')
        $('#graphpic').attr('height', '45%')

    })
    $('#graphpic').mouseleave(function() {
        $('#graphpic').attr('width', '40%')
        $('#graphpic').attr('height', '40%')

    })

    $('#rainpic').hover(function() {
        $('#rainpic').attr('width', '45%')
        $('#rainpic').attr('height', '45%')

    })
    $('#rainpic').mouseleave(function() {
        $('#rainpic').attr('width', '40%')
        $('#rainpic').attr('height', '40%')

    })

    setInterval(function() {
        console.log();
        $('#tempbox').text('Temperature : ' + (Math.floor(Math.random() * 6) + 22) + '°C')
    }, 30000)

    //Receive person data
    setInterval(function() {
        $.ajax({
            url: linkPerson
        }).done(function(data) {
            console.log('Receive Person is done');
            if (data == 2) {
                notRedgas = true;
                $('#personpic').attr('src', "pic/user.png");
                $('#personnum').text('x 2');
                $('#personnum').css('color', 'black');
                $('#passbox').css('background-color', 'white');
                if (notRed) {
                    $.ajax({
                        url: linkLight + '/set/' + '0'
                    }).done(function() {
                        console.log('set alert complete');
                    }).fail(function() {
                        console.error('fail to set alarm');
                    })
                }
            } else if (data == 3) {
                notRedgas = true;
                $('#personpic').attr('src', "pic/user3.png");
                $('#personnum').text('x 3');
                $('#personnum').css('color', 'black');
                $('#passbox').css('background-color', 'white');
                if (notRed) {
                    $.ajax({
                        url: linkLight + '/set/' + '0'
                    }).done(function() {
                        console.log('set alert complete');
                    }).fail(function() {
                        console.error('fail to set alarm');
                    })
                }
            } else if (data == 0) {
                notRedgas = true;
                $('#personpic').attr('src', "pic/512x5ff12.png");
                $('#personnum').text('x 0');
                $('#personnum').css('color', 'black');
                $('#passbox').css('background-color', 'white');
                if (notRed) {
                    $.ajax({
                        url: linkLight + '/set/' + '0'
                    }).done(function() {
                        console.log('set alert complete');
                    }).fail(function() {
                        console.error('fail to set alarm');
                    })
                }
            } else if (data == 1) {
                notRedgas = true;
                $('#personpic').attr('src', "pic/512x5ff12.png");
                $('#personnum').text('x 1');
                $('#personnum').css('color', 'black');
                $('#passbox').css('background-color', 'white');
                if (notRed) {
                    $.ajax({
                        url: linkLight + '/set/' + '0'
                    }).done(function() {
                        console.log('set alert complete');
                    }).fail(function() {
                        console.error('fail to set alarm');
                    })
                }
            } else {
                $('#personpic').attr('src', "pic/caution.png");
                $('#personnum').text('x ' + data);
                $('#personnum').css('color', 'red');
                $('#passbox').css('background-color', 'red');
                notRedgas = false;
                $.ajax({
                    url: linkLight + '/set/' + '1'
                }).done(function() {
                    console.log('set alert complete');
                }).fail(function() {
                    console.error('fail to set alarm');
                })
            }
        }).fail(function() {
            console.error('Fail to receive Person');
        });
    }, 400);

    //Receive Gas data
    setInterval(function() {
        $.ajax({
            url: linkGas
        }).done(function(data) {
            console.log('Receive Gas is done');
            if (data > 100) {
                $('#gasbox').css('background-color', 'red');
                notRed = false;
                $.ajax({
                    url: linkLight + '/set/' + '1'
                }).done(function() {
                    console.log('set alert complete');
                }).fail(function() {
                    console.error('fail to set alarm');
                })
            } else {
                $('#gasbox').css('background-color', 'white');
                if(notRedgas){
                $.ajax({
                    url: linkLight + '/set/' + '0'
                }).done(function() {
                    console.log('set alert complete');
                }).fail(function() {
                    console.error('fail to set alarm');
                })
                notRed = true;
            }
        }}).fail(function() {
            console.error('Fail to receive Gas');
        });
    }, 400);

    //Receive Rain data
    setInterval(function() {
        $.ajax({
            url: linkRain
        }).done(function(data) {
            console.log('Receive Rain is done');
            $('#rainbox').text(' Rainfall : ' + data + ' mm ');
            if (data < 800) {
                if (nonManual) {
                    $.ajax({
                        url: linkServo + '/set/' + '1'
                    }).done(function() {
                        console.log('sent survo action complete');
                    }).fail(function() {
                        console.error('Fail to sent survo action');
                    });
                }
            } else {
                if (nonManual) {
                    $.ajax({
                        url: linkServo + '/set/' + '0'
                    }).done(function() {
                        console.log('sent survo action complete');
                    }).fail(function() {
                        console.error('Fail to sent survo action');
                    });
                }
            }
        }).fail(function() {
            console.error('Fail to receive Rain');
        });
    }, 400);

    //Receive Alcohol data
    setInterval(function() {
        $.ajax({
            url: linkAlcohol
        }).done(function(data) {
            console.log('Receive Alcohol is done');
            $('#alcohol').text(Math.floor(data / 6.5) + ' Mg%');
            if (data > 130) {
                $('#albox').css('background-color', 'red');
            } else {
                $('#albox').css('background-color', 'white');
            }
        }).fail(function() {
            console.error('Fail to receive Alcohol');
        });
    }, 400);

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

    // set the Servo
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
    //         url: linkServo + '/set/' + msg
    //     }).done(function() {
    //         console.log('sent survo action complete');
    //     }).fail(function() {
    //         console.error('Fail to sent survo action');
    //     });
    // });
}
$().ready(main());
