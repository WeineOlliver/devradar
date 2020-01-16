const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes.js');
const { user, password } = require('./cred');

mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster-weine-ighrr.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
