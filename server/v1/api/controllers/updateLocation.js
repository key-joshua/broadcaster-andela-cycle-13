import impData from '../models/DB';
import verfier from '../helpers/token';

const updateSingleRecords = {
  updateOneRecordsLocation(req, res) {
    const decUserData = verfier.userDetails(req.headers.authorization);
    const userRecId = parseInt(req.params.redflagid);
    const userRecData = impData.fetchOneRecord(userRecId);

    if (!userRecId) {
      return res.status(404).json({ status: 404, message: `Hey ${decUserData.username} insert record id ` });
    }
    if (!userRecData) {
      return res.status(404).json({ status: 404, message: `Hey ${decUserData.username} this record with id ${userRecId} is not found ` });
    }
    if (userRecData.userId !== decUserData.id) {
      return res.status(400).json({ status: 400, message: `Hey ${decUserData.username} you are not owner of this record with id ${userRecId} ` });
    }
    const updatRecord = impData.updateLocation(parseInt(req.params.redflagid), req.body);
    return res.status(200).json({ status: 200, message: `Hey ${decUserData.username} !! Your record with id ${userRecId} was updated Successfully `, updateRecord: updatRecord });
  },
};
export default updateSingleRecords;
