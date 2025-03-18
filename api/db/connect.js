// Importa o mongoose
import mongoose from 'mongoose'

// Defina a URL de conexão com o MongoDB
const mongoURI =
  'mongodb+srv://leo:58j1Vzg5k9sTZwX2@cluster0.tsmqd.mongodb.net/nbaBd?retryWrites=true&w=majority&appName=Cluster0'

export async function connectDb() {
  try {
    await mongoose.connect(mongoURI)
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', err)
    process.exit(1) // Encerra o processo em caso de erro
  }
}

export { mongoose }
