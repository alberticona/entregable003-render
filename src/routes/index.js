const express = require('express');
const routerGenre = require('./genre.router');
const RouterActor = require('./actor.router');
const routerMovie = require('./movie.router');
const routerDirector = require('./director.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', routerGenre)
router.use('/actors', RouterActor)
router.use('/movies', routerMovie)
router.use('/directors', routerDirector)


module.exports = router;