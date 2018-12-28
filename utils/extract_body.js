/**
 * Example:
 * https://nodejs.org/api/stream.html#stream_api_for_stream_consumers
 */
function extractBody(request, callback) {
    let body = '';
    request.setEncoding('utf-8');
    request.on('data', (chunk) => body += chunk);
    request.on('end', () => {
      if (request.headers['content-type'] === 'application/json') {
        return callback(JSON.parse(body));
      }
      return callback(body);
   });
}
  
module.exports = extractBody;