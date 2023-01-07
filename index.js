require('dotenv').config();
require('./src/config/mongodb')

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const { getSneakersData } = require('./src/helper');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.listen(
    port,
    () => {
      console.log(`Server is running on  ${port}`)
      getSneakersData()
    },
  );