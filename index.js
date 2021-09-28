const express = require("express");
const posts = require("./db/login.json");
// kode diatas di pakai untuk ngecek data yang dimasukan itu, ada atau tidak di dalam file login.json
const app = express();
const { User_game,User_game_biodata,User_game_history } = require('./models');
const port = process.env.PORT || 3000;

const router = require('./router');

// middleWare

app.use(express.static("assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// template engine

app.set('view engine', 'ejs');


app.use(router);
app.listen(port, () => console.log(`Server nyala di port ${port}`));
