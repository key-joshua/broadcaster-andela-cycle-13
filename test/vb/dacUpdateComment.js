import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import impDB from './allTestDB';
import app from '../../connection';
import imptokelp from '../../server/v2/api/helpers/tokenHelper';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  const adminToken = imptokelp.adminCreatedToken;
  const userToken = imptokelp.userCreatedToken;
  const invalid = imptokelp.invalidToken;

  it('users should not be able to update record without recordId', (done) => {
    const redflagid = 100;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/comment`)
      .set('Authorization', userToken)
      .end((error, response) => {
        expect(response).to.have.status([404]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(404);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });

  it('user  should be able to skip update his/her created record', (done) => {
    const redflagid = 4;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/comment`)
      .set('Authorization', userToken)
      .send(impDB[0])
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });

  it('users and admin should not be able to update recordds comment when token invalid', (done) => {
    const redflagid = 4;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/comment`)
      .send(impDB[22])
      .set('Authorization', invalid)
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

  it('user  should not be able to update his/her created record with wrong redflagId', (done) => {
    const redflagid = 100;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/comment`)
      .set('Authorization', userToken)
      .send(impDB[17])
      .end((error, response) => {
        expect(response).to.have.status([404]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(404);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });

  it('user  should not be able to update his/her created record Location of other user', (done) => {
    const redflagid = 4;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/comment`)
      .set('Authorization', adminToken)
      .send(impDB[17])
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

  it('users should be able to update a certain record details when provide token', (done) => {
    const redflagid = 4;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/comment`)
      .set('Authorization', userToken)
      .field('Content-Type', 'multipart/form-data')
      .field('title', 'obused girls')
      .field('type', 'redflag')
      .field('latitude', '23')
      .field('longitude', '0.111')
      .attach('images', 'server/v1/api/models/uploadedFiles/imga.png')
      .attach('videos', 'server/v1/api/models/uploadedFiles/sample.mp4')
      .field('comment', 'test')
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });

  it('users should be able to update record with images and videos when provide token', (done) => {
    const redflagid = 4;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/comment`)
      .set('Authorization', userToken)
      .field('Content-Type', 'multipart/form-data')
      .field('title', 'obused girls')
      .field('type', 'redflag')
      .field('latitude', '23')
      .field('longitude', '0.111')
      .field('comment', 'test')
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });
});
