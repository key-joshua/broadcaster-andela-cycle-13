import pool from '../config/connectionDatabase';

class StoreData {
  async checkEmaiExist(email) {
    const emailToCheck = email.toString().trim().toLowerCase();
    const text = 'SELECT * FROM userdb WHERE email = $1';
    const values = [emailToCheck];
    const { rows } = await pool.query(text, values);
    return rows;
  }

  async createUser(data, hashed) {
    const { firstname, lastname, username, email, phone } = data;
    const text = 'INSERT INTO userdb( category, firstname, lastname, username, email, phoneNumber, password, createdDate, modifiedDate ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *';
    const values = ['user', firstname, lastname, username, email, phone, hashed, new Date(), 'none'];
    const { rows } = await pool.query(text, values);
    return rows;
  }

  async createRecord(data) {
    const textQuery = 'SELECT * FROM datadb WHERE recordid in(SELECT MAX(recordid) FROM dataDB);';
    const lastRecId = await pool.query(textQuery);
    const { userId, createdBy, title, type, latitude, longitude, images, videos, comment } = data;
    const locationo = `Lat: ${latitude}, Long: ${longitude}`;
    const text = 'INSERT INTO datadb( recordId, userId, createdBy, title, type, location, latitude, longitude, status, images, videos, comment, createdOn, modifiedOn ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning *';
    const values = [((lastRecId.rows[0].recordid) + 1), userId, createdBy, title, type, locationo, latitude, longitude, 'draft', images, videos, comment, new Date(), 'none'];
    const { rows } = await pool.query(text, values);
    return rows;
  }

  async changeStatus(status, recordId) {
    const text = 'UPDATE datadb SET status = $1, modifiedOn = $2 WHERE recordId = $3 returning*';
    const values = [status, new Date(), recordId];
    const { rows } = await pool.query(text, values);
    return rows;
  }

  async updateComment(data, recordId) {
    const { createdBy, title, type, latitude, longitude, images, videos, comment } = data;
    const locationo = `Lat: ${latitude}, Long: ${longitude}`;
    const text = 'UPDATE datadb SET createdBy = $1, title = $2, type = $3, location = $4, latitude = $5, longitude = $6, images = $7, videos = $8, comment = $9, modifiedOn = $10 WHERE recordId = $11 returning*';
    const values = [createdBy, title, type, locationo, latitude, longitude, images, videos, comment, new Date(), recordId];
    const { rows } = await pool.query(text, values);
    return rows;
  }

  async updateLocation(data, recordId) {
    const { latitude, longitude } = data;
    const locationo = `Lat: ${latitude}, Long: ${longitude}`;
    const text = 'UPDATE datadb SET location = $1, latitude = $2, longitude = $3, modifiedOn = $4 WHERE recordId = $5 returning*';
    const values = [locationo, latitude, longitude, new Date(), recordId];
    const { rows } = await pool.query(text, values);
    return rows;
  }

  async fetchAllUser() {
    const retrieveAllUsers = 'SELECT * FROM userdb';
    const { rows } = await pool.query(retrieveAllUsers);
    return rows;
  }

  async fetchAllRecords() {
    const retrieveAllRecords = 'SELECT * FROM datadb';
    const { rows } = await pool.query(retrieveAllRecords);
    return rows;
  }

  async fetchOneRecord(recordId) {
    const text = 'SELECT * FROM datadb WHERE recordId = $1';
    const values = [recordId];
    const { rows } = await pool.query(text, values);
    return rows;
  }

  async fetchOneUser(Id) {
    const text = 'SELECT * FROM userdb WHERE id = $1';
    const values = [Id];
    const { rows } = await pool.query(text, values);
    return rows;
  }

  async deleteRecord(recordId) {
    const text = 'DELETE FROM datadb WHERE recordId = $1 returning*';
    const values = [recordId];
    const { rows } = await pool.query(text, values);
    return rows;
  }
}
const expstoreData = new StoreData();
export default expstoreData;
