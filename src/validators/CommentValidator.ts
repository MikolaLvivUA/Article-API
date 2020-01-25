import * as Joi from 'joi';

export const CreateCommentValidator = Joi.object().keys({
    authorName: Joi.string().max(255).trim().required(),
    text: Joi.string().max(255).trim().required()
});

export const UpdateCommentValidator = Joi.object().keys({
    authorName: Joi.string().max(255).trim(),
    text: Joi.string().max(255).trim()
});
