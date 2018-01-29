const FB = require('fb');
const fs = require('fs');

const APP_ID = '';
const APP_SECRET = '';
const ACCESS_TOKEN = '';

FB.options({
    appId: APP_ID,
    appSecret: APP_SECRET
});

FB.setAccessToken(ACCESS_TOKEN);


FB.api('me/videos', 'post', {
    source: fs.createReadStream('uploads/1.mp4')
    , caption: 'Google'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }
    console.log('Post Id: ' + res.post_id);
});

FB.api('me/photos', 'post', {
    source: fs.createReadStream('uploads/5.png')
    , caption: 'Google'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }
    console.log('Post Id: ' + res.post_id);
});
