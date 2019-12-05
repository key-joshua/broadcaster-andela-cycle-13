import Joi from '@hapi/joi';

class Help {
  schemaCreate(dataToValidate) {
    const recordSchema = {
      title: Joi.string().required(),
      type: Joi.string().required(),
      latitude: Joi.string(),
      longitude: Joi.string(),
      comment: Joi.string().required(),
    };
    return Joi.validate(dataToValidate, recordSchema);
  }

  checkType(type) {
    if (type !== 'intervetion' && type !== 'redflag') { return type; }
  }

  checkStatus(status) {
    if (status !== 'under-investigation,' && status !== 'rejected' && status !== 'resolved') { return status; }
  }

  // schemaFakeUrl(dataToValidate) {
  //   const urlSchema = {
  //     redflagid: Joi.number(),
  //   };
  //   return Joi.validate(dataToValidate, urlSchema);
  // }

  constructor() {
    this.created = new Date().toString();
  }
}

const exphelp = new Help();
export default exphelp;
