'use strict';


navigator.webkitGetUserMedia({audio: true, video: false}, function(e) {
    console.log('ok');
}, function(e) {
    console.log('webcam not ok');
});
