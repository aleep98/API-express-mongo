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
             res
        .status(404)
        .json({ message: `ID do autor não encontrado` });
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
 
      await autor.findByIdAndUpdate(id, {$set: req.body});

      res.status(200).send({message: "Autor atualizado com sucesso"});
    } catch (erro) {
      next(erro);
    }
  }

  static async deletarAutor(req, res, next) {
     try {
      const id = req.params.id;

      await autor.findByIdAndDelete(id);

      res.status(200).send({message: "Autor removido com sucesso"});
    } catch (erro) {
      next(erro);
    }
  }
}

export default AutorController;
