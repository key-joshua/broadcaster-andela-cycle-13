import express from 'express';
import imprecordRoute from '../controllers/recordsContollers';
import verfAdmin from '../middlewares/checkAdmin';
import verfUser from '../middlewares/checkUser';
import fileImp from '../middlewares/uploadFile';

const recordApp = express.Router();
recordApp
  .post('/red-flags', verfUser, fileImp.allFile, imprecordRoute.createRecord)
  .get('/red-flags', verfUser, imprecordRoute.findAllRecord)
  .get('/red-flags/:redflagid', verfUser, imprecordRoute.findRecord)
  .patch('/red-flags/:redflagid/comment', verfUser, fileImp.allFile, imprecordRoute.updateComment)
  .patch('/red-flags/:redflagid/location', verfUser, imprecordRoute.updateLocation);

export default recordApp;
