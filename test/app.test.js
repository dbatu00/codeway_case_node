const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // assuming your main file is named index.js
const expect = chai.expect;


chai.use(chaiHttp);

describe('Test the server', () => {
  it('should return welcome message on / GET', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome to the homepage');
        done();
      });
  });

  it('should return about message on /about GET', (done) => {
    chai.request(app)
      .get('/about')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('This is the about page');
        done();
      });
  });

  it('should return contact information on /contact GET', (done) => {
    chai.request(app)
      .get('/contact')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Contact us at contact@example.com');
        done();
      });
  });
});
