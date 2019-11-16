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
import verfy_admin from '../middlewares/checkAdmin';
import verfy_user from '../middlewares/checkUser';
import fileImp from '../middlewares/uploadFile';

const authapp = express.Router();

authapp
  .post('/auth/signin', signinUser.loginUser)
  .post('/auth/signup', registerUser.signupUser)
  .post('/red-flags', verfy_user, fileImp.allFile, createoneRecord.createOneRecords)

  .get('/users', verfy_user, retrieveUser.retrieveAllUsers)
  .get('/red-flags', verfy_user, retrieveRecord.retrieveAllRecords)
  .get('/red-flags/:redflagid', verfy_user, retrieveoneRecord.retrieveOneRecords)

  .delete('/red-flags/:redflagids', verfy_user, deleteOneRecord.deleteRecord)
  .patch('/red-flags/:redflagid/location', verfy_user, updateOneRecord2.updateOneRecordsLocation)
  .patch('/red-flags/:redflagid/changestatus', verfy_admin, adminCchangeStatus.adminchangeStatusOfOneRecord)
  .patch('/red-flags/:redflagid/comment', verfy_user, fileImp.allFile, updateOneRecord1.updateOneRecordsComment);

export default authapp;
