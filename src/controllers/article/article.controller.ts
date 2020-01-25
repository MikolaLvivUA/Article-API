import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

import { ResponseStatusCodesEnum } from '../../constants';
import { ErrorHandler } from '../../errors';
import { articleService } from '../../services';
import { CreateArticleValidator, UpdateArticleValidator } from '../../validators';
import { IArticle, IRequestExtended } from '../../Interfaces';

class ArticleController {

    async createArticle(req: Request, res: Response, next: NextFunction) {

        const newArticleData = req.body as Partial<IArticle>;

        const newArticleValidity = Joi.validate(newArticleData, CreateArticleValidator);

        if (newArticleValidity.error) {
            return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, newArticleValidity.error.details[0].message));
        }

        await articleService.createArticle(newArticleData);

        res.status(ResponseStatusCodesEnum.CREATED).end();
    }

    async getAllArticles(req: Request, res: Response) {

        const articleList = await articleService.getAllArticles();

        res.json({data: articleList});
    }

    async getArticlesByID(req: IRequestExtended, res: Response) {

        const article = req.article;

        res.json({data: article});
    }

    async updateArticle(req: Request, res: Response, next: NextFunction) {

        const {article_id} = req.params;
        const updatedData = req.body;

        const updatedDataValidity = Joi.validate(updatedData, UpdateArticleValidator);

        if (updatedDataValidity.error) {
            return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, updatedDataValidity.error.details[0].message));
        }

        await articleService.updateArticle(+article_id, updatedData);

        const updatedArticle = await articleService.getArticleById(+article_id);

        res.json({data: updatedArticle});
    }

    async deleteArticle(req: Request, res: Response) {
        const {article_id} = req.params;

        await articleService.deleteArticle(+article_id);

        res.end();
    }
}

export const articleController = new ArticleController();
