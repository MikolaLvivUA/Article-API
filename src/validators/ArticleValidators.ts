import * as Joi from 'joi';

export const CreateArticleValidator = Joi.object().keys({
    title: Joi.string().max(255).trim().required(),
    text: Joi.string().trim().required()
});

export const UpdateArticleValidator = Joi.object().keys({
    title: Joi.string().max(255).trim(),
    text: Joi.string().trim()
});
