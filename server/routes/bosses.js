const express = require('express')
const bossesRouter = express.Router()
const path = require('path')

const { getBosses, getBossById } = require('../controllers/bosses')

bossesRouter.get('/', getBosses)
bossesRouter.get('/:bossId', getBossById)

module.exports = bossesRouter