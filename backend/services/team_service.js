const db = require('./connectDB');

async function getTeam(){
    const rows = await db.query(`SELECT team.nim, team.name, team.photo, team.id_task,task.name AS task, task.description FROM team INNER JOIN task ON team.id_task = task.id_task;`);
    console.log( await rows);
  
    return await rows;
  }
  
  async function getTeamId(data){
    const rows = await db.query(`SELECT * FROM team WHERE nim= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function addTeam(data){
    if(imagePath == undefined){
      if (data.image_url == undefined) {
        imageurl = null;
      }else {
        imageurl = data.image_url;
      }
    }else {
      imageurl = `${process.env.REST_API_URL}/${imagePath}`;
    }
    const rows = await db.query(`INSERT INTO team (nim, name, id_task, photo) VALUE (?, ?, ?, ?)`,[data.nim, data.name, data.id_task, imageurl]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function updateTeam(data){
    if(imagePath == undefined){
      if (data.image_url == undefined) {
        imageurl = null;
      }else {
        imageurl = data.image_url;
      }
    }else {
      imageurl = `${process.env.REST_API_URL}/${imagePath}`;
    }
    const rows = await db.query(`UPDATE team SET name=?, id_task=?, photo=? WHERE nim= ?`,[data.name, data.id_task, imageurl, data.nim]);
    if(rows )
    console.log( await rows);
  
    return await rows;
  }
  
  
  async function deleteTeam(data){
    const rows = await db.query(`DELETE FROM team WHERE nim= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  
module.exports = {
    getTeam,
    getTeamId,
    addTeam,
    updateTeam,
    deleteTeam
}