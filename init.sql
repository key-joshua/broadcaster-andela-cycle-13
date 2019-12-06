CREATE schema tautorial;

DROP TABLE IF EXISTS userDB CASCADE;
CREATE TABLE userdb(
    id SERIAL PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdDate VARCHAR(255) NOT NULL,
    modifiedDate VARCHAR(255) NOT NULL
  );

DROP TABLE IF EXISTS dataDB CASCADE;
CREATE TABLE datadb(
  Id INT NOT NULL,
  userId INT NOT NULL,
  createdBy VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  latitude VARCHAR(255) NOT NULL,
  longitude VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  images VARCHAR(255) NOT NULL,
  videos VARCHAR(255) NOT NULL,
  comment VARCHAR(255) NOT NULL,
  createdOn VARCHAR(255) NOT NULL,
  modifiedOn VARCHAR(255) NOT NULL
  );


INSERT INTO userdb( category, firstname, lastname, username, email, phoneNumber, password, createdDate, modifiedDate ) 
               VALUES( 'admin', 'minani', 'joshua', 'key-joshua', 'k.joshua855@gmail.com', '+250789619442', '$2a$12$3T3wDmPeNBaZe9uFfm23zeguUOoRwWzp5n1E7.rTZsVqZuipK7Som', '2019-11-04T16:02:22.315Z',' none' );

INSERT INTO userdb( category, firstname, lastname, username, email, phoneNumber, password, createdDate, modifiedDate ) 
               VALUES( 'user', 'moriah', 'jessica', 'Jessy', 'jessy@gmail.com', '+250780000000', '$2a$12$2ITV7msFVWz73xHTYIapb.rqsMWw5HaINzwnIocGCp2K/o.rnn4/O', '2019-11-04T14:51:24.283Z',' none' );
               
INSERT INTO datadb(  recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) 
               VALUES( 1, 2, 'Jessy', 'obused kid', 'red-flag', 'Egypt, Cairo', '25.98', '-10.88', 'draft', 'imga.png', 'sample.mp4', 'we are here to say no obuse', ' 2019-06-24T05:56:03.315Z', ' none' );
               
INSERT INTO datadb(  recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) 
               VALUES( 2, 1, 'key-joshua', 'fake license', 'red-flag', 'Nigeri, Lagos', '80.47', '340.7777', 'resolved', 'imgb.png', 'sample.mp4', 'we are here to say no corruption', ' 2019-06-24T05:56:03.315Z', ' none' );

INSERT INTO datadb( recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) 
               VALUES( 3, 1, 'key-joshua', 'Destroyed Bridge', 'intervation', 'Zimbabwe, Habewe', ' -1.47', '3.2177', 'under-investigation', 'imgd.png', 'sample.mp4', 'we are here to use our voice to make better africa', ' 2018-03-11T19:04:22.1915Z', ' none' );

INSERT INTO datadb( recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) 
               VALUES( 4, 2, 'Jessy', 'Lecture Gives Free Marks To Student', 'red-flag', 'Rwanda, Rusomo', ' -11.0333', ' 22.0107', 'rejected', 'imgc.png', 'sample.mp4', 'we are here to fight against corruption', ' 2019-03-11T19:04:22.1915Z', ' none' );
      
INSERT INTO datadb( recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) 
               VALUES( 5, 2, 'Jessy', 'Lecture Gives Free Marks To Student', 'red-flag', 'Rwanda, Rusomo', ' -11.0333', ' 22.0107', 'rejected', 'imgc.png', 'sample.mp4', 'we are here to fight against corruption', ' 2019-03-11T19:04:22.1915Z', ' none' );