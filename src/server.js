const cors = require('cors');
const express = require('express');
const path = require('path');
const routes = require('./routes');
const moongose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const openApi = require('./swagger.json');
const app = express();
moongose.connect('mongodb+srv://ramses:88812271jona@cluster0-kfag5.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.options("*", cors());
app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..', 'uploads')));

app.use('/docs', swaggerUI.serve, swaggerUI.setup(openApi));
app.use(routes);
app.listen(3333);

