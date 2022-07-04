const db = require('./connectDB');

async function getPromotion(){
    const rows = await db.query(`SELECT * FROM promotion`);
    console.log( await rows);
  
    return await rows;
  }
  
  async function getPromotionId(data){
    const rows = await db.query(`SELECT * FROM task WHERE id_content= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function addPromotion(data){
    const rows = await db.query(`INSERT INTO promotion (path) VALUE (?)`,[data.path]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function updatePromotion(data, promotionId){
    const rows = await db.query(`UPDATE promotion SET path=? WHERE id_content= ?`,[data.path, promotionId]);
    if(rows )
    console.log( await rows);
  
    return await rows;
  }
  
  
  async function deletePromotion(data){
    const rows = await db.query(`DELETE FROM promotion WHERE id_content= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  
module.exports = {
    getPromotion,
    getPromotionId,
    addPromotion,
    updatePromotion,
    deletePromotion
}