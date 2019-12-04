const data = `INSERT INTO challenge.dataDB(  recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) 
               VALUES( 1, 2, 'Jessy', 'obused kid', 'red-flag', 'Egypt, Cairo', '25.98', '-10.88', 'draft', 'imga.png', 'sample.mp4', 'we are here to say no obuse', ' 2019-06-24T05:56:03.315Z', ' none' );`;

const data1 = `INSERT INTO challenge.dataDB(  recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) 
               VALUES( 2, 1, 'key-joshua', 'fake license', 'red-flag', 'Nigeri, Lagos', '80.47', '340.7777', 'resolved', 'imgb.png', 'sample.mp4', 'we are here to say no corruption', ' 2019-06-24T05:56:03.315Z', ' none' );`;

const data2 = `INSERT INTO challenge.dataDB( recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) 
               VALUES( 3, 1, 'key-joshua', 'Destroyed Bridge', 'intervation', 'Zimbabwe, Habewe', ' -1.47', '3.2177', 'under-investigation', 'imgd.png', 'sample.mp4', 'we are here to use our voice to make better africa', ' 2018-03-11T19:04:22.1915Z', ' none' );`;

const data3 = `INSERT INTO challenge.dataDB( recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) 
               VALUES( 4, 2, 'Jessy', 'Lecture Gives Free Marks To Student', 'red-flag', 'Rwanda, Rusomo', ' -11.0333', ' 22.0107', 'rejected', 'imgc.png', 'sample.mp4', 'we are here to fight against corruption', ' 2019-03-11T19:04:22.1915Z', ' none' );`;

const data4 = `INSERT INTO challenge.dataDB( recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) 
               VALUES( 5, 2, 'Jessy', 'Lecture Gives Free Marks To Student', 'red-flag', 'Rwanda, Rusomo', ' -11.0333', ' 22.0107', 'rejected', 'imgc.png', 'sample.mp4', 'we are here to fight against corruption', ' 2019-03-11T19:04:22.1915Z', ' none' );`;

export default { data, data1, data2, data3, data4 };
