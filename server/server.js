const path = require('path');
const express = require('express');

const server = express();

server.use(express.static(path.join(__dirname, '../public')));

//For every other route server index.html
server.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

module.exports = server;
