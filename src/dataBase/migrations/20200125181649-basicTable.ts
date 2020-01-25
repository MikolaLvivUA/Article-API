import { ModelAttributes, QueryInterface } from 'sequelize';

import { DataBaseTablesName } from '../../constants';
import { IArticle, IComment } from '../../Interfaces';
import { DBModelFieldInit } from '../db-structure.model';

export default {
  up: async (queryInterface: QueryInterface, dataTypes: any) => {

    const articleModelAttributes: DBModelFieldInit<IArticle> = {

      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: dataTypes.STRING(255),
        allowNull: false
      },
      text: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      createdDate: {
        type: dataTypes.DATE,
        allowNull: false
      }
    };
    await queryInterface.createTable(DataBaseTablesName.ARTICLE, articleModelAttributes as ModelAttributes);

    const commentModelAttributes: DBModelFieldInit<IComment> = {

      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      authorName: {
        type: dataTypes.STRING(255),
        allowNull: false
      },
      text: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      article_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        references: {
          model: DataBaseTablesName.ARTICLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdDate: {
        type: dataTypes.DATE,
        allowNull: false
      }
    };
    await queryInterface.createTable(DataBaseTablesName.COMMENT, commentModelAttributes as ModelAttributes);

    return Promise.resolve();
  },

  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.dropAllTables();
  }
};
