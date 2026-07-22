import express from 'express';
import LivroController from '../controllers/livrosController';

const routes = express.Router()

routes.get('/livros', LivroController.listarLivros)