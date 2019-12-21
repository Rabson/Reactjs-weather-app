const { apiKey, appName, secretKey } = require('../config')
const OAuth = require('oauth');
const header = {
    "X-Yahoo-App-Id": appName //"your-app-id"
};
const request = new OAuth.OAuth(
    null,
    null,
    apiKey,     // 'your-consumer-key'
    secretKey, //'your-consumer-secret'
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);


const forecast = (region = 'sunnyvale,ca') => {
    return new Promise((resolve, reject) => {
        request.get(
            `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${region}&format=json`,
            null,
            null,
            function (err, data, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }
        );
    })
}

const forecastByZIpcode = (data) => {
    return new Promise((resolve, reject) => {
        request.get(
            `https://www.yahoo.com/news/weather/${data.country}/${data.city}/${data.zipcode}`,
            null,
            null,
            function (err, data, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }
        );
    })
}

module.exports = {
    forecast :forecast,
    forecastByZIpcode: forecastByZIpcode
}