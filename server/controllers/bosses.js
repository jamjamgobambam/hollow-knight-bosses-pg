const { pool } = require('../db/database')
const data = require('../db/data.json')

const getBosses = (req, res) => {
    try {
        pool.query('SELECT * FROM bosses ORDER BY id ASC', (error, results) => {
            res.status(200).json(results.rows)
        })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}
  
const getBossById = (req, res) => {
    const id = Number(req.params.bossId)

    try {
        pool.query('SELECT * FROM bosses WHERE id = $1', [id], (error, results) => {
            res.status(200).json(results.rows[0])
        })
    } catch (error) {
        return res.status(400).json({
            error: error,
        })
    }
}
  
module.exports = {
    getBosses,
    getBossById
}