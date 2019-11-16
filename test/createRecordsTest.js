import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../connection';
import impDB from './allTestDB';
import imptokelp from '../server/v1/api/helpers/tokenHelper';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  const userToken = imptokelp.userCreatedToken;


  it('users should not be able to create record when did not insert title of record', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', userToken)
      .send(impDB[18])
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
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
        expect(response.body).to.have.property('message');
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
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('users should be able to create record when provide token', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', userToken)
      .field('Content-Type', 'multipart/form-data')
      .field('title', 'obused girls')
      .field('type', 'red-flags')
      .field('comment', 'test')
      .attach('images')
      .attach('videos')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('record');
        done(error);
      });
  });

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v1/red-flags/')
      .set('Authorization', userToken)
      .field('Content-Type', 'multipart/form-data')
      .field('title', 'obused girls')
      .field('type', 'red-flags')
      .field('comment', 'test')
      .attach('images', 'server/v1/api/models/uploadedFiles/imga.png')
      .attach('videos', 'server/v1/api/models/uploadedFiles/sample.mp4')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
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
        expect(response.body).to.have.property('message');
        done(error);
      });
  });
});
