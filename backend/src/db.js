const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    user:  process.env.POSTGRES_USER,
    password:  process.env.POSTGRES_PASSWORD,
    database:  process.env.POSTGRES_DB,
    port: '5432'
})

const getUsers = async (req , res ) => {

    try {
        const respuesta = await pool.query('SELECT * FROM usuarios')
        res.status(200).json(respuesta.rows);
    }
    catch(error){
        res.status(error.respuesta.status)
        return res.send(error.message);
    }

    
}

const getAllResenas = async (req , res ) => {

    try {
        const respuesta = await pool.query('SELECT * FROM resenas')
        res.status(200).json(respuesta.rows);
    }
    catch(error){
        res.status(error.respuesta.status)
        return res.send(error.message);
    }
}
const getAllCanciones = async (req , res ) => {
    try {
        const respuesta = await pool.query('SELECT * FROM canciones')
        res.status(200).json(respuesta.rows);
    }
    catch(error){
        res.status(error.respuesta.status)
        return res.send(error.message);
    }
    
}

const getResenaByIdCancion = async (req , res ) => {

    
    try {
        const id  = req.params.id;
        const respuesta = await pool.query('SELECT * FROM  resenas WHERE "FK_Cancion"=$1', [id])
        res.status(200).json(respuesta.rows);
    }
    catch(error){
        res.status(error.respuesta.status)
        return res.send(error.message);
    }
    
    
}




const createResena = async (req , res ) => {

    const { IDUsuario , IDCancion , Comentario, Puntuacion  } = req.body;

    const respuesta = await pool.query('INSERT INTO resenas (FK_Usuario , FK_Cancion , Comentario, Puntuacion) VALUES ($1,$2,$3,$4)', [IDUsuario , IDCancion , Comentario, Puntuacion ])

   
}



module.exports = {
    getUsers,
    createResena,
    getAllResenas,
    getAllCanciones,
    getResenaByIdCancion
}