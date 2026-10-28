import { autor } from "../models/Autor.js";
import mongoose from "mongoose";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listarAutores = await autor.find({});
      res.status(200).json(listarAutores);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `Erro ao listar autores: ${erro.message}` });
    }
  }

  static async listarAutoresPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
        if(autorEncontrado !== null) {
            res.status(200).json(autorEncontrado);
        }else{
             res
        .status(404)
        .json({ message: `ID do autor não encontrado` });
    }
    
    } catch (erro) {
        if(erro instanceof mongoose.Error.CastError) {
            res.status(400).json({ message: `Um ou mais dados fornecidos são inválidos` });
        }else{
        res.status(500).json({ message: `Erro interno de servidor: ${erro.message}` });

    }

}
  }
  static async cadastrarAutor(req, res) {
    try {
      let novoAutor = new autor(req.body);

      const autorResultado = await novoAutor.save();

      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      res
        .status(500)
        .send({ message: `${erro.message} - falha ao cadastrar Autor.` });
    }
  }

  static async atualizarAutor(req, res) {
        try {
      const id = req.params.id;
 
      await autor.findByIdAndUpdate(id, {$set: req.body});

      res.status(200).send({message: "Autor atualizado com sucesso"});
    } catch (erro) {
      res.status(500).send({message: erro.message});
    }
  }

  static async deletarAutor(req, res) {
     try {
      const id = req.params.id;

      await autor.findByIdAndDelete(id);

      res.status(200).send({message: "Autor removido com sucesso"});
    } catch (erro) {
      res.status(500).send({message: erro.message});
    }
  }
}

export default AutorController;
