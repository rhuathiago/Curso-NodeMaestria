const express = require('express')
const app = express()
const port = 5000

const path = require('path')

const projectsRoutes = require('./projects')

app.use(express.static('public'))

app.use('/projects', projectsRoutes)

app.listen(port, () => {
    console.log(`O server está rodando na porta ${port}`)
})