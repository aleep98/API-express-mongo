import chalk from 'chalk';
import express from 'express';

const app = express();

app.use(express.json());

const livros = [ 
    {
        id: 1,
        titulo: 'O Hobbit'
    },
    {
        id: 2,
        titulo: 'Bladerunner 2049'
    },
    {
        id: 3,
        titulo: 'Harry Potter e a Pedra Filosofal'
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.post('/livros', (req, res) =>{
   if (!req.body || Object.keys(req.body).length ===0) {
    console.log(chalk.red('Erro ao cadastrar livro'))
    return res.status(400).send('Dados do livro não enviados!')
   }

   livros.push(req.body)
   res.status(201).send('Livro cadastrado com sucesso!')
})

export default app;