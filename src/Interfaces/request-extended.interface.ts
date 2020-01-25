import { Request } from 'express-serve-static-core';

import { IArticle } from './article.interface';
import { IComment } from './comment.interface';

export interface IRequestExtended extends Request {
    article?: IArticle;
    comment?: IComment;
}
