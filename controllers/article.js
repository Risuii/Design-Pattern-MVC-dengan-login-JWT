const { User_game,User_game_biodata,User_game_history } = require('../models');
const express = require("express");
const posts = require("../db/login.json");
const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Login

const login = (req, res) => {
    const post = posts.find((item) => {
      return item.email == req.body.email;
    });
    if (req.body.password == post.password) {
      return res.redirect("/database");
    }
    if (req.body.password != post.password) {
      res.redirect("/");
    }
  }

// Create

const create = (req, res) => {
    User_game.create({
      username: req.body.username,
      password: req.body.password,
      user_game_biodatas: {
        name: req.body.name,
        age: req.body.age
      }
    }, {
      include: {
        model: User_game_biodata,
        as: 'user_game_biodatas'
      }
    }).then (() => {
      res.render('create/berhasilCreate')
    })
  }

// update

const update = (req, res) => {
    User_game.update({
      username: req.body.username,
      password: req.body.password
    },
    { where: { id: req.params.id } }
    ).then(() => {
      User_game_biodata.update({
        name: req.body.name,
        age: req.body.age
      }, { where: { id_user: req.params.id } })
      .then(() => {
        res.render('update/berhasilUpdate')
      })
    })
  
  }  

module.exports = {
    login,
    create,
    update
}  