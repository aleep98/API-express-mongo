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


export default app;

