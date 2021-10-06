const express = require('express')
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());


// middlewares
app.use(express.json());


// Rutas
app.use(require('./routes/index'))



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
   
    
})


  