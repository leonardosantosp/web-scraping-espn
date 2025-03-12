import { fastify } from 'fastify'

const server = fastify()

// Roteamento para servir uma página em branco
server.get('/', async (request, reply) => {
  return reply.type('text/html').send('')
})

// Inicie o servidor
server.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log(`Servidor rodando em ${address}`)
})
