export const config = {
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || 'http://localhost',


    DB_NAME: process.env.DB_NAME || 'article-db',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || 'root',
    DB_HOST: process.env.DB_PASS ||'localhost'
};
