const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/project', (req, res) => {
    res.sendFile(`${basePath}/project.html`)
})

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

router.use(function (req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

module.exports = router