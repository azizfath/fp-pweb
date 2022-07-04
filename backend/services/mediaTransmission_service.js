const db = require('./connectDB');

async function getMediaTransmission(){
    const rows = await db.query(`SELECT * FROM mediaTransmission`);
    console.log( await rows);
  
    return await rows;
  }
  
  async function getMediaTransmissionId(data){
    const rows = await db.query(`SELECT * FROM mediaTransmission WHERE id_mediaTransmission= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function addMediaTransmission(data){
    const rows = await db.query(`INSERT INTO mediaTransmission (name, distance) VALUE (?, ?)`,[data.name, data.distance]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function updateMediaTransmission(data,mediaTransmissionId){
    const rows = await db.query(`UPDATE mediaTransmission SET name=?, distance=? WHERE id_mediaTransmission=?`,[data.name, data.distance, mediaTransmissionId]);
    if(rows )
    console.log( await rows);
  
    return await rows;
  }
  
  
  async function deleteMediaTransmission(data){
    const rows = await db.query(`DELETE FROM mediaTransmission WHERE id_mediaTransmission= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  
module.exports = {
    getMediaTransmission,
    getMediaTransmissionId,
    addMediaTransmission,
    updateMediaTransmission,
    deleteMediaTransmission
}