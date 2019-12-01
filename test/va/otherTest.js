import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../connection';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  it('users should be redirected to api documentation when wrong', (done) => {
    router()
      .get('/jssdfbfuicnsdkcsdkjfdisfbn')
      .end((error, response) => {
        expect(response).to.have.status([400]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body.status).to.be.equal(400);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
        expect(response.body).to.have.property('link');
        done(error);
      });
  });
});
