import impData from '../models/DB';
import verfier from '../helpers/token';

const retrieveRecords = {
  retrieveAllRecords(req, res) {
    const decGetData = verfier.userDetails(req.headers.authorization);
    const datas = impData.fetchAllRecords();
    return res.status(200).json({ status: 200, message: `Hey ${decGetData.username} !! Hope all records were retrieved Successfully `, data: datas });
  },
};
export default retrieveRecords;
