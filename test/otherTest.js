import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../connection';

chai.use(chaiHttp);
const router = () => chai.request(app);
describe('my Testing suite', () => {
  it('admin should be able to view all users details', (done) => {
    router()
      .get('/jssdfbfuicnsdkcsdkjfdisfbn')
      .end((error, response) => {
        expect(response).to.have.status([200]);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('status');
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('link');
        done(error);
      });
  });
});
