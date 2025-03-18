import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { jsonSchemaTransform } from 'fastify-type-provider-zod'
import { connectDb } from './db/connect.js'

connectDb()

//instanciando o servidor
const server = fastify()

// Registrando o CORS (Cross-Origin Resource Sharing)
// Isso permite configurar quais origens podem acessar a API.
// Por padrão, todas as origens são permitidas (modo aberto).
server.register(fastifyCors)

//registrando fastify swagger para documentação da api
server.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'NBA API',
      version: '0.0.1'
    }
  },
  transform: jsonSchemaTransform
})

//registrando o swaggerUI no endpoint /docs para visualização da documentação
server.register(fastifySwaggerUi, {
  routePrefix: '/docs'
})

// Roteamento para servir uma página em branco
server.get('/', async (request, reply) => {
  return reply.type('text/html').send()
})

// Inicie o servidor
server.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log(`Servidor rodando em ${address}`)
})
