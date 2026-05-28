import express from "express";
import mongoose from "mongoose";

import listaDeUsuarios  from "./data/userData.js";
import criandoUser from "./modularizado/cadastro.js"
import editandoUser from "./modularizado/update.js";
import deleteUser from "./modularizado/delete.js"
import logMiddleware from "./middleware/logger.js"
import validacaoEmail from "./modularizado/validacoes.js";

const app = express()
const port = 3000

mongoose.connect(
  `mongodb+srv://brunomeida27_db_user:aPsRGePREmxcF1Uf@lionsdev.fq1qgzn.mongodb.net/`
)

mongoose.connection.once(`open`, () => {
  console.log(`Conectado ao DB`);
})

mongoose.connection?.on(`error`, () =>{
  console.error(`Erro ao conectar ao DB, Error: ${err.mensage}`)
})

app.use(express.json())
app.use(logMiddleware)

app.get('/users', (req, res) => {
    res.send(listaDeUsuarios) 
})

app.post('/users', (req, res) => {
  const body = req.body
  const emailvalidado = validacaoEmail(body.email)
  criandoUser(body, res, emailvalidado)
})

app.put('/users/:id', (req, res) => {
  const id = req.params.id
  const body = req.body
  const emailvalidado = validacaoEmail(body.email)
  editandoUser(id, body, res, emailvalidado)
})

app.delete('/users/:id', (req, res) => {
  const id = req.params.id
  deleteUser(id, res)
})

app.listen(port, () =>{
  console.log(`Server rodando na porta ${port}`);
})


//aPsRGePREmxcF1Uf
//mongodb+srv://brunomeida27_db_user:aPsRGePREmxcF1Uf@lionsdev.fq1qgzn.mongodb.net/