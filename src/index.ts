import express from 'express'
import mongoose from 'mongoose'

const app = express()

const API_PORT = 3001
const MONGO_CONNECTION_STRING = 'mongodb://localhost:27017'

const runServer = () => app.listen(API_PORT, () => {
  console.log(`✅ Servidor rodando em   localhost:${API_PORT}`)
})

mongoose.connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('✅ Conectado ao mongodb.')
    runServer()
  })
  .catch(() => console.log('Erro ao conectar ao mongodb.'))