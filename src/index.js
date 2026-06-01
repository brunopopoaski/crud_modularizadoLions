import express from "express";
import mongoose from "mongoose";
import { env } from "./config/env.config.js"

import logMiddleware from "./middleware/logger.js"
import { createUserService, getAllUsersService, getUserByIDService, updateUserByIdService, deleteUserByIdService, updateUserByIdPropService } from "./service/user.service.js";
const app = express()

mongoose.connect(
  `mongodb+srv://${env.app_user}:${env.app_password}@lionsdev.fq1qgzn.mongodb.net/dblions`
)

mongoose.connection.once(`open`, () => {
  console.log(`Conectado ao mongoDB`);
})

mongoose.connection?.on(`error`, (err) => {
  console.error(`Erro ao conectar ao mongoDB, Error: ${err.mensage}`)
})

app.use(express.json())
app.use(logMiddleware)

app.get('/users', async (req, res) => {
  try {
    const listUsers = await getAllUsersService()
    res.status(200).json(listUsers)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const listUsers = await getUserByIDService(id)
    res.status(200).json(listUsers)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

app.post('/users', async (req, res) => {
  try {
    const newUser = await createUserService(req.body)
    res.status(201).json({ message: "usuario criado com sucesso!", user: newUser })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

app.put('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const body = req.body
    const updateUser = await updateUserByIdService(id, body)
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

app.patch('/users/nome/:id', async (req, res) => {
  try {
    const id = req.params.id
    const body = req.body
    const updateUserProp = await updateUserByIdPropService(id, body)
    res.status(200).json(updateUserProp)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const deleteUser = await deleteUserByIdService(id)
    res.status(200).json(deleteUser)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

app.listen(env.app_port, () => {
  console.log(`Server rodando corretamente`);
})