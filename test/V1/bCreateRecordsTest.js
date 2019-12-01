import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../connection';
import impDB from './allTestDB';
import imptokelp from '../../server/V1/api/helpers/tokenHelper';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  const userToken = imptokelp.userCreatedToken;
  const adminToken = imptokelp.adminCreatedToken;


  it('users should not be able to create record when did not insert title of record', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', userToken)
      .send(impDB[18])
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

  it('users should not be able to create record when did not insert type of record', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', userToken)
      .send(impDB[19])
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

  it('users should not be able to create record when did not insert comment on record', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', userToken)
      .send(impDB[20])
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

  it('users should be able to create record when provide token', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', userToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'obused girls')
      .field('type', 'red-flags')
      .field('comment', 'test')
      .attach('images')
      .attach('videos')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('record');
        done(error);
      });
  });

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', adminToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'Bad road')
      .field('type', 'intervation')
      .field('comment', 'testo')
      .attach('images', 'server/V1/api/models/uploadedFiles/imga.png')
      .attach('videos', 'server/V1/api/models/uploadedFiles/sample.mp4')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('record');
        done(error);
      });
  });

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', adminToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'obused girls')
      .field('type', 'red-flags')
      .field('comment', 'test')
      .attach('images', 'server/V1/api/models/uploadedFiles/imga.png')
      .attach('videos', 'server/V1/api/models/uploadedFiles/sample.mp4')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('record');
        done(error);
      });
  });

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', userToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'obused girls')
      .field('type', 'red-flags')
      .field('comment', 'test')
      .attach('images', 'server/V1/api/models/uploadedFiles/imga.png')
      .attach('videos', 'server/V1/api/models/uploadedFiles/sample.mp4')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('record');
        done(error);
      });
  });

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', userToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'obused girls')
      .field('type', 'red-flags')
      .field('comment', 'test')
      .attach('images', 'server/V1/api/models/uploadedFiles/imga.png')
      .attach('videos', 'server/V1/api/models/uploadedFiles/sample.mp4')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('record');
        done(error);
      });
  });

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', userToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'obused girls')
      .field('type', 'red-flags')
      .field('comment', 'test')
      .attach('images', 'server/V1/api/models/uploadedFiles/imga.png')
      .attach('videos', 'server/V1/api/models/uploadedFiles/sample.mp4')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('record');
        done(error);
      });
  });

  it('users should be able to create record when did not have images or videos of record', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', userToken)
      .send(impDB[21])
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('record');
        done(error);
      });
  });
});
