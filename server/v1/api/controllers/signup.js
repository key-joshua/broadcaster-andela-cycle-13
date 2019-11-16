import dotenv from 'dotenv';
import crypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import impData from '../models/DB';
import imphelp from '../helpers/signupHelper';

const registerUsers = {
  signupUser(req, res) {
    const { firstname, lastname, username, email, phone, password } = req.body;
    const ckfName = imphelp.check_firstName_if_is_empty(firstname);
    if (ckfName) return res.status(400).json({ status: 400, message: 'Hey Insert firstname !!' });
    const cklName = imphelp.check_lastName_if_is_empty(lastname);
    if (cklName) return res.status(400).json({ status: 400, message: `Hey ${firstname} Insert lastname !!` });
    const ckuName = imphelp.check_userName_if_is_empty(username);
    if (ckuName) return res.status(400).json({ status: 400, message: `Hey ${firstname} Insert username !!` });
    const ckEmail = imphelp.check_email_if_is_empty(email);
    if (ckEmail) return res.status(400).json({ status: 400, message: `Hey ${username} Insert email !!` });
    const ckEmail1 = imphelp.check_email(email);
    if (ckEmail1) return res.status(400).json({ status: 400, message: `Hey ${username} you are using Invalid email !!` });
    const ckEmail2 = impData.check_if_email_exist(email);
    if (ckEmail2) return res.status(409).json({ status: 409, message: `Hey ${username} this email *${email}* already exsit !!` });
    const ckPhone = imphelp.check_phone_if_is_empty(phone);
    if (ckPhone) return res.status(400).json({ status: 400, message: `Hey ${username} Insert phone number !!` });
    const ckPassword = imphelp.check_password_if_is_empty(password);
    if (ckPassword) return res.status(400).json({ status: 400, message: `Hey ${username} Insert password !!` });
    const ckPassword1 = imphelp.check_length_password(password);
    if (ckPassword1) return res.status(400).json({ status: 400, message: `Hey ${username} password should contain at least six characters !!` });
    const ckPassword2 = imphelp.check_if_password_contains_number(password);
    if (ckPassword2) return res.status(400).json({ status: 400, message: `Hey ${username} password should contain number !!` });
    const ckPassword3 = imphelp.check_if_password_contains_special_character(password);
    if (ckPassword3) return res.status(400).json({ status: 400, message: `Hey ${username} password should contain special character like qwerty@123 !!` });
    const ckPassword4 = imphelp.check_if_the_use_sample(password);
    if (ckPassword4) return res.status(400).json({ status: 400, message: `Hey ${username} you are not allowed to use  qwerty@123 password it is sample` });

    const saltRound = 12;
    crypt.hash(password, saltRound, (err, hash) => {
      const readyDatas = {
        firstname: firstname.toString().trim().toLowerCase(),
        lastname: lastname.toString().trim().toLowerCase(),
        username: username.toString().trim().toLowerCase(),
        email: email.toString().trim().toLowerCase(),
        phone: phone,
        password: hash,
      };
      impData.create(readyDatas);
      dotenv.config();
      const vistByToken = jwt.sign(readyDatas, process.env.SECRET_KEY, { expiresIn: '24000h' });
      const find_id_of_this_user = impData.check_if_email_exist(email);
      const visitByLink = `Also, You can use this link /api/v1/auth/users/${find_id_of_this_user.id} to visit your account`;
      res.status(201).json({ status: 201, message: `Hy ${username} your account have created successfully on ${imphelp.created}`, data: { vistByToken, visitByLink } });
    });
  },
};
export default registerUsers;
