require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { centralizedErrorHandler } = require('./middlewares/centralizedErrorHandler');
const routes = require('./routes');
const limiter = require('./middlewares/limiter');
const cors = require('./middlewares/cors');
const { PORT_DEV, MONGO_URL_DEV } = require('./utils/configuration');

const app = express();

const { NODE_ENV, PORT, MONGO_URL } = process.env;

mongoose.connect(
  NODE_ENV === 'production' ? MONGO_URL : MONGO_URL_DEV,
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use(requestLogger);

app.use(cors);
app.use(limiter);

app.use(routes);

app.use(errorLogger);

app.use(errors());

app.use(centralizedErrorHandler);

app.listen(NODE_ENV === 'production' ? PORT : PORT_DEV, () => {
  console.log(`App listening on port ${NODE_ENV === 'production' ? PORT : PORT_DEV}`);
});
