import express from "express";
import listaDeUsuarios  from "./data/userData.js";
import criandoUser from "./modularizado/cadastro.js"
import editandoUser from "./modularizado/update.js";
import deleteUser from "./modularizado/delete.js"
import logMiddleware from "./middleware/logger.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(logMiddleware)

app.get('/users', (req, res) => {
    res.send(listaDeUsuarios) 
})

app.post('/users', (req, res) => {
  const body = req.body
  criandoUser(body, res)
})

app.put('/users/:id', (req, res) => {
  const id = req.params.id
  const body = req.body
  editandoUser(id, body, res)
})

app.delete('/users/:id', (req, res) => {
  const id = req.params.id
  deleteUser(id, res)
})

app.listen(port, () =>{
  console.log(`Server rodando na porta ${port}`);
})
