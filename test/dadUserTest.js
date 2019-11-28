import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../connection';
import imptokelp from '../server/v1/api/helpers/tokenHelper';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  const adminToken = imptokelp.adminCreatedToken;
  const userToken = imptokelp.userCreatedToken;
  it('admin should be able to view all users profile', (done) => {
    router()
      .get('/api/v1/users/')
      .set('Authorization', adminToken)
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });

  it('users should be able to view all users profile with user token ', (done) => {
    router()
      .get('/api/v1/users/')
      .set('Authorization', userToken)
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('data');
        done(error);
      });
  });

  it('admin and users should not be able to view all users profile without token', (done) => {
    router()
      .get('/api/v1/users/')
      .end((error, response) => {
        expect(response).to.have.status([401]);
        expect(response.body.status).to.be.equal(401);
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });
});
