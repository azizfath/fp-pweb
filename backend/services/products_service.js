const db = require('./connectDB');


async function getProducts(){
  const rows = await db.query(`SELECT product.id_product, product.bandwidth, product.price, product.description, mediaTransmission.name, mediaTransmission.distance FROM product INNER JOIN mediaTransmission ON product.id_mediaTransmission = mediaTransmission.id_mediaTransmission`);
  console.log( await rows);

  return await rows;
}

async function getProductsId(data){
  const rows = await db.query(`SELECT * FROM product WHERE id_product= ?`,[data.id_product]);
  console.log( await rows);

  return await rows;
}

async function addProducts(data){
  const rows = await db.query(`INSERT INTO product (id_mediaTransmission, bandwidth, price, description) VALUE (?, ?, ?, ?)`,[data.id_mediaTransmission, data.bandwidth, data.price, data.description]);
  console.log( await rows);

  return await rows;
}

async function updateProducts(data,productId){
  const rows = await db.query(`UPDATE product SET id_mediaTransmission=?, bandwidth=?, price=?, description=? WHERE id_product= ?`,[data.id_mediaTransmission, data.bandwidth, data.price, data.description, productId]);
  if(rows )
  console.log( await rows);

  return await rows;
}


async function deleteProducts(data){
  const rows = await db.query(`DELETE FROM product WHERE id_product= ?`,[data]);
  console.log( await rows);

  return await rows;
}

module.exports = {
  getProducts,
  getProductsId,
  addProducts,
  updateProducts,
  deleteProducts
}