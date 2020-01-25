import { CommentDBModel } from '../../dataBase';
import { IComment } from '../../Interfaces';

class CommentService {

    createComment(article_id: number, newCommentData: Partial<IComment>): Promise<void> {
        const {authorName, text} = newCommentData;

        return CommentDBModel.create({
            article_id,
            authorName,
            text
        }) as any;
    }

    getArticlesAllComments(article_id: number): Promise<IComment> {
        return CommentDBModel.findAll({
            where: {
                article_id
            }
        }) as any;
    }

    getCommentById(comment_id: number): Promise<IComment> {
        return CommentDBModel.findOne({
            where: {
                id: comment_id
            }
        }) as any;
    }

    updateComment(comment_id: number, updatingData: Partial<IComment>): Promise<void> {
        return CommentDBModel.update(updatingData, {
            where: {
                id: comment_id
            }
        }) as any;
    }

    deleteComment(comment_id: number): Promise<void> {
        return CommentDBModel.destroy({
            where: {
                id: comment_id
            }
        }) as any;
    }

}

export const commentService = new CommentService();
