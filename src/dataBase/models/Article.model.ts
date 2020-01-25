import { DataTypes, Model, ModelAttributes, Sequelize } from 'sequelize';

import { DataBaseTablesName } from '../../constants';
import { IArticle } from '../../Interfaces';
import { DBModelFieldInit } from '../db-structure.model';
import { db } from '../db.provider';

const modelAttributes: DBModelFieldInit<IArticle> = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdDate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('UTC_TIMESTAMP'),
        allowNull: false
    }
};

export class ArticleDBModel extends Model {
}

ArticleDBModel.init(
    modelAttributes as ModelAttributes,
    {
        sequelize: db,
        modelName: DataBaseTablesName.ARTICLE,
        tableName: DataBaseTablesName.ARTICLE,
        timestamps: false
    }
);
