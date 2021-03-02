const cors = require('cors');
const express = require('express');
const path = require('path');
const routes = require('./routes');
const moongose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const openApi = require('./swagger.json');
const app = express();
moongose.connect(`${process.env.URL_MOONGO}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..', 'uploads')));

app.use('/docs', swaggerUI.serve, swaggerUI.setup(openApi));
app.use(routes);
app.listen(process.env.PORT);

