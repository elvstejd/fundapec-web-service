const { Pool } = require('pg');
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "fundapec",
  password: "password",
  port: 5432,
});

/**
 * Query the database using the pool
 * @param {*} query 
 * @param {*} params 
 * 
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(query, params) {
  const { rows, fields } = await pool.query(query, params);

  return rows;
}

module.exports = {
  query
}