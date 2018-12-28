function NotFoundController(request, response) {
    response.statusCode = 404;
    response.write('Not found! ' + response.statusCode);
    response.end();
}

module.exports = NotFoundController;