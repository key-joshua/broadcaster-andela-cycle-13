import impData from '../models/DB';
import verfier from '../helpers/token';

const retrieveSingleRecords = {
  retrieveOneRecords(req, res) {
    const decUserData = verfier.userDetails(req.headers.authorization);

    const records = parseInt(req.params.redflagid);
    if (!records) {
      return res.status(404).json({ status: 404, message: `Hey ${decUserData.username} insert record id ` });
    }
    const data = impData.fetchOneRecord(records);
    if (!data) {
      return res.status(404).json({ status: 404, message: `Hey ${decUserData.username} this record with id ${records} is not found ` });
    }
    return res.status(200).json({ status: 200, message: `Hey ${decUserData.username} !! Hope record with id ${records} was retrieved Successfully `, record: data });
  },
};
export default retrieveSingleRecords;
