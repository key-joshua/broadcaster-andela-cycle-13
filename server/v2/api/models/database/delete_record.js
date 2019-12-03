import pool from '../../config/connect_db';

const delete1 = 'DELETE FROM challenge.dataDB WHERE recordid in(SELECT MAX(recordid) FROM challenge.dataDB);';
const delete2 = 'DELETE FROM challenge.dataDB WHERE recordid in(SELECT MAX(recordid) FROM challenge.dataDB);';
const delete3 = 'DELETE FROM challenge.dataDB WHERE recordid in(SELECT MAX(recordid) FROM challenge.dataDB);';
const delete4 = 'DELETE FROM challenge.dataDB WHERE recordid in(SELECT MAX(recordid) FROM challenge.dataDB);';
const delete5 = 'DELETE FROM challenge.dataDB WHERE recordid in(SELECT MAX(recordid) FROM challenge.dataDB);';
const delete6 = 'DELETE FROM challenge.dataDB WHERE recordid in(SELECT MAX(recordid) FROM challenge.dataDB);';
const delete7 = 'DELETE FROM challenge.dataDB WHERE recordid in(SELECT MAX(recordid) FROM challenge.dataDB);';
const delete8 = 'DELETE FROM challenge.userDB WHERE email = \'jessica@gmail.com\';';
const insert9 = `INSERT INTO challenge.dataDB( recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) 
               VALUES( 100, 2, 'Jessy', 'Lecture Gives Free Marks To Student', 'red-flag', 'Rwanda, Rusomo', ' -11.0333', ' 22.0107', 'rejected', 'imgc.png', 'sample.mp4', 'we are here to fight against corruption', ' 2019-03-11T19:04:22.1915Z', ' none' );`;

const queryString = `${delete1} ${delete2} ${delete3} ${delete4} ${delete5} ${delete6} ${delete7} ${delete8} ${insert9}`;
pool.query(queryString)
  .then(() => console.log('Hy Joshua All Your Tests Now Are Covered Successfully'))
  .catch((error) => console.log(error));
