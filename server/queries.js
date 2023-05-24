const POOL = require('pg').Pool

const pool = new POOL({
  user: 'me',
  host: 'localhost',
  database: 'favlinks',
  password: '54321',
  port: 5432,
})