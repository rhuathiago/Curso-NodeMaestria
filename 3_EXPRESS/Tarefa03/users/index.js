const express = require('express')
const router = express.Router()
const path = require('path')

router.use(express.json())

const basePath = path.join(__dirname, '../templates')

// router.get('/id', (req, res) => {
//     const id = req.params.id
//     res.sendFile(`${basePath}/users.html`)

//     console.log(`O id do usuário é ${id}`)
// })

module.exports = router