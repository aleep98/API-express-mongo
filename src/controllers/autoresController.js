import autores from '../models/Autor.js'

class AutorController {
    static async listarAutores (req, res) {

        try {
            const listarAutores = await autores.find({});
            res.status(200).json(listarAutores);
            
        } catch (erro) {
            res.status(500).json({message: `Erro ao listar autores: ${erro.message}`});
        }

    };

     static async listarAutoresPorId (req, res) {

        try {
            const id = req.params.id;
            const autorEncontrado = await autores.findById(id);
            res.status(200).json(autorEncontrado);
            
        } catch (erro) {
            res.status(500).json({message: `Erro ao Buscar Autor: ${erro.message}`});
        }
    }
   

    static async cadastrarAutor (req, res) {
        try {
            const autorNovo = await autores.create(req.body);
            res.status(201).json({ message: 'Autor cadastrado com sucesso', autor: autorNovo });
        } catch (erro) {
            res.status(500).json({message: `Erro ao cadastrar autor: ${erro.message}`});
        }
    }

      static async atualizarAutor (req, res) {

        try {
            const id = req.params.id;
            await autores.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Autor atualizado com sucesso' });
        } catch (erro) {
            res.status(500).json({message: `Erro ao atualizar autor: ${erro.message}`});
        }
    }
    
      static async deletarAutor (req, res) {

        try {
            const id = req.params.id;
            await autores.findByIdAndDelete(id);
            res.status(200).json({ message: 'Autor deletado com sucesso' });
        } catch (erro) {
            res.status(500).json({message: `Erro ao deletar autor: ${erro.message}`});
        }
    }
}

export default AutorController;