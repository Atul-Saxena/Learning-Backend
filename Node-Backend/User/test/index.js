const autocannon = require('autocannon');

const url = ['http://localhost:4000', 'http://localhost:4000/:id'];
const duration = 30;

const results = url.map(url => {
    return new Promise((resolve, reject) => {
        const instance = autocannon({
            url,
            duration,
        }, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    url,
                    requests: res.requests.total,
                    duration: res.duration
                });
            }
        });
    });
});

Promise.all(results).then(data => {
    data.forEach(result => {
        console.log(`Number of requests to ${result.url} in 30 sec: ${result.requests}`);
        console.log(`Duration of requests to ${result.url}: ${result.duration}`);
    });
}).catch(err => {
    console.error(err);
});
