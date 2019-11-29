import Joi from '@hapi/joi';

class Validator {
  schemaSignUp(dataToValidate) {
    const upSchema = {
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).min(8).required(),
    };
    return Joi.validate(dataToValidate, upSchema);
  }

  schemaSignIn(dataToValidate) {
    const inSchema = {
      email: Joi.string().email().required(),
      password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
    };
    return Joi.validate(dataToValidate, inSchema);
  }

  constructor() {
    this.created = new Date().toString();
  }
}

const expValidator = new Validator();
export default expValidator;
