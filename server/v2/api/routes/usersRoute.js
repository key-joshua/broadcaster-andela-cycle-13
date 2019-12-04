import express from 'express';
import impUsersRoute from '../controllers/authUsersControllers';
import verfUser from '../middlewares/checkUser';

const UserApp = express.Router();
UserApp
  .post('/auth/signup', impUsersRoute.signupUser)

export default UserApp;
