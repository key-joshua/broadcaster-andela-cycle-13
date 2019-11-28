import impData from '../models/DB';
import verfier from '../helpers/token';

const deleteOneRecord = {
  deleteRecord(req, res) {
    const decUserDetail = verfier.userDetails(req.headers.authorization);
    const recId = parseInt(req.params.redflagids);
    const getData = impData.fetchOneRecord(recId);
    if (!recId) {
      return res.status(404).json({ status: 404, message: `Hey ${decUserDetail.username} insert record id ` });
    }
    if (!getData) {
      return res.status(404).json({ status: 404, message: `Hey ${decUserDetail.username} this record with id ${recId} is not found ` });
    }
    if (getData.userId !== decUserDetail.id) {
      return res.status(400).json({ status: 400, message: `Hey ${decUserDetail.username} you are not owner of this record with id ${recId} ` });
    }
    impData.delete(recId);
    return res.status(200).json({ status: 200, message: `Hey ${decUserDetail.username} !! this record with id ${recId} was deleted Successfully ` });
  },
};
export default deleteOneRecord;
