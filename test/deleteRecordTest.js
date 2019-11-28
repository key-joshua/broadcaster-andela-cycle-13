import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../connection';
import imptokelp from '../server/v1/api/helpers/tokenHelper';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  const userToken = imptokelp.userCreatedToken;
  it('user should be able to delete record ', (done) => {
    const redflagids = 1;
    router()
      .delete(`/api/v1/red-flags/${redflagids}`)
      .set('Authorization', userToken)
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body.status).to.be.equal(200);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('users should not be able to delete record without recordId', (done) => {
    let redflagids;
    router()
      .delete(`/api/v1/red-flags/${redflagids}`)
      .set('Authorization', userToken)
      .end((error, response) => {
        expect(response).to.have.status([404]);
        expect(response.body.status).to.be.equal(404);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('user should not be able to delete record when used wrong recordId', (done) => {
    const redflagids = 100;
    router()
      .delete(`/api/v1/red-flags/${redflagids}`)
      .set('Authorization', userToken)
      .end((error, response) => {
        expect(response).to.have.status([404]);
        expect(response.body.status).to.be.equal(404);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });

  it('user should not be able to delete record when he/she is not owner of a record', (done) => {
    const redflagids = 3;
    router()
      .delete(`/api/v1/red-flags/${redflagids}`)
      .set('Authorization', userToken)
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        done(error);
      });
  });
});
