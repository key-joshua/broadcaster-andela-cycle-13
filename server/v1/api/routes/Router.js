import multer from 'multer';
import express from 'express';
import registerUser from '../controllers/signup';
import signinUser from '../controllers/signin';
import retrieveUser from '../controllers/allUser';
import retrieveRecord from '../controllers/allRecords';
import createoneRecord from '../controllers/createRecord';
import retrieveoneRecord from '../controllers/oneRecord';
import deleteOneRecord from '../controllers/deleteRecord';
import updateOneRecord1 from '../controllers/updateComment';
import updateOneRecord2 from '../controllers/updateLocation';
import adminCchangeStatus from '../controllers/changesStatus';
import verfAdmin from '../middlewares/checkAdmin';
import verfUser from '../middlewares/checkUser';
import fileImp from '../middlewares/uploadFile';

const authapp = express.Router();

authapp
  .post('/auth/signin', signinUser.loginUser)
  .post('/auth/signup', registerUser.signupUser)
  .post('/red-flags', verfUser, fileImp.allFile, createoneRecord.createOneRecords)

  .get('/users', verfUser, retrieveUser.retrieveAllUsers)
  .get('/red-flags', verfUser, retrieveRecord.retrieveAllRecords)
  .get('/red-flags/:redflagid', verfUser, retrieveoneRecord.retrieveOneRecords)

  .delete('/red-flags/:redflagids', verfUser, deleteOneRecord.deleteRecord)
  .patch('/red-flags/:redflagid/location', verfUser, updateOneRecord2.updateOneRecordsLocation)
  .patch('/red-flags/:redflagid/changestatus', verfAdmin, adminCchangeStatus.adminchangeStatusOfOneRecord)
  .patch('/red-flags/:redflagid/comment', verfUser, fileImp.allFile, updateOneRecord1.updateOneRecordsComment);

export default authapp;
