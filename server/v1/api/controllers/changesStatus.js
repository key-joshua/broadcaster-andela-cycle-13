import impData from '../models/DB';

const changeStatusOfSingleRecords = {
  adminchangeStatusOfOneRecord(req, res) {
    const decUserData = req.attachedWithInfos;
    const recordId = parseInt(req.params.redflagid);
    const takeData = impData.fetchOneRecord(recordId);

    if (!recordId) {
      return res.status(404).json({ status: 404, message: `Hey Admin ${decUserData.username} insert record id ` });
    }
    if (!takeData) {
      return res.status(404).json({ status: 404, message: `Hey Admin ${decUserData.username} this record with id ${recordId} is not found ` });
    }
    const updatedRecord = impData.changeStatus(parseInt(req.params.redflagid), req.body);
    return res.status(200).json({ status: 200, message: `Hey Admin ${decUserData.username} !! You are changed status of this record with id ${recordId} Successfully `, changedRecord: updatedRecord });
  },
};
export default changeStatusOfSingleRecords;
