import crypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import impData from '../models/DB';
import Validator from '../helpers/validators';

const registerUsers = {
  signupUser(req, res) {
    const { username, email, password } = req.body;
    const upValidate = Validator.schemaSignUp(req.body);
    if (upValidate.error) {
      const mess = upValidate.error.details[0].message;
      const messUser = mess.replace(/\"/g, '');
      res.status(400).send({ status: 400, message: messUser });
    }
    if (!upValidate.error) {
      const ckEmail2 = impData.checkEmaiExist(email);
      if (ckEmail2) return res.status(409).json({ status: 409, message: `Hey ${username} this email *${email}* already taken !!` });

      const saltRound = 12;
      crypt.hash(password, saltRound, (err, hash) => {
        const hashed = { password: hash };
        const store = impData.create(req.body, hashed);
        const vistByToken = jwt.sign(store, process.env.SECRET_KEY, { expiresIn: '24000h' });
        res.status(201).json({ status: 201, message: `Hy ${username} your account have created successfully on ${Validator.created}`, token: vistByToken });
      });
    }
  },
};
export default registerUsers;
