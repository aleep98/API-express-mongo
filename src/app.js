import chalk from 'chalk';
import express from 'express';
import connectDatabase from '../src/config/database.js';
import routes from './routes/index.js';
import mongoose from 'mongoose';

const app = express();
routes(app);

const conexao = await connectDatabase();

conexao.on('error', (erro) => {
    console.log(chalk.red('Erro ao conectar ao banco de dados', erro))
})

conexao.once('open', () => {
    console.log(chalk.green("Conectado ao banco de dados"))
})

// eslint-disable-next-line no-unused-vars
app.use((erro, res, req, next) => {
    if(erro instanceof mongoose.Error.CastError) {
            res.status(400).json({ message: `Um ou mais dados fornecidos estão incorretos` });
        }else{
        res.status(500).json({ message: `Erro interno de servidor: ${erro.message}` });

    }
})

export default app;

