'use strict';
const Sequelize = require('sequelize');
// const db = require('.');
module.exports = class user extends Sequelize.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here
      db.User.hasMany(db.Comment, {foreignKey : 'commenter', sourrceKey : 'id'});
    }

    static init(sequelize){
      return super.init({
        name: {
          type: Sequelize.STRING(20),
          allowNull : false,
          unique : true
        },
        age: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull : false
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull : true
        }
      },
      {
        sequelize,
        timestamps : false,
        underscored : false,
        modelName : 'User',
        tableName : 'users',
        paranoid : false,
        charset : 'utf8'
      });
    }
  };
  
