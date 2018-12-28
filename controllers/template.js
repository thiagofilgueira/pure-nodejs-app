const faker = require('faker');
const extractBody = require('../utils/extract_body');

function TemplateController(request, response) {
    extractBody(request, (body) => {
    const template = body.template;
    let result;

    if (!template) {
        result = `<b>Bad Request</b> 
            <p style='color: red;'>Parameter "template" is required!</p>
            <p>Example:<p>
            <code>
                {
                    "template": "Hello {{name.firstName}}"
                }
            </code>
            <br/><br/>
            <p><small>My sample pure NodeJs application utilize fake.js template.</small></p>
            <p><small>Read more about fake.js template <a href="https://github.com/Marak/faker.js/wiki" target="_blank">here</a>!</small></p>
        `;
        response.setHeader(
            'content-type', 'text/html; charset=UTF-8'
        );
        response.statusCode = 400;
        response.write(result);
    } else {
        result = faker.fake(template);
        //to response in JSON format
        response.setHeader(
            'content-type', 'application/json; charset=UTF-8'
        );
        response.write(JSON.stringify({ result }));
    }
    
    response.end();
   });
}
  
module.exports = TemplateController;