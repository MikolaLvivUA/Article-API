import { DataTypes, Model, ModelAttributes, Sequelize } from 'sequelize';

import { DataBaseTablesName } from '../../constants';
import { IComment } from '../../Interfaces';
import { DBModelFieldInit } from '../db-structure.model';
import { db } from '../db.provider';
import { ArticleDBModel } from './Article.model';

const modelAttributes: DBModelFieldInit<IComment> = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    authorName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    article_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdDate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('UTC_TIMESTAMP'),
        allowNull: false
    }
};

export class CommentDBModel extends Model {
}

CommentDBModel.init(
    modelAttributes as ModelAttributes,
    {
        sequelize: db,
        modelName: DataBaseTablesName.COMMENT,
        tableName: DataBaseTablesName.COMMENT,
        timestamps: false
    }
);

CommentDBModel.belongsTo(ArticleDBModel, {foreignKey: 'article_id'});
