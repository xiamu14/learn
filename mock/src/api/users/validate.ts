import * as Joi from "joi";

export default {
  create: {
    payload: {
      avatar: Joi.string().required(),
      nickname: Joi.string().required(),
      sex: Joi.number()
        .integer()
        .required()
    }
  },
  updateById: {
    params: {
      id: Joi.string().required()
    },
    payload: {
      avatar: Joi.string().required(),
      nickname: Joi.string().required(),
      sex: Joi.number()
        .integer()
        .required()
    }
  },
  getById: {
    params: {
      id: Joi.string().required()
    }
  },
  deleteById: {
    params: {
      id: Joi.string().required()
    }
  },
  getSkey: {
    payload: {
      skey: Joi.string()
    }
  }
};
