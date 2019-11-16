import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const verfy_user = (request, response, next) => {
  try {
    const receive_token_from_header = request.headers.authorization;
    const decoded_token_in_the_way_to_obtain_user_details = jwt.verify(receive_token_from_header, process.env.SECRET_KEY);
    next();
  } catch (error) {
    return response.status(401).json({ status: 401, message: ' Hy !! Access denied, please provide Token ' });
  }
};

export default verfy_user;
