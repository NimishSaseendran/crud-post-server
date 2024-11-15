const jsonServer = require('json-server')

const server = jsonServer.create()

const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')

server.use(middleware)
server.use(router)

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
    console.log(`Server running at: ${PORT}`)
})