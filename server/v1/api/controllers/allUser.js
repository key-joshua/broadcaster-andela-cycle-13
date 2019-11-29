import impData from '../models/DB';

const retrieveUsers = {
  retrieveAllUsers(req, res) {
    const decGetusers = req.attachedWithInfo;
    const users = impData.fetchAllUser();
    return res.status(200).json({ status: 200, message: `Hey ${decGetusers.category} ${decGetusers.username} !! Hope all users were retrieved Successfully `, data: users });
  },
};
export default retrieveUsers;
