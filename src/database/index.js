const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PW,
  database: 'mycontacts',
});

console.log('HOST: ', process.env.HOST);

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
