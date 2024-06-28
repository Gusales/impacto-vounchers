import fastify from 'fastify'

import { app } from './app'

const { PORT } = process.env

app.listen({
  port: PORT ? Number(PORT) : 8084
}).then(() => {
  console.log(`Server running at url: http://localhost:${PORT}`)
})