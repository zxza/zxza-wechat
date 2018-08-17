var ws = require("nodejs-websocket");

module.exports = ctx => {
    var server = ws.createServer(function(){}).listen(8081);
}