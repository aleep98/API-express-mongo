import livro from '../models/Livro.js'

class LivroController {
    static async listarLivros (req, res) {

        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
            
        } catch (erro) {
            res.status(500).json({message: `Erro ao listar livros: ${erro.message}`});
        }

    };

     static async listarLivrosPorId (req, res) {

        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
            
        } catch (erro) {
            res.status(500).json({message: `Erro ao Buscar Livro: ${erro.message}`});
        }
    }
   

    static async cadastrarLivro (req, res) {
        try {
            const livroNovo = await livro.create(req.body);
            res.status(201).json({ message: 'Livro cadastrado com sucesso', livro: livroNovo });
        } catch (erro) {
            res.status(500).json({message: `Erro ao cadastrar livro: ${erro.message}`});
        }
    }

      static async atualizarLivro (req, res) {

        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Livro atualizado com sucesso' });
        } catch (erro) {
            res.status(500).json({message: `Erro ao atualizar livro: ${erro.message}`});
        }
    }
    
      static async deletarLivro (req, res) {

        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: 'Livro deletado com sucesso' });
        } catch (erro) {
            res.status(500).json({message: `Erro ao deletar livro: ${erro.message}`});
        }
    }
}

export default LivroController;