const http = require('http');
const port = process.env.PORT || 8080;

function handleRequest(request, response) {
    const path = request.url;
response.end("Heroku");
   
const server = http.createServer(handleRequest);

server.listen(port, function() {
    console.log(`Server listening on port ${port}`);
})
}