import { Router } from 'express';

import { articleController, commentController } from '../../controllers';
import { isArticlePresent } from '../../middlewares';

const router = Router();

router.post('/', articleController.createArticle);
router.get('/', articleController.getAllArticles);

router.use('/:article_id', isArticlePresent);
router.get('/:article_id', articleController.getArticlesByID);
router.patch('/:article_id', articleController.updateArticle);
router.delete('/:article_id', articleController.deleteArticle);
router.post('/:article_id/comments', commentController.createComment);
router.get('/:article_id/comments', commentController.getArticlesComments);

export const articleRouter = router;
