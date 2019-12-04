import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import impDB from './allTestDB';
import app from '../../connection';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  it('all users should be able to signin when when all inserted data are correct', (done) => {
    router()
      .post('/api/v2/auth/signin/')
      .send(impDB[15])
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('token');
        done(error);
      });
  });

  it('all users should not be able to signin when email field is empty', (done) => {
    router()
      .post('/api/v2/auth/signin/')
      .send(impDB[3])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });

  it('all users should not be able to signin when he/she used invalid email', (done) => {
    router()
      .post('/api/v2/auth/signin/')
      .send(impDB[4])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });

  it('all users should not be able to signin when password field is empty', (done) => {
    router()
      .post('/api/v2/auth/signin/')
      .send(impDB[7])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });

  it('all users should not be able to signin when try to use email which is not exist', (done) => {
    router()
      .post('/api/v2/auth/signin/')
      .send(impDB[13])
      .end((error, response) => {
        expect(response).to.have.status([401]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(401);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });

  it('all users should not be able to signin when try to use wrong password', (done) => {
    router()
      .post('/api/v2/auth/signin/')
      .send(impDB[14])
      .end((error, response) => {
        expect(response).to.have.status([401]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(401);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });
});
