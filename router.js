const router = require('express').Router();

const home = require('./controllers/home');
const article = require('./controllers/article');

router.get('/', home.homePage);
router.post('/login', article.login);
router.get('/games', home.gamePage);
router.get('/database', home.database);
router.get('/create', home.create);
router.post('/create', article.create);
router.get('/read/:id', home.read);
router.get('/update/:id', home.update);
router.post('/update/:id', article.update);
router.get('/delete/:id', home.delet);

module.exports = router;