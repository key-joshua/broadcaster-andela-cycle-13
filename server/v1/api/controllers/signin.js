import crypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import impData from '../models/DB';
import Validator from '../helpers/validators';

const signinUsers = {
  loginUser(req, res) {
    const { email, password } = req.body;
    const inValidate = Validator.schemaSignIn(req.body);
    if (inValidate.error) {
      const mess = inValidate.error.details[0].message;
      const messUser = mess.replace(/\"/g, '');
      res.status(400).send({ status: 400, message: messUser });
    }
    if (!inValidate.error) {
      const findThisUser = impData.checkEmaiExist(email);
      if (!findThisUser) { res.status(401).json({ status: 401, message: 'Hy You are using wrong Credentials' }); } else {
        crypt.compare(password, findThisUser.password, (err, result) => {
          if (result) {
            const tokens = jwt.sign(findThisUser, process.env.SECRET_KEY, { expiresIn: '24000h' });
            res.status(200).json({ status: 200, message: `Hy ${findThisUser.username} your logged in successfully on ${Validator.created}`, token: tokens });
          } else {
            res.status(401).json({ status: 401, message: `Hy ${findThisUser.username} You are using wrong Credentials ` });
          }
        });
      }
    }
  },
};
export default signinUsers;
