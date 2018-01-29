const FB = require('fb');
const fs = require('fs');

const APP_ID = '';
const APP_SECRET = '';
const ACCESS_TOKEN = '';
const LONG_LIVED_ACCESS_TOKEN = '';

FB.options({
    appId: APP_ID,
    appSecret: APP_SECRET
});

FB.setAccessToken(LONG_LIVED_ACCESS_TOKEN);


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

FB.api('oauth/access_token', {
    client_id: APP_ID,
    client_secret: APP_SECRET,
    grant_type: 'fb_exchange_token',
    fb_exchange_token: ACCESS_TOKEN
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    const accessToken = res.access_token;
    const expires = res.expires ? res.expires : 0;

    console.log(accessToken, expires)
});
