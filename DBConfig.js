import pg from 'pg';

const { Pool } = pg;

const itemsPool = new Pool({
  connectionString: process.env.DBConfigLink,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default itemsPool;
