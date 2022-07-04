const express = require("express");
var multer  = require('multer')
const app = express();

const port = 3000;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+'-'+file.originalname)
    }
})
var upload = multer({ storage: storage })

// app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));
app.use(express.json());

const aboutMeViewRouter = require("./routes/aboutMeViewSetting_route");
const homeViewRouter = require("./routes/homeViewSetting_route");
const contactRouter = require("./routes/contacts_route");
const mediaTransmissionRouter = require("./routes/mediaTransmission_route");
const productsRouter = require("./routes/products_route");
const taskRouter = require("./routes/tasks_route");
const teamRouter = require("./routes/team_route");
const loginRouter = require("./routes/login_router") 
const promotionRouter = require("./routes/promotion_router")

app.use("/products", productsRouter)
app.use("/aboutMeView", aboutMeViewRouter)
app.use("/contact", contactRouter)
app.use("/homeView", homeViewRouter)
app.use("/mediaTransmission", mediaTransmissionRouter)
app.use("/task", taskRouter)
app.use("/team", teamRouter)
app.use("/login",loginRouter)
app.use("/promotion", promotionRouter)

app.post('/test-page',upload.single('image'), function(req, res, next) {
    console.log(req.body)
    console.log(JSON.stringify(req.file))
    if (req.file == undefined){
        console.log('gambar tidak ada')
    }

    
    // console.log(req.file.path);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});