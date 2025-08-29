import express from 'express';
import colors from 'colors';

const app = express();
const PORT = process.env.PORT || 3001;

//Ruta principal 
app.get('/', (req, res) => {
    res.send('Welcome the server');
});

//Iniciamos el server y mostramos un mensaje en el puerto 
app.listen(PORT, () => {
    console.log(colors.bgMagenta(`Server running on port ${PORT}`));
});