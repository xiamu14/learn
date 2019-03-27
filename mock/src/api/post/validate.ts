import * as Joi from "joi";

export default {
  create: {
    payload: {
      text: Joi.string().required(),
      img: Joi.array().optional(),
      uid: Joi.string().required()
    }
  },
  getById: {
    params: {
      id: Joi.string().required()
    }
  }
};
