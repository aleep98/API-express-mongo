import mongoose from "mongoose";


async function connectDatabase() {
    mongoose.connect('mongodb+srv://alura123:alura123@alura.frbnofk.mongodb.net/?appName=alura')

    return mongoose.connection;

}

export default connectDatabase;