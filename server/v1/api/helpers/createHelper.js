import Joi from '@hapi/joi';

class Help {
  schemaCreate(dataToValidate) {
    const recordSchema = {
      title: Joi.string().required(),
      type: Joi.string().required(),
      comment: Joi.string().required(),
    };
    return Joi.validate(dataToValidate, recordSchema);
  }

  constructor() {
    this.created = new Date().toString();
  }
}

const exphelp = new Help();
export default exphelp;
