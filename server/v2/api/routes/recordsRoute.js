import express from 'express';
import imprecordRoute from '../controllers/recordsContollers';
import verfAdmin from '../middlewares/checkAdmin';
import verfUser from '../middlewares/checkUser';
import fileImp from '../middlewares/uploadFile';

const recordApp = express.Router();
recordApp
  .post('/red-flags', verfUser, fileImp.allFile, imprecordRoute.createRecord);

export default recordApp;
