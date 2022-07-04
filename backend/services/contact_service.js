const db = require('./connectDB');

async function getContact(){
    const rows = await db.query(`SELECT * FROM contact`);
    console.log( await rows);
  
    return await rows;
  }
  
  async function getContactId(data){
    const rows = await db.query(`SELECT * FROM contact WHERE id_contact= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function addContact(data){
    const rows = await db.query(`INSERT INTO contact (email, telepon, address) VALUE (?, ?, ?)`,[data.email, data.telepon, data.address]);
    console.log( await rows);
    return await rows;
  }
  
  async function updateContact(data,contactId){
    const rows = await db.query(`UPDATE contact SET email=?, telepon=?, address=? WHERE id_contact= ?`,[data.email, data.telepon, data.address, contactId]);
    if(rows )
    console.log( await rows);
  
    return await rows;
  }
  
  
  async function deleteContact(data){
    const rows = await db.query(`DELETE FROM contact WHERE id_contact= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  
module.exports = {
    getContact,
    getContactId,
    addContact,
    updateContact,
    deleteContact
}