import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from 'fastify-type-provider-zod'
import { connectDb } from './config/connect.js'
import { playerRoutes } from './routes/player.routes.js'
import { teamRoutes } from './routes/team.routes.js'

connectDb()

//instanciando o servidor
const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

// Registrando o CORS (Cross-Origin Resource Sharing)
// Isso permite configurar quais origens podem acessar a API.
// Por padrão, todas as origens são permitidas (modo aberto).
app.register(fastifyCors)

//registrando fastify swagger para documentação da api
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'NBA API',
      version: '0.0.1'
    }
  },
  transform: jsonSchemaTransform
})

//registrando o swaggerUI no endpoint /docs para visualização da documentação
app.register(fastifySwaggerUi, {
  routePrefix: '/docs'
})

// Registrando a rota de times
app.register(teamRoutes)
app.register(playerRoutes)

app.get('/', async (request, reply) => {
  return reply.type('text/html').send()
})

// Inicie o servidor
app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log(`Servidor rodando em ${address}`)
})
