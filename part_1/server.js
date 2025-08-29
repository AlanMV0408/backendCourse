import express from 'express';
import colors from 'colors';

const app = express();
const port = process.env.PORT ||  3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*let data = {
    name: 'John Doe', 
    email: 'johndoe@gmail.com',
    message: 'hello from the server',
    date: new Date().toLocaleDateString(),
}*/

let data = [{
    'name': 'John Doe', 
    'email': 'johndoe@gmail.com',
    'age': 30,
    'city': 'Guadalajara',
    'ocupation': 'Software Developer',
    'message': 'hello from the server',
    'date': new Date().toLocaleDateString(),
}]


//RUTAS 
//RUTAS WEB 
app.get('/', (req, res) => {
    console.log("Usuario accediendo al home");
    res.send(`<body
        style="display: flex; flex-direction: column; alin-items: center;" justify-content: center; height: 100vh; font-family: Arial, sans-serif; background-color: #f0f0f0;">
        <p>
            <h2>DATA:</h2>
            ${JSON.stringify(data)}
        </p>
        </body>`);
    
    res.send('Hello, World!');
})





//RUTAS API (non visual)
app.get('/api/data', (req, res) => {
    console.log("Usuario accediendo a /api/data");
    res.status(200).send(data);
})


app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body;
    console.log(newEntry);
    data.push(newEntry);
    res.status(201).send({ message: 'Data  creada satisfactoriamente', 
    data: newEntry });
});

app.listen(port, () => {
    console.log(colors.bgYellow(`Server is running on http://localhost:${port}`));

})