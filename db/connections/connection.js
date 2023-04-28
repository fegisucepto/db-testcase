"use strict"

const { Pool } = require("pg")

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db-backend',
    password: 'seginimcity',
    port: 5432,
    connectionTimeoutMillis: 2000,
    idleTimeoutMillis: 3000,
    max: 20
})

// pool.query('SELECT NOW()', (err, res) => {
//         console.log(err, res)
//         pool.end()
    //   })

module.exports = pool