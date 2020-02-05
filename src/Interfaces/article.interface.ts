export interface IArticle {
    id?: number;
    title: string;
    text: string;
    createdDate?: string;
}

export interface IArticleInputData {
    articleInputData: IArticle;
}
