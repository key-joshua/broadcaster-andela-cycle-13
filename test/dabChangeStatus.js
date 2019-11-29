import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import impDB from './allTestDB';
import app from '../connection';
import imptokelp from '../server/v1/api/helpers/tokenHelper';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  const adminToken = imptokelp.adminCreatedToken;
  const userToken = imptokelp.userCreatedToken;
  it('admin  should be able to change status of created record', (done) => {
    const redflagid = 3;
    router()
      .patch(`/api/v1/red-flags/${redflagid}/changestatus`)
      .set('Authorization', adminToken)
      .send(impDB[22])
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('changedRecord');
        done(error);
      });
  });

  it('admin  should not be able to change status of created record without token', (done) => {
    const redflagid = 3;
    router()
      .patch(`/api/v1/red-flags/${redflagid}/changestatus`)
      .send(impDB[22])
      .end((error, response) => {
        expect(response).to.have.status([401]);
        expect(response.body.status).to.be.equal(401);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('users should not be able to change status of created record', (done) => {
    const redflagid = 4;
    router()
      .patch(`/api/v1/red-flags/${redflagid}/changestatus`)
      .set('Authorization', userToken)
      .end((error, response) => {
        expect(response).to.have.status([403]);
        expect(response.body.status).to.be.equal(403);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('admin  should be able to skip to change status of created record', (done) => {
    const redflagid = 4;
    router()
      .patch(`/api/v1/red-flags/${redflagid}/changestatus`)
      .set('Authorization', adminToken)
      .send(impDB[0])
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('changedRecord');
        done(error);
      });
  });

  it('adnin  should not be able to change status of created record without redflagId', (done) => {
    let redflagid;
    router()
      .patch(`/api/v1/red-flags/${redflagid}/changestatus`)
      .set('Authorization', adminToken)
      .send(impDB[22])
      .end((error, response) => {
        expect(response).to.have.status([404]);
        expect(response.body.status).to.be.equal(404);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('adnin  should not be able to change status of created record with wrong redflagId', (done) => {
    const redflagid = 100;
    router()
      .patch(`/api/v1/red-flags/${redflagid}/changestatus`)
      .set('Authorization', adminToken)
      .send(impDB[22])
      .end((error, response) => {
        expect(response).to.have.status([404]);
        expect(response.body.status).to.be.equal(404);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });
});
