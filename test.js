const request = require('superagent');

request
    .post('http://localhost:3300/names')
    .send({
        name: 'Ryan'
    })
    .end(err => {
        if(err) console.error(err);
    });
