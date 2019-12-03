import impData from '../models/DB';
import imphelps from '../helpers/createHelper';

const changeStatusOfSingleRecords = {
  adminchangeStatusOfOneRecord(req, res) {
    const takeData = impData.fetchOneRecord((parseInt(req.params.redflagid)));

    if (!(parseInt(req.params.redflagid))) {
      return res.status(404).json({ status: 404, message: `Hey Admin ${req.attachedWithInfos.username} insert record id ` });
    }
    if (!takeData) {
      return res.status(404).json({ status: 404, message: `Hey Admin ${req.attachedWithInfos.username} this record with id ${(parseInt(req.params.redflagid))} is not found ` });
    }

    const chekStatus = imphelps.checkStatus(req.body.status);
    if (chekStatus) {
      return res.status(400).json({
        status: 400,
        message: `Hey Admin ${req.attachedWithInfos.username} record status should be under-intervention, resolved or rejected` });
    }
    const updatedRecord = impData.changeStatus(parseInt(req.params.redflagid), req.body);
    return res.status(200).json({ status: 200, message: `Hey Admin ${req.attachedWithInfos.username} !! You are changed status of this record with id ${(parseInt(req.params.redflagid))} Successfully `, changedRecord: updatedRecord });
  },
};
export default changeStatusOfSingleRecords;
