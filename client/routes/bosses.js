const express = require('express')
const bossesRouter = express.Router()
const path = require('path')

bossesRouter.get('/:bossId/:bossName', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../pages/boss.html'))
})

module.exports = bossesRouter