const db = require('./connectDB');
require('dotenv').config();

async function login(){
    const rows = await db.query(`SELECT * FROM admin`);
    console.log( await rows);
  
    return await rows;
}
  
  
module.exports = {
  login
}