class StoreData {
  constructor() {
    this.userDB = [
      {
        id: 1,
        category: 'admin',
        firstname: 'minani',
        lastname: 'joshua',
        username: 'key-joshua',
        email: 'k.joshua855@gmail.com',
        phoneNumber: '+250789619442',
        password: '$2a$12$Gl7eP0UdOxbxdfqo8dA3Qu/uVHk2RjaxITv1vwryc1oztX/gnTcPS',
        createdDate: '2019-11-04T16:02:22.315Z',
        modifiedDate: 'none',
      },
      {
        id: 2,
        category: 'none',
        firstname: 'moriah',
        lastname: 'jessica',
        username: 'Jessy',
        email: 'jessy@gmail.com',
        phoneNumber: '+250789619442',
        password: '$2a$12$deWjPMnV/giyrQIYP94k/eLCzY1QIymPdRVRJvyEkQ/Nx9CYqEvlu',
        createdDate: '2019-11-04T14:51:24.283Z',
        modifiedDate: 'none',
      },

    ];
    this.dataDB = [
      {
        recordId: 1,
        userId: 2,
        createdBy: 'Jessy',
        title: 'obused kid',
        type: 'red-flag',
        location: 'Egypt, Cairo',
        latitude: 25.98,
        longitude: -10.88,
        status: 'draft',
        images: 'imga.png',
        videos: 'sample.mp4',
        comment: 'we are here to say no obuse',
        createdOn: '2019-06-24T05:56:03.315Z',
        modifiedOn: 'none',
      },
      {
        recordId: 2,
        userId: 1,
        createdBy: 'key-joshua',
        title: 'fake license',
        type: 'red-flag',
        location: 'Nigeri, Lagos',
        latitude: 80.47,
        longitude: 340.7777,
        status: 'resolved',
        images: 'imgb.png',
        videos: 'sample.mp4',
        comment: 'we are here to say no corruption',
        createdOn: '2019-06-24T05:56:03.315Z',
        modifiedOn: 'none',
      },
      {
        recordId: 3,
        userId: 1,
        createdBy: 'key-joshua',
        title: 'Destroyed Bridge',
        type: 'intervation',
        location: 'Zimbabwe, Habewe',
        latitude: -1.47,
        longitude: 3.2177,
        status: 'under-investigation',
        images: 'imgd.png',
        videos: 'sample.mp4',
        comment: 'we are here to use our voice to make better africa',
        createdOn: '2018-03-11T19:04:22.1915Z',
        modifiedOn: 'none',
      },
      {
        recordId: 4,
        userId: 2,
        createdBy: 'Jessy',
        title: 'Lecture Gives Free Marks To Student',
        type: 'red-flag',
        location: 'Rwanda, Rusomo',
        latitude: -11.0333,
        longitude: 22.0107,
        status: 'rejected',
        images: 'imgc.png',
        videos: 'sample.mp4',
        comment: 'we are here to fight against corruption',
        createdOn: '2019-03-11T19:04:22.1915Z',
        modifiedOn: 'none',
      },

    ];
  }

  check_if_email_exist(email) {
    const email_to_check = email.toString().trim().toLowerCase();
    const email_is_exist = this.userDB.find((user) => user.email === email_to_check);
    return email_is_exist;
  }

  create(data) {
    const newUser = {
      id: this.userDB.length + 1,
      category: 'none',
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      email: data.email,
      phoneNumber: data.phone,
      password: data.password,
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
