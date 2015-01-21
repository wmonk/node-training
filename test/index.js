var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');

describe('Server tests', function() {
    var server = request(app);

    it('Index Route', function(done) {
         server
            .get('/')
            .expect(200)
            .expect(/You are not logged in!/)
            .end(done);
    });

    it('Index Route', function(done) {
         server
            .get('/admin')
            .end(function (err, res) {
                expect(res.statusCode).to.equal(301);
                expect(res.redirect).to.be.true;

                done();
            });
    });
});
