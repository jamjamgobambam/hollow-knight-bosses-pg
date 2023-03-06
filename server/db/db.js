const path = require('path')
require('dotenv').config()
const pg = require('pg')
const data = require('./data.json')

const config = {
    // user: 'cpweb103',
    // password: 'cpweb103',
    // host: 'localhost',
    // port: 5432,
    // database: 'hollowknight'

    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}

const pool = new pg.Pool(config)

const bossCreateQuery = `CREATE TABLE IF NOT EXISTS bosses (
  id SERIAL PRIMARY KEY,
  name TEXT,
  health INT,
  image TEXT,
  location TEXT,
  description TEXT
)`

pool.query('DROP TABLE IF EXISTS bosses', (error, results) => {
  if (error) {
    throw error
  }

  console.log('old bosses dropped')

  pool.query(bossCreateQuery, (error, results) => {
    if (error) {
      throw error
    }

    console.log('new bosses table created')
    insertBosses()
  })
})

const insertBosses = () => {
  pool.query('INSERT INTO bosses SELECT * FROM jsonb_populate_recordset(NULL::bosses, $1::jsonb)', [JSON.stringify(data)], (error, results) => {
    if (error) {
      throw error
    }

    console.log('bosses added')
  })
}

module.exports = { pool }