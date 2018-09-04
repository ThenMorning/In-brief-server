const request = require('request');

const _GET = url => new Promise((resolve, reject) => request.get(url, (err, response, body) => {
    if (err) {
        reject(err);
    } else {
        resolve(body);
    }
}))

const _POST = (url, requestData) => new Promise((resolve, reject) => request({
    url: url,
    method: "POST",
    json: true,
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(requestData)
}, (err, response, body) => {
    if (err) {
        reject(err);
    } else {
        resolve(body);
    }
}))



module.exports = {
    _GET,
    _POST
}