import NaoEncontrado from "../erros/naoEncontrado.js";
import { autor } from "../models/Autor.js";

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

  static async listarAutoresPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
        if(autorEncontrado !== null) {
            res.status(200).json(autorEncontrado);
        }else{
            next(new NaoEncontrado(`ID do autor não encontrado`));
        }
    } catch (erro) {
        next(erro);
}
  }
  static async cadastrarAutor(req, res, next) {
    try {
      let novoAutor = new autor(req.body);

      const autorResultado = await novoAutor.save();

      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarAutor(req, res, next) {
        try {
      const id = req.params.id;
 
      const autorResultado = await autor.findByIdAndUpdate(id, {$set: req.body});
            if(autorResultado !== null) {
            res.status(200).json({message: "Autor atualizado com sucesso"});
        }else{
            next(new NaoEncontrado(`ID do autor não encontrado`));
        }
    } catch (erro) {
      next(erro);
    }
  }

  static async deletarAutor(req, res, next) {
     try {
      const id = req.params.id;

      const autorResultado = await autor.findByIdAndDelete(id);

      if(autorResultado !== null) {
        res.status(200).json({message: "Autor removido com sucesso"});
      } else {
        next(new NaoEncontrado(`ID do autor não encontrado`));
      }
    } catch (erro) {
      next(erro);
    }
  }
}

export default AutorController;
