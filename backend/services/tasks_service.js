const db = require('./connectDB');

async function getTask(){
    const rows = await db.query(`SELECT * FROM task`);
    console.log( await rows);
  
    return await rows;
  }
  
  async function getTaskId(data){
    const rows = await db.query(`SELECT * FROM task WHERE id_task= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function addTask(data){
    const rows = await db.query(`INSERT INTO task (name, description) VALUE (?, ?)`,[data.name, data.description]);
    console.log( await rows);
  
    return await rows;
  }
  
  async function updateTask(data,taskId){
    const rows = await db.query(`UPDATE task SET name=?, description=? WHERE id_task= ?`,[data.name, data.description, taskId]);
    if(rows )
    console.log( await rows);
  
    return await rows;
  }
  
  
  async function deleteTask(data){
    const rows = await db.query(`DELETE FROM task WHERE id_task= ?`,[data]);
    console.log( await rows);
  
    return await rows;
  }
  
  
module.exports = {
    getTask,
    getTaskId,
    addTask,
    updateTask,
    deleteTask
}