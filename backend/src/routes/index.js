const { Router } = require('express');
const router = Router();
const {getUsers , createResena , getAllResenas, getAllCanciones, getResenaByIdCancion} = require('../db')


router.get('/users' , getUsers);
router.get('/allResenas' , getAllResenas);
router.get('/allCanciones' , getAllCanciones);
router.get('/ResenaByIdCancion/:id', getResenaByIdCancion)
router.post('/createResena', createResena);


module.exports = router;