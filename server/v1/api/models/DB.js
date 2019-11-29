class StoreData {
  constructor() {
    this.userDB = [];
    this.dataDB = [];
  }

  checkEmaiExist(email) {
    const emailToCheck = email.toString().trim().toLowerCase();
    const emailIsExist = this.userDB.find((user) => user.email === emailToCheck);
    return emailIsExist;
  }

  create(data, hashed) {
    const newUser = {
      id: this.userDB.length + 1,
      category: 'user',
      firstname: data.firstname.trim().toLowerCase(),
      lastname: data.lastname.trim().toLowerCase(),
      username: data.username.trim().toLowerCase(),
      email: data.email,
      phoneNumber: data.phone,
      password: hashed.password,
      createdDate: new Date().toString(),
      modifiedDate: 'none',
    };
    this.userDB.push(newUser);
    return newUser;
  }

  createe(record) {
    const newRecord = {
      recordId: this.dataDB.length + 1,
      userId: record.userId,
      createdBy: record.createdBy,
      title: record.title.toString().trim().toUpperCase(),
      type: record.type.toString().trim().toLowerCase(),
      location: `Lat: ${record.latitude || 'none'}, Long: ${record.longitude || 'none'}`,
      latitude: record.latitude || 'none',
      longitude: record.longitude || 'none',
      status: 'draft',
      images: record.images || 'none',
      videos: record.videos || 'none',
      comment: record.comment.toString().trim().toLowerCase(),
      createdOn: new Date().toString(),
      modifiedOn: 'none',
    };
    this.dataDB.push(newRecord);
    return newRecord;
  }

  updateComment(recordId, data) {
    const takeRecord = this.fetchOneRecord(recordId);
    const index = this.dataDB.indexOf(takeRecord);
    this.dataDB[index].createdBy = data.createdBy || takeRecord.createdBy;
    this.dataDB[index].title = data.title || takeRecord.title;
    this.dataDB[index].type = data.type || takeRecord.type;
    this.dataDB[index].location = `Lat: ${data.latitude || takeRecord.latitude}, Long: ${data.longitude || takeRecord.longitude}`;
    this.dataDB[index].latitude = data.latitude || takeRecord.latitude;
    this.dataDB[index].longitude = data.longitude || takeRecord.longitude;
    this.dataDB[index].images = data.images || takeRecord.images;
    this.dataDB[index].videos = data.videos || takeRecord.videos;
    this.dataDB[index].comment = data.comment || takeRecord.comment;
    this.dataDB[index].createdDate = takeRecord.createdDate;
    this.dataDB[index].modifiedDate = new Date().toString();
    return this.dataDB[index];
  }

  updateLocation(recordId, data) {
    const takeRecord = this.fetchOneRecord(recordId);
    const index = this.dataDB.indexOf(takeRecord);
    this.dataDB[index].createdBy = takeRecord.createdBy;
    this.dataDB[index].title = takeRecord.title;
    this.dataDB[index].type = takeRecord.type;
    this.dataDB[index].location = `Lat: ${data.latitude || takeRecord.latitude}, Long: ${data.longitude || takeRecord.longitude}`;
    this.dataDB[index].latitude = data.latitude || takeRecord.latitude;
    this.dataDB[index].longitude = data.longitude || takeRecord.longitude;
    this.dataDB[index].images = takeRecord.images;
    this.dataDB[index].videos = takeRecord.videos;
    this.dataDB[index].comment = takeRecord.comment;
    this.dataDB[index].createdDate = takeRecord.createdDate;
    this.dataDB[index].modifiedDate = new Date().toString();
    return this.dataDB[index];
  }

  changeStatus(recordId, data) {
    const takeRecord = this.fetchOneRecord(recordId);
    const index = this.dataDB.indexOf(takeRecord);
    this.dataDB[index].createdBy = takeRecord.createdBy;
    this.dataDB[index].title = takeRecord.title;
    this.dataDB[index].type = takeRecord.type;
    this.dataDB[index].location = `Lat: ${takeRecord.latitude}, Long: ${takeRecord.longitude}`;
    this.dataDB[index].latitude = takeRecord.latitude;
    this.dataDB[index].longitude = takeRecord.longitude;
    this.dataDB[index].status = data.status || takeRecord.status;
    this.dataDB[index].images = takeRecord.images;
    this.dataDB[index].videos = takeRecord.videos;
    this.dataDB[index].comment = takeRecord.comment;
    this.dataDB[index].createdDate = takeRecord.createdDate;
    this.dataDB[index].modifiedDate = new Date().toString();
    return this.dataDB[index];
  }

  fetchAllUser() {
    return this.userDB;
  }

  fetchAllRecords() {
    return this.dataDB;
  }

  fetchOneRecord(recordId) {
    return this.dataDB.find((record) => record.recordId === recordId);
  }

  fetchLastCreatedRecord(userId) {
    return this.dataDB.reverse().find((record) => record.userId === userId);
  }

  delete(recordId) {
    const takeRecord = this.fetchOneRecord(recordId);
    const index = this.dataDB.indexOf(takeRecord);
    this.dataDB.splice(index, 1);
    return {};
  }
}
const expstoreData = new StoreData();
export default expstoreData;
