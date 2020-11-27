var history = require('connect-history-api-fallback');
var connect = require('connect');
const serveStatic = require('serve-static');

let app = connect();
app.use(history());
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Listening on port ' + port)
});