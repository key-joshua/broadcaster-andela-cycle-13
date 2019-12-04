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

  async findAllRecord(req, res) {
    const datas = await impData.fetchAllRecords();
    return res.status(200).json({ status: 200, message: `Hey ${req.attachedWithInfo.username} !! Hope all records were retrieved Successfully `, data: datas });
  }

  async updateComment(req, res) {
    const { createdBy, title, type, latitude, longitude, comment } = req.body;
    const fetcheData = await impData.fetchOneRecord((parseInt(req.params.redflagid)));
    if (!(parseInt(req.params.redflagid))) {
      return res.status(404).json({ status: 404, message: `Hey ${req.attachedWithInfo.username} insert record id ` });
    }
    if (fetcheData.length === 0) {
      return res.status(404).json({ status: 404, message: `Hey ${req.attachedWithInfo.username} this record with id ${(parseInt(req.params.redflagid))} is not found ` });
    }
    if (fetcheData[0].userid !== req.attachedWithInfo.id) {
      return res.status(400).json({ status: 400, message: `Hey ${req.attachedWithInfo.username} you are not owner of this record with id ${(parseInt(req.params.redflagid))} ` });
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
      userId: req.attachedWithInfo.id,
      createdBy: createdBy || fetcheData[0].createdby,
      title: title || fetcheData[0].title,
      type: type || fetcheData[0].type,
      latitude: latitude || fetcheData[0].latitude,
      longitude: longitude || fetcheData[0].longitude,
      images: imgs || fetcheData[0].images,
      videos: vids || fetcheData[0].videos,
      comment: comment || fetcheData[0].comment,
    };
    const updateRecord = await impData.updateComment(readyDatas, parseInt(req.params.redflagid));
    return res.status(200).json({ status: 200, message: `Hey ${req.attachedWithInfo.username} !! Your record with id ${(parseInt(req.params.redflagid))} was updated Successfully `, data: updateRecord });
  }

  async updateLocation(req, res) {
    const userRecData = await impData.fetchOneRecord((parseInt(req.params.redflagid)));
    if (!(parseInt(req.params.redflagid))) {
      return res.status(404).json({ status: 404, message: `Hey ${req.attachedWithInfo.username} insert record id ` });
    }
    if (userRecData.length === 0) {
      return res.status(404).json({ status: 404, message: `Hey ${req.attachedWithInfo.username} this record with id ${(parseInt(req.params.redflagid))} is not found ` });
    }
    if (userRecData[0].userid !== req.attachedWithInfo.id) {
      return res.status(400).json({ status: 400, message: `Hey ${req.attachedWithInfo.username} you are not owner of this record with id ${(parseInt(req.params.redflagid))} ` });
    }
    const updateLocation = {
      latitude: req.body.latitude || userRecData[0].latitude,
      longitude: req.body.longitude || userRecData[0].longitude,
    };
    const updatRecord = await impData.updateLocation(updateLocation, parseInt(req.params.redflagid));
    return res.status(200).json({ status: 200, message: `Hey ${req.attachedWithInfo.username} !! Your record with id ${(parseInt(req.params.redflagid))} was updated Successfully `, data: updatRecord });
  }



}
const expRecords = new Records();
export default expRecords;
