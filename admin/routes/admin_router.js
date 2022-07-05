var express = require('express');
const axios = require('axios')
require('dotenv').config()
const multer = require('multer');
var router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+'-'+file.originalname);
    }
});

var upload = multer({ storage: storage })
// about us setting
router.get('/AboutMeView', checkAuth,(req, res, next) => {
    axios.get('https://api.fiberku.site/aboutMeView').then((result) => {
        res.render('pages/admin/aboutMe', {
            data: result.data
        });
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });

    // await res.render('pages/admin/aboutMe', {
    //     data: result.data
    // });
})

router.get('/delete/AboutMeView/:id', checkAuth, (req, res, next) => {
        // console.log(req.params.id)
    axios.delete(`https://api.fiberku.site/aboutMeView/${req.params.id}`).then((result) => {
        console.log(result);
        res.redirect('/admin/AboutMeView');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/add/AboutMeView/', checkAuth, (req, res, next) => {
    console.log(req.body)
    axios.post(`https://api.fiberku.site/aboutMeView`, req.body).then((result) => {
        console.log(result);
        res.redirect('/admin/AboutMeView');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/update/AboutMeView/', checkAuth, (req, res, next) => {
    console.log(req.body)
    axios.put(`https://api.fiberku.site/aboutMeView`, req.body).then((result) => {
        console.log(result);
        res.redirect('/admin/AboutMeView');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

// home view setting

router.get('/homeView', checkAuth,(req, res, next) => {
    axios.get('https://api.fiberku.site/homeView').then((result) => {
        console.log(result.data)
        res.render('pages/admin/homeView', {
            data: result.data
        });
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.get('/delete/homeView/:id', checkAuth, checkAuth, (req, res, next) => {
    // console.log(req.params.id)
    axios.delete(`https://api.fiberku.site/homeView/${req.params.id}`).then((result) => {
        console.log(result);
        res.redirect('/admin/homeView');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/add/homeView/', checkAuth, (req, res, next) => {
console.log(req.body)
axios.post(`https://api.fiberku.site/homeView`, req.body).then((result) => {
    console.log(result);
    res.redirect('/admin/homeView');
}).catch((err) => {
    console.log(err)
    res.send('error handling taruh sini')
});
})

router.post('/update/homeView/:id', checkAuth, (req, res, next) => {
console.log(req.body)
axios.put(`https://api.fiberku.site/homeView/${req.params.id}`, req.body).then((result) => {
    console.log(result);
    res.redirect('/admin/homeView');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

// contact setting

router.get('/contact', checkAuth,(req, res, next) => {
    axios.get('https://api.fiberku.site/contact').then((result) => {
        
        res.render('pages/admin/contact', {
            data: result.data
        });
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.get('/delete/contact/:id', checkAuth, (req, res, next) => {
    // console.log(req.params.id)
    axios.delete(`https://api.fiberku.site/contact/${req.params.id}`).then((result) => {
        console.log(result);
        res.redirect('/admin/contact');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/add/contact/', checkAuth, (req, res, next) => {
console.log(req.body)
axios.post(`https://api.fiberku.site/contact`, req.body).then((result) => {
    console.log(result);
    res.redirect('/admin/contact');
}).catch((err) => {
    console.log(err)
    res.send('error handling taruh sini')
});
})

router.post('/update/contact/:id', checkAuth, (req, res, next) => {
console.log(req.body)
axios.put(`https://api.fiberku.site/contact/${req.params.id}`, req.body).then((result) => {
    console.log(result);
    res.redirect('/admin/contact');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})


//  product setting
router.get('/product', checkAuth,async(req, res, next) => {
    try {
        mediaTransmission = await axios.get('https://api.fiberku.site/mediaTransmission')
        product = await axios.get('https://api.fiberku.site/products')
        res.render('pages/admin/product', {
            data: await product.data,
            dataMediaTransmission: await mediaTransmission.data 
        });
    } catch (error) {
        res.render('pages/admin/product');
    }
})

router.get('/delete/products/:id', checkAuth, (req, res, next) => {
    // console.log(req.params.id)
    axios.delete(`https://api.fiberku.site/products/${req.params.id}`).then((result) => {
        console.log(result);
        res.redirect('/admin/product');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/add/products/', checkAuth, (req, res, next) => {
console.log(req.body)
axios.post(`https://api.fiberku.site/products`, req.body).then((result) => {
    console.log(result);
    res.redirect('/admin/product');
}).catch((err) => {
    console.log(err)
    res.send('error handling taruh sini')
});
})

router.post('/update/products/:id', checkAuth, (req, res, next) => {
console.log(req.body)
axios.put(`https://api.fiberku.site/products/${req.params.id}`, req.body).then((result) => {
    console.log(result);
    res.redirect('/admin/product');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

// media transmission
router.get('mediaTransmission', checkAuth,(req, res, next) => {
    result =  axios.get('https://api.fiberku.site/promotion').then((result) => {
        res.render('pages/admin/promotion', {
            data: result.data
        });
    }).catch((err) => {
        res.render('cant connect to rest API')
    });
})

router.get('/delete/mediaTransmission/:id', checkAuth, (req, res, next) => {
    // console.log(req.params.id)
    axios.delete(`https://api.fiberku.site/mediaTransmission/${req.params.id}`).then((result) => {
        console.log(result);
        res.redirect('/admin/product');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/add/mediaTransmission/', checkAuth, (req, res, next) => {
console.log(req.body)
    axios.post(`https://api.fiberku.site/mediaTransmission`, req.body).then((result) => {
        console.log(result);
        res.redirect('/admin/product');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/update/mediaTransmission/:id', checkAuth, (req, res, next) => {
console.log(req.body)
axios.put(`https://api.fiberku.site/mediaTransmission/${req.params.id}`, req.body).then((result) => {
    console.log(result);
    res.redirect('/admin/product');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})


// team setting

router.get('/team', checkAuth, async(req, res, next) => {
    try {
        team = await axios.get('https://api.fiberku.site/team')
        task = await axios.get('https://api.fiberku.site/task')
        res.render('pages/admin/team', {
            dataTeam: await team.data,
            dataTask: await task.data
        })
    } catch (error) {
        res.send(`connect to API error : ${error}`)
    }
})

router.get('/delete/team/:id', checkAuth, (req, res, next) => {
    axios.delete(`https://api.fiberku.site/team/${req.params.id}`).then((result) => {
        console.log(result);
        res.redirect('/admin/team');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/add/team/', checkAuth, upload.single('image'), (req, res, next) => {
    if ((req.file && req.body.imgurl) == undefined || ''){
        req.body['image_url']=`${process.env.WEBSITE_URL}/assets/images/no-image.png`;
    }
    if(req.file != undefined){
        req.body['image_url']=`${process.env.WEBSITE_URL}/${req.file.path}`;
    }
    if(req.body.imgurl != '') {
        req.body['image_url']=req.body.imgurl
    }
    axios.post(`https://api.fiberku.site/team`, req.body).then((result) => {
        console.log(result);
        res.redirect('/admin/team');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/update/team/:id', checkAuth, upload.single('image'), (req, res, next) => {
    if ((req.file && req.body.imgurl) == undefined || ''){
        req.body['image_url']=`${process.env.WEBSITE_URL}/assets/images/no-image.png`;
    }
    if(req.file != undefined){
        req.body['image_url']=`${process.env.WEBSITE_URL}/${req.file.path}`;
    }
    if(req.body.imgurl != '') {
        req.body['image_url']=req.body.imgurl
    }
    axios.put(`https://api.fiberku.site/team/${req.params.id}`, req.body).then((result) => {
    console.log(result);
    res.redirect('/admin/team');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.get('/delete/task/:id', checkAuth, (req, res, next) => {
    axios.delete(`https://api.fiberku.site/task/${req.params.id}`).then((result) => {
        console.log(result);
        res.redirect('/admin/team');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/add/task/', checkAuth, (req, res, next) => {
    console.log(req.body)
    axios.post(`https://api.fiberku.site/task`, req.body).then((result) => {
        console.log(result);
        res.redirect('/admin/team');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/update/task/:id', checkAuth, (req, res, next) => {
console.log(req.body)
axios.put(`https://api.fiberku.site/task/${req.params.id}`, req.body).then((result) => {
    console.log(result);
    res.redirect('/admin/team');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

// promotion

router.get('/promotion', checkAuth,(req, res, next) => {
    axios.get('https://api.fiberku.site/promotion').then((result) => {
        res.render('pages/admin/promotion', {
            datPromotion: result.data
        });
    }).catch((err) => {
        
    });
})

router.post('/add/promotion/', checkAuth, upload.single('image'), (req, res, next) => {
    if ((req.file && req.body.imageurl) == undefined || ''){
        req.body['path']=`${process.env.WEBSITE_URL}/assets/images/no-image.png`;
    }
    if(req.file != undefined){
        req.body['path']=`${process.env.WEBSITE_URL}/${req.file.path}`;
    }
    if(req.body.imageurl != '') {
        req.body['path']=req.body.imageurl
    }
    axios.post(`https://api.fiberku.site/promotion`, req.body).then((result) => {
        console.log(result);
        res.redirect('/admin/promotion');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.post('/update/promotion/:id', checkAuth, upload.single('image'), (req, res, next) => {
console.log(req.body)
if ((req.file && req.body.imageurl) == undefined || ''){
    req.body['path']=`${process.env.WEBSITE_URL}/assets/images/no-image.png`;
}
if(req.file != undefined){
    req.body['path']=`${process.env.WEBSITE_URL}/${req.file.path}`;
}
if(req.body.imageurl != '') {
    req.body['path']=req.body.imageurl
}
console.log(req.body)
axios.put(`https://api.fiberku.site/promotion/${req.params.id}`, req.body).then((result) => {
    console.log(result.data);
    res.redirect('/admin/promotion');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

router.get('/delete/promotion/:id', checkAuth, (req, res, next) => {
    axios.delete(`https://api.fiberku.site/promotion/${req.params.id}`).then((result) => {
        // console.log(result);
        res.redirect('/admin/promotion');
    }).catch((err) => {
        console.log(err)
        res.send('error handling taruh sini')
    });
})

module.exports = router;