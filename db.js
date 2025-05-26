const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: process.env.PG_PASSWORD || "your_pass", // replace with your actual password or use an environment variable
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;