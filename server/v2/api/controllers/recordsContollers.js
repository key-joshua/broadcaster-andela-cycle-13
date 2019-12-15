import impData from '../models/DB';
import impnotification from '../helpers/notification';
import imphelp from '../helpers/createHelper';

class Records {
  async createRecord(req, res) {
    try {
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
            message: `${req.attachedWithInfo.username} record type should be red-flags or intervetion` });
        }
        const readyDatas = {
          userId: req.attachedWithInfo.id,
          createdBy: createdBy || req.attachedWithInfo.username,
          title: title,
          type: type,
          latitude: latitude || 'none',
          longitude: longitude || 'none',
          images: imgs || 'none',
          videos: vids || 'none',
          comment: comment,
        };
        const ckEmailOncreateRecord = await impData.checkEmaiExist(req.attachedWithInfo.email);
        if (ckEmailOncreateRecord.length === 0) return res.status(400).json({ status: 400, message: 'Invalid token' });
        const createdRecord = await impData.createRecord(readyDatas);
        const data = await impData.fetchOneRecord(createdRecord[0].id);
        res.status(201).json({ status: 201, message: `${req.attachedWithInfo.username} your record has created successfully on ${imphelp.created}`, data: data });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: `${req.attachedWithInfos.username} something goes wrong ` });
    }
  }

  async findRecord(req, res) {
    try {
      if (!(parseInt(req.params.redflagid))) {
        return res.status(404).json({ status: 404, message: `${req.attachedWithInfo.username} insert record id ` });
      }
      const ckEmailOnfindRecord = await impData.checkEmaiExist(req.attachedWithInfo.email);
      if (ckEmailOnfindRecord.length === 0) {
        return res.status(400).json({ status: 400, message: 'Invalid token' });
      }
      const data = await impData.fetchOneRecord((parseInt(req.params.redflagid)));
      if (data.length === 0) {
        return res.status(404).json({ status: 404, message: `${req.attachedWithInfo.username} this record with id ${(parseInt(req.params.redflagid))} is not found ` });
      }
      return res.status(200).json({ status: 200, message: `${req.attachedWithInfo.username} !! Hope record with id ${(parseInt(req.params.redflagid))} was retrieved Successfully `, data: data });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: `${req.attachedWithInfos.username} something goes wrong ` });
    }
  }

  async findAllRecord(req, res) {
    try {
      const ckEmailOnfindAllRecord = await impData.checkEmaiExist(req.attachedWithInfo.email);
      if (ckEmailOnfindAllRecord.length === 0) return res.status(400).json({ status: 400, message: 'Invalid token' });
      const datas = await impData.fetchAllRecords();
      return res.status(200).json({ status: 200, message: `${req.attachedWithInfo.username} !! Hope all records were retrieved Successfully `, data: datas });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: `${req.attachedWithInfos.username} something goes wrong ` });
    }
  }

  async updateComment(req, res) {
    try {
      const { createdBy, title, type, latitude, longitude, comment } = req.body;
      const fetcheData = await impData.fetchOneRecord((parseInt(req.params.redflagid)));
      if (!(parseInt(req.params.redflagid))) {
        return res.status(404).json({ status: 404, message: `${req.attachedWithInfo.username} insert record id ` });
      }
      if (fetcheData.length === 0) {
        return res.status(404).json({ status: 404, message: `${req.attachedWithInfo.username} this record with id ${(parseInt(req.params.redflagid))} is not found ` });
      }
      if (fetcheData[0].userid !== req.attachedWithInfo.id) {
        return res.status(400).json({ status: 400, message: `${req.attachedWithInfo.username} you are not owner of this record with id ${(parseInt(req.params.redflagid))} ` });
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
      const ckEmailOnupdateComment = await impData.checkEmaiExist(req.attachedWithInfo.email);
      if (ckEmailOnupdateComment.length === 0) return res.status(400).json({ status: 400, message: 'Invalid token' });
      const updateRecord = await impData.updateComment(readyDatas, parseInt(req.params.redflagid));
      return res.status(200).json({ status: 200, message: `${req.attachedWithInfo.username} !! Your record with id ${(parseInt(req.params.redflagid))} was updated Successfully `, data: updateRecord });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: `${req.attachedWithInfos.username} something goes wrong ` });
    }
  }

  async updateLocation(req, res) {
    try {
      const userRecData = await impData.fetchOneRecord((parseInt(req.params.redflagid)));
      if (!(parseInt(req.params.redflagid))) {
        return res.status(404).json({ status: 404, message: `${req.attachedWithInfo.username} insert record id ` });
      }
      if (userRecData.length === 0) {
        return res.status(404).json({ status: 404, message: `${req.attachedWithInfo.username} this record with id ${(parseInt(req.params.redflagid))} is not found ` });
      }
      if (userRecData[0].userid !== req.attachedWithInfo.id) {
        return res.status(400).json({ status: 400, message: `${req.attachedWithInfo.username} you are not owner of this record with id ${(parseInt(req.params.redflagid))} ` });
      }
      const updateLocation = {
        latitude: req.body.latitude || userRecData[0].latitude,
        longitude: req.body.longitude || userRecData[0].longitude,
      };
      const ckEmailOnupdateLocation = await impData.checkEmaiExist(req.attachedWithInfo.email);
      if (ckEmailOnupdateLocation.length === 0) return res.status(400).json({ status: 400, message: 'Invalid token' });
      const updatRecord = await impData.updateLocation(updateLocation, parseInt(req.params.redflagid));
      return res.status(200).json({ status: 200, message: `${req.attachedWithInfo.username} !! Your record with id ${(parseInt(req.params.redflagid))} was updated Successfully `, data: updatRecord });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: `${req.attachedWithInfos.username} something goes wrong ` });
    }
  }

  async updateStatus(req, res) {
    try {
      const takeData = await impData.fetchOneRecord((parseInt(req.params.redflagid)));
      if (!(parseInt(req.params.redflagid))) {
        return res.status(404).json({ status: 404, message: `Admin ${req.attachedWithInfos.username} insert record id ` });
      }
      if (takeData.length === 0) {
        return res.status(404).json({ status: 404, message: `Admin ${req.attachedWithInfos.username} this record with id ${(parseInt(req.params.redflagid))} is not found ` });
      }
      const chekStatus = imphelp.checkStatus(req.body.status);
      if (chekStatus) {
        return res.status(400).json({
          status: 400,
          message: `Admin ${req.attachedWithInfos.username} record status should be under-intervention, resolved or rejected` });
      }
      const ckEmailOnupdateStatus = await impData.checkEmaiExist(req.attachedWithInfos.email);
      if (ckEmailOnupdateStatus.length === 0) return res.status(400).json({ status: 400, message: 'Invalid token' });
      const updatedRecord = await impData.changeStatus(req.body.status || takeData[0].status, parseInt(req.params.redflagid));
      const userIfo = await impData.fetchOneUser(takeData[0].userid);
      impnotification.emailing(userIfo[0].username, userIfo[0].email, updatedRecord[0].title, updatedRecord[0].status);
      impnotification.sms(userIfo[0].phonenumber, userIfo[0].username, updatedRecord[0].title, updatedRecord[0].status);
      return res.status(200).json({ status: 200, message: `Admin ${req.attachedWithInfos.username} !! You are changed status of this record with id ${(parseInt(req.params.redflagid))} Successfully `, data: updatedRecord });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: `${req.attachedWithInfos.username} something goes wrong ` });
    }
  }

  async destroyRecord(req, res) {
    try {
      const getData = await impData.fetchOneRecord((parseInt(req.params.redflagids)));
      if (!(parseInt(req.params.redflagids))) {
        return res.status(404).json({ status: 404, message: `${req.attachedWithInfo.username} insert record id ` });
      }
      if (getData.length === 0) {
        return res.status(404).json({ status: 404, message: `${req.attachedWithInfo.username} this record with id ${(parseInt(req.params.redflagids))} is not found ` });
      }
      if (getData[0].userid !== req.attachedWithInfo.id) {
        return res.status(400).json({ status: 400, message: `${req.attachedWithInfo.username} you are not owner of this record with id ${(parseInt(req.params.redflagids))} ` });
      }
      const ckEmailOndestroyRecord = await impData.checkEmaiExist(req.attachedWithInfo.email);
      if (ckEmailOndestroyRecord.length === 0) return res.status(400).json({ status: 400, message: 'Invalid token' });
      await impData.deleteRecord((parseInt(req.params.redflagids)));
      return res.status(200).json({ status: 200, message: `${req.attachedWithInfo.username} !! this record with id ${(parseInt(req.params.redflagids))} was deleted Successfully ` });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: `${req.attachedWithInfos.username} something goes wrong ` });
    }
  }
}
const expRecords = new Records();
export default expRecords;
