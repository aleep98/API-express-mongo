import chalk from 'chalk';
import express from 'express';
import connectDatabase from '../src/config/database.js';
import routes from './routes/index.js';

const app = express();
routes(app);

const conexao = await connectDatabase();

conexao.on('error', (erro) => {
    console.log(chalk.red('Erro ao conectar ao banco de dados', erro))
})

conexao.once('open', () => {
    console.log(chalk.green("Conectado ao banco de dados"))
})



app.delete('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send('Livro deletado com sucesso!')
})

export default app;

// mongodb+srv://alura123:<alura123>@alura.frbnofk.mongodb.net/?appName=alura