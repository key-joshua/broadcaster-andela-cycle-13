import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import impData from '../models/DB';
import imphelp from '../helpers/createHelper';

dotenv.config();
const createSingleRecords = {
  createOneRecords(req, res) {
    const receive_token_from_header = req.headers.authorization;
    const decoded_token_in_the_way_to_obtain_user_details = jwt.verify(receive_token_from_header, process.env.SECRET_KEY);
    const { createdBy, title, type, latitude, longitude, comment } = req.body;

    const ckTitle = imphelp.check_title_if_is_empty(title);
    if (ckTitle) return res.status(400).json({ status: 400, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.username} record title is needed !!` });

    const ckType = imphelp.check_type_if_is_empty(type);
    if (ckType) return res.status(400).json({ status: 400, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.username} record type is needed !!` });

    const ckComment = imphelp.check_comment_if_is_empty(comment);
    if (ckComment) return res.status(400).json({ status: 400, message: `Hey ${decoded_token_in_the_way_to_obtain_user_details.username} record comment is needed !!` });

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
      createdBy: createdBy || decoded_token_in_the_way_to_obtain_user_details.username,
      title: title,
      type: type,
      latitude: latitude,
      longitude: longitude,
      images: imgs,
      videos: vids,
      comment: comment,
    };
    impData.createe(readyDatas);
    const data = impData.fetchLastCreatedRecord(readyDatas.userId);
    res.status(201).json({ status: 201, message: `Hy ${decoded_token_in_the_way_to_obtain_user_details.username} your record has created successfully on ${imphelp.created}`, record: data });
  },
};
export default createSingleRecords;
