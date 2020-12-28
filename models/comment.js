'use strict';
const Sequelize = require('sequelize');
// const db = require('.');
module.exports = class comment extends Sequelize.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here
      // db.Comment.belongsTo(db.User, {foreignKey: 'commenter', targetKey : 'id'});
    }

    static init(sequelize){
      return super.init({
        comment: {
          type: Sequelize.STRING(100),
          allowNull:false
        },
        commenter : {
          type: Sequelize.INTEGER
        }
      },
      {
        sequelize,
        timestamps : false,
        underscored : false,
        modelName : 'Comment',
        tableName : 'comments',
        paranoid : false,
        charset : 'utf8mb4'
      }
      )
    };
  };
  