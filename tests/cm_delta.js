var unirest = require('unirest'),
    OtaHost = 'http://192.168.1.5'; // Place here you OTA Server Url

// Provide a list of currently available Delta updates
var getDeltaUpdate = function(){
    unirest
    .post(OtaHost + '/api/v1/build/get_delta')
    .headers({
        'Cache-control' : 'no-cache',
        'Content-type' : 'application/json',
        'User-Agent' : 'com.cyanogenmod.updater/2.3'
    })
    .send({
        'source_incremental' : '68fb067fc8', // 31-gen-2014
        'target_incremental' : '0051d4688f' // 01-feb-2014
    })
    .end(function(response){
        console.log( response.body );
    });
}

getDeltaUpdate();
