const faker = require('faker');
const url = require('url');
const querystring = require('querystring');

function RootController(request, response) {
    const parsedUrl = url.parse(request.url);
    const parameters = querystring.parse(parsedUrl.query);

    let result;

    if (!parameters.template) {
        result = `<b>Bad Request</b> 
            <p style='color: red;'>Parameter "template" is required!</p>
            <p>Example:<p>
            <code>
                ?template=Hello {{name.firstName}}!
            </code>
            <br/><br/>
            <p><small>My sample pure NodeJs application utilize fake.js template.</small></p>
            <p><small>Read more about fake.js template <a href="https://github.com/Marak/faker.js/wiki" target="_blank">here</a>!</small></p>
        `;
        response.setHeader(
            'content-type', 'text/html; charset=UTF-8'
        );
        response.statusCode = 400;
    } else {
        result = faker.fake(parameters.template);
    }

    response.write(result);
    response.end();
}

module.exports = RootController;