import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import impData from '../models/DB';
import impDataFromToken from '../helpers/token';

dotenv.config();
const retrieveUsers = {
  retrieveAllUsers(req, res) {
    const receive_token_from_header = req.headers.authorization;
    const decoded_token_in_the_way_to_obtain_user_details = jwt.verify(receive_token_from_header, process.env.SECRET_KEY);
    const users = impData.fetchAllUser();
    return res.status(200).json({ status: 200, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.category} ${decoded_token_in_the_way_to_obtain_user_details.username} !! Hope all users were retrieved Successfully `, data: users });
  },
};
export default retrieveUsers;
