import mongoose from "mongoose";


async function connectDatabase() {

    try {
        await mongoose.connect(process.env.MONGO_CONNECTION)
        console.log('Conectado ao banco de dados')
    } catch (error) {
        console.log('Erro ao conectar ao banco de dados', error)
    }
    return mongoose.connection;
}

export default connectDatabase;