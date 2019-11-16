import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../connection';
import imptokelp from './tokenHelper';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  const userToken = imptokelp.userCreatedToken;
  it('users should be able to view single record details', (done) => {
    const redflagid = 2;
    router()
      .get(`/api/v1/red-flags/${redflagid}`)
      .set('Authorization', userToken)
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('record');
        done(error);
      });
  });

  it('users should not be able to view single record details without recordId', (done) => {
    let redflagid;
    router()
      .get(`/api/v1/red-flags/${redflagid}`)
      .set('Authorization', userToken)
      .end((error, response) => {
        expect(response).to.have.status([404]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('users should not be able to view single record details when used wrong recordId', (done) => {
    const redflagid = 100;
    router()
      .get(`/api/v1/red-flags/${redflagid}`)
      .set('Authorization', userToken)
      .end((error, response) => {
        expect(response).to.have.status([404]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });
});
