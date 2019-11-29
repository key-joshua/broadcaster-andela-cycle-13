import jwt from 'jsonwebtoken';
import impData from '../models/DB';
import imphelp from '../helpers/createHelper';

const createSingleRecords = {
  createOneRecords(req, res) {
    const decUserDetail = req.attachedWithInfo;
    const { createdBy, title, type, latitude, longitude, comment } = req.body;
    const createValidate = imphelp.schemaCreate(req.body);
    if (createValidate.error) {
      const mess = createValidate.error.details[0].message;
      const messUser = mess.replace(/\"/g, '');
      res.status(400).send({ status: 400, message: messUser });
    }
    if (!createValidate.error) {
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
        userId: decUserDetail.id,
        createdBy: createdBy || decUserDetail.username,
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
      res.status(201).json({ status: 201, message: `Hy ${decUserDetail.username} your record has created successfully on ${imphelp.created}`, record: data });
    }
  },
};
export default createSingleRecords;
