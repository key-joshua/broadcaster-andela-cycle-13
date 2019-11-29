import impData from '../models/DB';
import verfier from '../helpers/token';

const retrieveUsers = {
  retrieveAllUsers(req, res) {
    const decGetusers = verfier.userDetails(req.headers.authorization);
    const users = impData.fetchAllUser();
    return res.status(200).json({ status: 200, message: `Hey ${decGetusers.category} ${decGetusers.username} !! Hope all users were retrieved Successfully `, data: users });
  },
};
export default retrieveUsers;
