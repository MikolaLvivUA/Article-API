import { ArticleDBModel } from '../../dataBase';
import { IArticle } from '../../Interfaces';

class ArticleService {

    createArticle(createObject: Partial<IArticle>): Promise<void> {
        return ArticleDBModel.create(createObject) as any;
    }

    getAllArticles(): Promise<IArticle[]> {
        return ArticleDBModel.findAll() as any;
    }

    getArticleById(id: any): Promise<IArticle> {
        return ArticleDBModel.findByPk(...id) as any;
    }

    updateArticle(article_id: number, updateObject: Partial<IArticle>): Promise<IArticle> {
        return ArticleDBModel.update(updateObject, {
            where: {
                id: article_id
            }
        }) as any;
    }

    deleteArticle(article_id: number): Promise<void> {
        return ArticleDBModel.destroy({
            where: {
                id: article_id
            }
        }) as any;
    }
}

export const articleService = new ArticleService();
