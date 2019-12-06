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
  const invalidadmin = imptokelp.invalidTokenAdmin;
  it('admin  should be able to change status of created record', (done) => {
    const redflagid = 3;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/changestatus`)
      .set('Authorization', adminToken)
      .send(impDB[22])
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

  it('admin  should not be able to change status of created record without token', (done) => {
    const redflagid = 3;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/changestatus`)
      .send(impDB[22])
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

  it('admin should not be able to change status of records when token invalid', (done) => {
    const redflagid = 3;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/changestatus`)
      .send(impDB[22])
      .set('Authorization', invalidadmin)
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

  it('admin  should not be able to change status used wrong status', (done) => {
    const redflagid = 3;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/changestatus`)
      .set('Authorization', adminToken)
      .send(impDB[25])
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

  it('users should not be able to change status of created record', (done) => {
    const redflagid = 4;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/changestatus`)
      .set('Authorization', userToken)
      .end((error, response) => {
        expect(response).to.have.status([403]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(403);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        done(error);
      });
  });

  it('admin  should be able to skip to change status of created record', (done) => {
    const redflagid = 4;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/changestatus`)
      .set('Authorization', adminToken)
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

  it('admin  should not be able to change status of created record without redflagId', (done) => {
    const redflagid = 100;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/changestatus`)
      .set('Authorization', adminToken)
      .send(impDB[22])
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

  it('admin  should not be able to change status of created record with wrong redflagId', (done) => {
    const redflagid = 100;
    router()
      .patch(`/api/v2/red-flags/${redflagid}/changestatus`)
      .set('Authorization', adminToken)
      .send(impDB[22])
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
});
