'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_game_history.belongsTo(models.User_game, {as: 'user_games', foreignKey: 'id_user', sourceKey: 'id' });
    }
  };
  User_game_history.init({
    id_user: DataTypes.INTEGER,
    result: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_game_history',
  });
  return User_game_history;
};