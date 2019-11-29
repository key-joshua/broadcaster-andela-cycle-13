import impData from '../models/DB';

const updateSingleRecords = {
  updateOneRecordsComment(req, res) {
    const decUserData = req.attachedWithInfo;
    const { createdBy, title, type, latitude, longitude, comment } = req.body;

    const recodId = parseInt(req.params.redflagid);
    const fetcheData = impData.fetchOneRecord(recodId);

    if (!recodId) {
      return res.status(404).json({ status: 404, message: `Hey ${decUserData.username} insert record id ` });
    }

    if (!fetcheData) {
      return res.status(404).json({ status: 404, message: `Hey ${decUserData.username} this record with id ${recodId} is not found ` });
    }
    if (fetcheData.userId !== decUserData.id) {
      return res.status(400).json({ status: 400, message: `Hey ${decUserData.username} you are not owner of this record with id ${recodId} ` });
    }

    let imgs;
    let vids;
    if (req.files) {
      if (req.files.images) {
        const imgsPath = req.files.images.map(({ path }) => path);
        imgs = imgsPath.join(',  ');
      }
      if (req.files.videos) {
        const vidsPath = req.files.videos.map(({ path }) => path);
        vids = vidsPath.join(',  ');
      }
    }

    const readyDatas = {
      userId: decUserData.id,
      createdBy: createdBy,
      title: title,
      type: type,
      latitude: latitude,
      longitude: longitude,
      images: imgs,
      videos: vids,
      comment: comment,
    };
    const updateRecord = impData.updateComment(parseInt(req.params.redflagid), readyDatas);
    return res.status(200).json({ status: 200, message: `Hey ${decUserData.username} !! Your record with id ${recodId} was updated Successfully `, updateRecord: updateRecord });
  },
};
export default updateSingleRecords;
