var unirest = require('unirest'),
    OtaHost = 'http://192.168.1.5'; // Place here you OTA Server Url

var getCMList = function(){
    unirest
    .post(OtaHost + '/api')
    .headers({
        'Cache-control' : 'no-cache',
        'Content-type' : 'application/json',
        'User-Agent' : 'com.cyanogenmod.updater/2.3'
    })
    .send({
        'method' : 'get_all_builds',
        'params' : {
            'device' : 'p3110',
            'channels': [
                'stable',
                'snapshot',
                'RC',
                'nightly'
            ],
            // Optional: use this to get always the newest zips based on the current one.
            // If not used: will get all the zips.
            //'source_incremental' : ''
        }
    })
    .end(function(response){
        console.log( response.body );
    });
}

getCMList();
