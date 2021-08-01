const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./controllers');
const response = require('./helpers/http');
const { messages } = require('./helpers/constants');
require('dotenv').config();

const app = express();
// TODO: specify allowed origins
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(router);

// handle 404 routes
app.use((_req, res) => {
  response.notFound(res, messages.general.notFound);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
