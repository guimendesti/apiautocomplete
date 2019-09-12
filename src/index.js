// Dependancies
const fastify = require('fastify')({
  logger: true
})
const mongoose = require('mongoose')
const routes = require('./routes')

// Routes
routes.forEach((route, index) => {
 fastify.route(route)
})

// MoongoDB connect
mongoose.connect('mongodb://mongo-dev:27017')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

// Main Route
fastify.get('/', async (request, reply) => {
  return { api: 'https://github.com/guimendesti/apiautocomplete#readme' }
})

// Run
const start = async () => {
  try {
    await fastify.listen(3002)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
