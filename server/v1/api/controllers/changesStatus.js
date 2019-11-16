import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import impData from '../models/DB';
import impDataFromToken from '../helpers/token';

dotenv.config();
const changeStatusOfSingleRecords = {
  adminchangeStatusOfOneRecord(req, res) {
    const receive_token_from_header = req.headers.authorization;
    const decoded_token_in_the_way_to_obtain_user_details = jwt.verify(receive_token_from_header, process.env.SECRET_KEY);

    const recordId = parseInt(req.params.redflagid);
    const data = impData.fetchOneRecord(recordId);

    if (!recordId) {
      return res.status(404).json({ status: 404, message: `Hey Admin ${decoded_token_in_the_way_to_obtain_user_details.username} insert record id ` });
    }
    if (!data) {
      return res.status(404).json({ status: 404, message: `Hey Admin ${decoded_token_in_the_way_to_obtain_user_details.username} this record with id ${recordId} is not found ` });
    }
    const updatedRecord = impData.changeStatus(parseInt(req.params.redflagid), req.body);
    return res.status(200).json({ status: 200, message: `Hey Admin ${decoded_token_in_the_way_to_obtain_user_details.username} !! You are changed status of this record with id ${recordId} Successfully `, changedRecord: updatedRecord });
  },
};
export default changeStatusOfSingleRecords;
