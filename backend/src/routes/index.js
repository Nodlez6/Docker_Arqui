const { Router } = require('express');
const router = Router();
const {getUsers , createResena , getAllResenas, getAllCanciones, getResenaByIdCancion , deleteResena, updateResena} = require('../db')


router.get('/users' , getUsers);
router.get('/allResenas' , getAllResenas);
router.get('/allCanciones' , getAllCanciones);
router.get('/ResenaByIdCancion/:id', getResenaByIdCancion)
router.post('/createResena', createResena);
router.delete('/deleteResena/:id', deleteResena);
router.put('/updateResena/:id', updateResena)


module.exports = router;