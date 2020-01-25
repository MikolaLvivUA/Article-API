import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

import { ResponseStatusCodesEnum } from '../../constants';
import { ErrorHandler } from '../../errors';
import { commentService } from '../../services';
import { CreateCommentValidator, UpdateCommentValidator } from '../../validators';
import { IRequestExtended } from '../../Interfaces';

class CommentController {
    async createComment(req: Request, res: Response, next: NextFunction) {
        const {article_id} = req.params;
        const newCommentData = req.body;

        const newCommentDataValidity = Joi.validate(newCommentData, CreateCommentValidator);

        if (newCommentDataValidity.error) {
            return next(new ErrorHandler(
                ResponseStatusCodesEnum.BAD_REQUEST,
                newCommentDataValidity.error.details[0].message
            ));
        }

        await commentService.createComment(+article_id, newCommentData);

        res.status(ResponseStatusCodesEnum.CREATED).end();
    }

    async getArticlesComments(req: Request, res: Response) {
        const {article_id} = req.params;

        const commentsList = await commentService.getArticlesAllComments(+article_id);

        res.json({data: commentsList});
    }

    async getCommentById(req: IRequestExtended, res: Response) {

        const comment = req.comment;

        res.json({data: comment});
    }

    async updateComment(req: Request, res: Response, next: NextFunction) {
        const {comment_id} = req.params;
        const updatingData = req.body;

        const updatingDataValidity = Joi.validate(updatingData, UpdateCommentValidator);

        if (updatingDataValidity.error) {

            return next(new ErrorHandler(
                ResponseStatusCodesEnum.BAD_REQUEST,
                updatingDataValidity.error.details[0].message
            ));
        }

        await commentService.updateComment(+comment_id, updatingData);

        const updatedComment = await commentService.getCommentById(+comment_id);

        res.json({data: updatedComment});
    }

    async deleteComment(req: Request, res: Response) {
        const {comment_id} = req.params;

        await commentService.deleteComment(+comment_id);

        res.end();
    }
}

export const commentController = new CommentController();
