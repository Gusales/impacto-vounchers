import fastify from "fastify";
import cors from '@fastify/cors'

import { readJson } from './utils/json'

export const app = fastify()

app.register(cors, {
  origin: '*'
})

app.get('/', () => {
  const vounchers = readJson('vounchers')
  return vounchers
})

interface Comprar {
  idVouncher: number,
  idUsuario: number
}

app.post('/comprar', async (request, reply) => {
  const { idUsuario, idVouncher } = request.body as Comprar

  const { vounchers } = readJson('vounchers')

  const vouncherEncontrado = vounchers.find(item => item.id === idVouncher)
  if (!vouncherEncontrado) {
    return reply.status(404).send({ mensagem: "Vouncher não encontrado" })
  }
  
})