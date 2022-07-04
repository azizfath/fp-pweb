const db = require('./connectDB');
require('dotenv').config();

async function getAboutMeViewSetting(){
    const rows = await db.query(`SELECT * FROM aboutMeViewSetting`);
    console.log( await rows);
  
    return await rows;
}

async function getAboutMeViewSettingId(data){
  const rows = await db.query(`SELECT * FROM aboutMeViewSetting WHERE id_content= ?`,[data]);
  console.log( await rows);

  return await rows;
}

async function addAboutMeViewSetting(data){
  // if(imagePath == undefined){
  //   if (data.image_url == undefined) {
  //     imageurl = null;
  //   }else {
  //     imageurl = data.image_url;
  //   }
  // }else {
  //   imageurl = `${process.env.REST_API_URL}/${imagePath}`;
  // }
  const rows = await db.query(`INSERT INTO aboutMeViewSetting (visi, misi, sejarah) VALUE (?, ?, ?)`,[data.visi, data.misi, data.sejarah]);
  console.log( await rows);

  return await rows;
}

async function updateAboutMeViewSetting(data){
  // if(imagePath == undefined){
  //   if (data.image_url == undefined) {
  //     imageurl = null;
  //   }else {
  //     imageurl = data.image_url;
  //   }
  // }else {
  //   imageurl = `${process.env.REST_API_URL}/${imagePath}`;
  // }
  const rows = await db.query(`UPDATE aboutMeViewSetting SET visi=?, misi=?, sejarah=? WHERE id_content= ?`,[data.visi, data.misi, data.sejarah, idAboutMeView]);
  if(rows )
  console.log( await rows);

  return await rows;
}


async function deleteAboutMeViewSetting(data){
  const rows = await db.query(`DELETE FROM aboutMeViewSetting WHERE id_content= ?`,[data]);
  console.log( await rows);

  return await rows;
}
  
  
module.exports = {
  getAboutMeViewSetting,
  getAboutMeViewSettingId,
  addAboutMeViewSetting,
  updateAboutMeViewSetting,
  deleteAboutMeViewSetting
}