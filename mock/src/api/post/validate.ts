import * as Joi from "joi";

export default {
  create: {
    payload: {
      text: Joi.string().required(),
      imgs: Joi.array().optional(),
      uid: Joi.string().required(),
      comments: Joi.array()
    }
  },
  getById: {
    params: {
      id: Joi.string().required()
    }
  }
};
