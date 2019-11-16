import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import impData from '../models/DB';
import impDataFromToken from '../helpers/token';

dotenv.config();
const deleteOneRecord = {
  deleteRecord(req, res) {
    const receive_token_from_header = req.headers.authorization;
    const decoded_token_in_the_way_to_obtain_user_details = jwt.verify(receive_token_from_header, process.env.SECRET_KEY);

    const recordId = parseInt(req.params.redflagids);
    const data = impData.fetchOneRecord(recordId);
    if (!recordId) {
      return res.status(404).json({ status: 404, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.username} insert record id ` });
    }

    if (!data) {
      return res.status(404).json({ status: 404, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.username} this record with id ${recordId} is not found ` });
    }
    if (data.userId !== decoded_token_in_the_way_to_obtain_user_details.id) {
      return res.status(400).json({ status: 400, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.username} you are not owner of this record with id ${recordId} ` });
    }
    impData.delete(recordId);
    return res.status(200).json({ status: 200, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.username} !! this record with id ${recordId} was deleted Successfully ` });
  },
};
export default deleteOneRecord;
