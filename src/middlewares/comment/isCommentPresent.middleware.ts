import { NextFunction, Response } from 'express';

import { ResponseStatusCodesEnum } from '../../constants';
import { ErrorHandler, errors } from '../../errors';
import { commentService } from '../../services';
import { IRequestExtended } from '../../Interfaces';

export const isCommentPresent = async (req: IRequestExtended, res: Response, next: NextFunction) => {

    const {comment_id} = req.params;

    const comment = await commentService.getCommentById(+comment_id);

    if (!comment) {
        return next(new ErrorHandler(
            ResponseStatusCodesEnum.NOT_FOUND,
            errors.NOT_FOUND_COMMENT_NOT_PRESENT.message,
            errors.NOT_FOUND_COMMENT_NOT_PRESENT.code
        ));
    }

    req.comment = comment;

    next();
};
