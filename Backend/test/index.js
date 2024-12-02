const autocannon = require('autocannon');

const url = 'http://localhost:3000';
const duration = 30;

const instance = autocannon({
    url,
    duration,
}, (err, results) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Number of requests in 30 sec: ${results.requests}`);
    }
}
);

autocannon.track(instance);
