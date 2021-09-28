const { User_game,User_game_biodata,User_game_history } = require('../models');

// Home Page

const homePage = (req, res) => {
    return res.render("layout/index.ejs");
  }

// Games Page

const gamePage = (req, res) => {
    return res.render("layout/games.ejs");
  }

// Database

const database = (req, res) => {
    User_game.findAll()
    .then(database => {
      res.render('database/database', {
        database
      })
    })
  }

// Create  

const create = (req, res) => {
    res.render('create/create')
  }


// Read

const read = (req, res) => {
    User_game.findOne({
      where: { id: req.params.id },
      include: {
        model: User_game_biodata,
        as: 'user_game_biodatas'
      }
    }).then((read) => {
      res.render('read/read', { read })
    })
  }

// Update

const update = (req, res) => {
    User_game.findOne({
      where: { id: req.params.id },
      include: {
        model: User_game_biodata,
        as: 'user_game_biodatas'
      }
    }).then((update) => {
      res.render('update/update', { update })
    })
  }

// Delete

const delet = (req, res) => {
    User_game_biodata.destroy({ where: { id_user: req.params.id } })
    .then(() => {
      User_game.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.render('delete/delete')
      })
    } )
  }

module.exports = {
    homePage,
    gamePage,
    database,
    create,
    read,
    update,
    delet
}  