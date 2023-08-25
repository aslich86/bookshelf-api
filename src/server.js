const Hapi = require('@hapi/hapi');

const server = Hapi.server({
    port: 9000,
    host: 'localhost',
});

module.exports = server; 
