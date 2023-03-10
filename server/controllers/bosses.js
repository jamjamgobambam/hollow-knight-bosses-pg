const { pool } = require('../db/db')

const getBosses = (req, res) => {
    pool.query('SELECT * FROM bosses ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
  
      res.json(results.rows)
    })
}
  
const getBossById = (req, res) => {
    const id = Number(req.params.bossId)

    pool.query('SELECT * FROM bosses WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }

        res.json(results.rows[0])
    })
}
  
module.exports = {
    getBosses,
    getBossById
}