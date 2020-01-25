import { Router } from 'express';

import { commentController } from '../../controllers';
import { isCommentPresent } from '../../middlewares';

const router = Router();

router.use('/:comment_id', isCommentPresent);
router.get('/:comment_id', commentController.getCommentById);
router.patch('/:comment_id', commentController.updateComment);
router.delete('/:comment_id', commentController.deleteComment);

export const commentRouter = router;
