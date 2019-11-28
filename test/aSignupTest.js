import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import impDB from './allTestDB';
import app from '../connection';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  it('all users should not be able to signup when firstname field is empty', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[0])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('all users should not be able to signup when lastname field is empty', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[1])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('all users should not be able to signup when username field is empty', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[2])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('all users should not be able to signup when email field is empty', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[3])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('all users should not be able to signup when he/she used invalid email', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[4])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('all users should not be able to signup when phone number field is empty', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[6])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('all users should not be able to signup when password field is empty', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[7])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('all users should not be able to signup when password should not contain at least six characters', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[8])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('all users should not be able to signup when password should not contain numbers', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[9])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('all users should not be able to signup when password should not contain special characters', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[10])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('all users should not be able to signup when he/she use sample password', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[11])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });


  it('all users should be able to signup when when all inserted data are correct', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[23])
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.be.a('object');
        done(error);
      });
  });

  it('all users should be able to signup when when all inserted data are correct', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[24])
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.be.a('object');
        done(error);
      });
  });

  it('all users should be able to signup when when all inserted data are correct', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[12])
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('token');
        expect(response.body.token).to.be.a('string');
        done(error);
      });
  });

  it('all users should not be able to signup when he/she used exist email', (done) => {
    router()
      .post('/api/v1/auth/signup/')
      .send(impDB[23])
      .end((error, response) => {
        expect(response).to.have.status([409]);
        expect(response.body.status).to.be.eql(409);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });
});
