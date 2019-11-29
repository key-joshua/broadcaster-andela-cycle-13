import impData from '../models/DB';

const retrieveRecords = {
  retrieveAllRecords(req, res) {
    const decGetData = req.attachedWithInfo;
    const datas = impData.fetchAllRecords();
    return res.status(200).json({ status: 200, message: `Hey ${decGetData.username} !! Hope all records were retrieved Successfully `, data: datas });
  },
};
export default retrieveRecords;
