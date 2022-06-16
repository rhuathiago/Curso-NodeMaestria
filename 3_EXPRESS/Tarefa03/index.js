const express = require('express')
const server = express()
const port = 5000

const path = require('path')

server.use(
    express.urlencoded({
        extended: true,
    }),
)

server.use(express.json())

const basePath = path.join(__dirname, 'templates')

server.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

server.post('/users/save', (req, res) => {

    console.log(req.body)

})

server.get('/users/:id', (req, res) => {
    const id = req.params.id
    
    console.log(`Procurando o usuário: ${id}`)
    
    res.sendFile(`${basePath}/users.html`)
})

server.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

server.listen(port, () => {
    console.log(`Server está rodando na porta ${port}`)
})