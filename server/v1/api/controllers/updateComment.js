import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import impData from '../models/DB';
import impDataFromToken from '../helpers/token';

dotenv.config();
const updateSingleRecords = {
  updateOneRecordsComment(req, res) {
    const receive_token_from_header = req.headers.authorization;
    const decoded_token_in_the_way_to_obtain_user_details = jwt.verify(receive_token_from_header, process.env.SECRET_KEY);
    const { createdBy, title, type, latitude, longitude, comment } = req.body;

    const recordId = parseInt(req.params.redflagid);
    const data = impData.fetchOneRecord(recordId);

    if (!recordId) {
      return res.status(404).json({ status: 404, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.username} insert record id ` });
    }

    if (!data) {
      return res.status(404).json({ status: 404, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.username} this record with id ${recordId} is not found ` });
    }
    if (data.userId !== decoded_token_in_the_way_to_obtain_user_details.id) {
      return res.status(400).json({ status: 400, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.username} you are not owner of this record with id ${recordId} ` });
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
      userId: decoded_token_in_the_way_to_obtain_user_details.id,
      createdBy: createdBy,
      title: title,
      type: type,
      latitude: latitude,
      longitude: longitude,
      images: imgs,
      videos: vids,
      comment: comment,
    };
    const updatedRecord = impData.updateComment(parseInt(req.params.redflagid), readyDatas);
    return res.status(200).json({ status: 200, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.username} !! Your record with id ${recordId} was updated Successfully `, updateRecord: updatedRecord });
  },
};
export default updateSingleRecords;
