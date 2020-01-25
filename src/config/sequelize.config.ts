import { config } from './config';

module.exports = {
    development: {
        username: config.DB_USER || 'root',
        password: config.DB_PASS || 'root',
        database: config.DB_NAME || 'article-db',
        host: config.DB_HOST || '127.0.0.1',
        dialect: 'mysql'
    }
};
