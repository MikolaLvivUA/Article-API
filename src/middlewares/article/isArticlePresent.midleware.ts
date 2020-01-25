import { NextFunction, Response } from 'express';

import { ResponseStatusCodesEnum } from '../../constants';
import { ErrorHandler, errors } from '../../errors';
import { articleService } from '../../services';
import { IRequestExtended } from '../../Interfaces';

export const isArticlePresent = async (req: IRequestExtended, res: Response, next: NextFunction) => {

    const {article_id} = req.params;

    const article = await articleService.getArticleById(+article_id);

    if (!article) {
        return next(new ErrorHandler(
            ResponseStatusCodesEnum.NOT_FOUND,
            errors.NOT_FOUND_ARTICLE_NOT_PRESENT.message,
            errors.NOT_FOUND_ARTICLE_NOT_PRESENT.code
        ));
    }

    req.article = article;
    next();
};
