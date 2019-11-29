import jwt from 'jsonwebtoken';

class TokHelp {
  userDetails(fromHeader) {
    return this.decodedToken = jwt.verify(fromHeader, process.env.SECRET_KEY);
  }
}

const expTokHelp = new TokHelp();
export default expTokHelp;
