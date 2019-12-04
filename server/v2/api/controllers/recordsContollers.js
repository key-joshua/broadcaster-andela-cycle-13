import nodemailer from 'nodemailer';
import impData from '../models/DB';
import imphelp from '../helpers/createHelper';

class Records {
  async createRecord(req, res) {
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
      const chekType = imphelp.checkType(type);
      if (chekType) {
        return res.status(400).json({
          status: 400,
          message: `Hey ${decUserDetail.username} record type should be red-flags or intervetion` });
      }
      const readyDatas = {
        userId: decUserDetail.id,
        createdBy: createdBy || decUserDetail.username,
        title: title,
        type: type,
        latitude: latitude || 'none',
        longitude: longitude || 'none',
        images: imgs || 'none',
        videos: vids || 'none',
        comment: comment,
      };
      const createdRecord = await impData.createRecord(readyDatas);
      const data = await impData.fetchOneRecord(createdRecord[0].recordid);
      res.status(201).json({ status: 201, message: `Hy ${decUserDetail.username} your record has created successfully on ${imphelp.created}`, data: data });
    }
  }

  async findRecord(req, res) {
    if (!(parseInt(req.params.redflagid))) {
      return res.status(404).json({ status: 404, message: `Hey ${req.attachedWithInfo.username} insert record id ` });
    }
    const data = await impData.fetchOneRecord((parseInt(req.params.redflagid)));
    if (data.length === 0) {
      return res.status(404).json({ status: 404, message: `Hey ${req.attachedWithInfo.username} this record with id ${(parseInt(req.params.redflagid))} is not found ` });
    }
    return res.status(200).json({ status: 200, message: `Hey ${req.attachedWithInfo.username} !! Hope record with id ${(parseInt(req.params.redflagid))} was retrieved Successfully `, data: data });
  }

}
const expRecords = new Records();
export default expRecords;
