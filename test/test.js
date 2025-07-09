const request = require('supertest');
const app = require('../app');

describe('GET /', function () {
  it('should return Hello, GitHub Actions!', function (done) {
    request(app)
      .get('/')
      .expect('Hello, GitHub Actions!', done);
  });
});
