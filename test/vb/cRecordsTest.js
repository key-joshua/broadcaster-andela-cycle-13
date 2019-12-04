import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../connection';
import imptokelp from '../../server/v2/api/helpers/tokenHelper';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  const userToken = imptokelp.userCreatedToken;
  it('users should be able to view all records details', (done) => {
    router()
      .get('/api/v2/red-flags/')
      .set('Authorization', userToken)
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

  it('users should not be able to view all records details without user token', (done) => {
    router()
      .get('/api/v2/red-flags/')
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
});
