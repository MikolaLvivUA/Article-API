import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

import { ResponseStatusCodesEnum } from '../../constants';
import { ErrorHandler } from '../../errors';
import { articleService } from '../../services';
import { CreateArticleValidator, UpdateArticleValidator } from '../../validators';
import { IArticleInputData } from '../../Interfaces';

class ArticleController {

    async createArticle(articleInput: IArticleInputData, req: Request) {

        const article = articleInput && articleInput.articleInputData;

        const newArticleValidity = Joi.validate(article, CreateArticleValidator);

        if (newArticleValidity.error) {
            throw new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, newArticleValidity.error.details[0].message);
        }

        await articleService.createArticle(article);

        return true;
    }

     getAllArticles() {
        return articleService.getAllArticles();
    }

    async getArticlesByID(id: number) {

        const article_id = Object.values(id);

        return await articleService.getArticleById(article_id);
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
