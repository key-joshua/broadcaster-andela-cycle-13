import dotenv from 'dotenv';
import crypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import impData from '../models/DB';
import imphelp from '../helpers/signupHelper';

const signinUsers = {
  loginUser(req, res) {
    const { email, password } = req.body;

    const ckEmail = imphelp.check_email_if_is_empty(email);
    if (ckEmail) return res.status(400).json({ status: 400, message: 'Hey Insert email !!' });
    const ckEmail1 = imphelp.check_email(email);
    if (ckEmail1) return res.status(400).json({ status: 400, message: 'Hey you are using Invalid email !!' });
    const ckPassword = imphelp.check_password_if_is_empty(password);
    if (ckPassword) return res.status(400).json({ status: 400, message: 'Hey Insert password !!' });


    const find_this_user = impData.check_if_email_exist(email);
    if (!find_this_user) { res.status(401).json({ status: 401, message: 'Hy wrong email' }); } else {
      crypt.compare(password, find_this_user.password, (err, result) => {
        if (result) {
          dotenv.config();
          const tokens = jwt.sign(find_this_user, process.env.SECRET_KEY, { expiresIn: '24000h' });
          res.status(200).json({ status: 200, message: `Hy ${find_this_user.username} your logged in successfully on ${imphelp.created}`, Token:  tokens  });
        } else {
          res.status(401).json({ status: 401, message: `Hy ${find_this_user.username} you are using wrong password ` });
        }
      });
    }
  },
};
export default signinUsers;
