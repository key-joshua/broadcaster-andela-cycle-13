import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import impDB from './allTestDB';
import app from '../../connection';
import imptokelp from '../../server/V1/api/helpers/tokenHelper';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  const adminToken = imptokelp.adminCreatedToken;
  const userToken = imptokelp.userCreatedToken;
  it('user  should be able to update his/her created record', (done) => {
    const redflagid = 4;
    router()
      .patch(`/api/v1/red-flags/${redflagid}/location`)
      .set('Authorization', userToken)
      .send(impDB[17])
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('updateRecord');
        done(error);
      });
  });

  it('users should not be able to update record without recordId', (done) => {
    let redflagid;
    router()
      .patch(`/api/v1/red-flags/${redflagid}/location`)
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
      .patch(`/api/v1/red-flags/${redflagid}/location`)
      .set('Authorization', userToken)
      .send(impDB[0])
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('updateRecord');
        done(error);
      });
  });

  it('user  should not be able to update his/her created record Location with wrong redflagId', (done) => {
    const redflagid = 100;
    router()
      .patch(`/api/v1/red-flags/${redflagid}/location`)
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
      .patch(`/api/v1/red-flags/${redflagid}/location`)
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
});
