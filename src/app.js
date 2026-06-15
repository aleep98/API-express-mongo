import chalk from 'chalk';
import express from 'express';
import connectDatabase from '../src/config/database.js';
import livro from '../src/models/Livro.js'


const app = express();

const conexao = await connectDatabase();

conexao.on('error', (erro) => {
    console.log(chalk.red('Erro ao conectar ao banco de dados', erro))
})

conexao.once('open', () => {
    console.log(chalk.green("Conectado ao banco de dados"))
})

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js')
})

app.get('/livros', async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
    console.log(listaLivros)
})

app.get('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index])
 })

app.post('/livros', (req, res) =>{
   if (!req.body || Object.keys(req.body).length ===0) {
    console.log(chalk.red('Erro ao cadastrar livro'))
    return res.status(400).send('Dados do livro não enviados!')
   }

   livros.push(req.body)
   res.status(201).send('Livro cadastrado com sucesso!')
})

app.put('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).send.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send('Livro deletado com sucesso!')
})

export default app;

// mongodb+srv://alura123:<alura123>@alura.frbnofk.mongodb.net/?appName=alura