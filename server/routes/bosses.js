const express = require('express')
const bossesRouter = express.Router()

const { getBosses, getBossById } = require('../controllers/bosses')

bossesRouter.get('/', getBosses)
bossesRouter.get('/:bossId', getBossById)

module.exports = bossesRouter