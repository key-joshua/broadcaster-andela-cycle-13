import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../connection';
import impDB from './allTestDB';
import imptokelp from '../../server/v2/api/helpers/tokenHelper';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  const userToken = imptokelp.userCreatedToken;
  const invalid = imptokelp.invalidToken;


  it('users should not be able to create record when did not insert title of record', (done) => {
    router()
      .post('/api/v2/red-flags/')
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
      .post('/api/v2/red-flags/')
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
      .post('/api/v2/red-flags/')
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

  it('users and admin should not be able to view recordds when token invalid', (done) => {
    router()
      .post('/api/v2/red-flags/')
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

  it('users should not be able to create record used wrong record type', (done) => {
    router()
      .post('/api/v2/red-flags/')
      .set('Authorization', userToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'Bad road')
      .field('type', 'redflags')
      .field('comment', 'testo')
      .attach('images', 'server/v1/api/models/uploadedFiles/imga.png')
      .attach('videos', 'server/v1/api/models/uploadedFiles/sample.mp4')
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

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v2/red-flags/')
      .set('Authorization', userToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'Bad road')
      .field('type', 'intervetion')
      .field('comment', 'testo')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v2/red-flags/')
      .set('Authorization', userToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'Bad road')
      .field('type', 'intervetion')
      .field('comment', 'testo')
      .attach('images', 'server/v2/api/models/uploadedFiles/hungry.png')
      .attach('videos', 'server/v2/api/models/uploadedFiles/sample.mp4')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v2/red-flags/')
      .set('Authorization', userToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'obused girls')
      .field('type', 'redflag')
      .field('comment', 'test')
      .attach('images', 'server/v2/api/models/uploadedFiles/hungry.png')
      .attach('videos', 'server/v2/api/models/uploadedFiles/sample.mp4')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v2/red-flags/')
      .set('Authorization', userToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'obused girls')
      .field('type', 'redflag')
      .field('comment', 'test')
      .attach('images', 'server/v2/api/models/uploadedFiles/hungry.png')
      .attach('videos', 'server/v2/api/models/uploadedFiles/sample.mp4')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v2/red-flags/')
      .set('Authorization', userToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'obused girls')
      .field('type', 'redflag')
      .field('comment', 'test')
      .attach('images', 'server/v2/api/models/uploadedFiles/hungry.png')
      .attach('videos', 'server/v2/api/models/uploadedFiles/sample.mp4')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });

  it('users should be able to create record with images and videos when provide token', (done) => {
    router()
      .post('/api/v2/red-flags/')
      .set('Authorization', userToken)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field('title', 'obused girls')
      .field('type', 'redflag')
      .field('comment', 'test')
      .attach('images', 'server/v2/api/models/uploadedFiles/hungry.png')
      .attach('videos', 'server/v2/api/models/uploadedFiles/sample.mp4')
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });

  it('users should be able to create record when did not have images or videos of record', (done) => {
    router()
      .post('/api/v2/red-flags/')
      .set('Authorization', userToken)
      .send(impDB[21])
      .end((error, response) => {
        expect(response).to.have.status([201]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(201);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });
});
