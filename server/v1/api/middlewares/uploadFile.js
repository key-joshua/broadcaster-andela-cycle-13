import multer from 'multer';

class Filelp {
  constructor() {
    this.storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'server/v1/api/models/uploadedFiles/');
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });

    const uploads = multer({ storage: this.storage });
    this.copyUploads = uploads.fields([{ name: 'images', maxCount: 4 }, { name: 'videos', maxCount: 4 }]);
    this.allFile = this.copyUploads;
  }
}

const expfilelp = new Filelp();
export default expfilelp;
