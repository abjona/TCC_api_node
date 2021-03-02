const express = require('express');
const routes = express.Router();
const validation = require('./functions/Validation');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const UserController = require('./controllers/UserController');
const RatingController = require('./controllers/RatingController');
const ClassificationController = require('./controllers/ClassificationSingularityController');
const StatisticController = require('./controllers/StatisticController');
const User = require('./models/User');

routes.get('/',(req, res)=>{
    res.json({msg: 'OK'});
});

routes.post('/finger/rating/:id', 
    validation.verifyToken,
    upload.array('fingers', 10),
    RatingController.store
);

routes.get('/finger/ratings/:id',
    validation.verifyToken,
    RatingController.getRating
);

routes.get('/finger/statistic/:id',
    validation.verifyToken,
    StatisticController.getStatic
)

routes.delete('/finger/rating/:id',
    validation.verifyToken,
    RatingController.delRating
);

routes.post('/finger/login',    
    UserController.login
);

routes.post('/finger/create',
    UserController.store
);

routes.post('/finger/rating/generatePdf',
    validation.verifyToken,
    RatingController.generatePdf
);

routes.post('/finger/loginAdmin',
    UserController.loginAdmin
);

routes.post('/finger/classification/character',
    validation.verifyToken,
    ClassificationController.store
);

routes.delete('/finger/classification/character/:id',
    validation.verifyToken,
    ClassificationController.del
);

routes.get('/finger/classification/characters',
    validation.verifyToken,
    ClassificationController.getCharacters
)

module.exports = routes;