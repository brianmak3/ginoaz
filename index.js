require('dotenv').config();
require('./src/config/mongodb')

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const { getSneakersData } = require('./src/helper');
const Sneaker = require('./src/models/sneakers');

const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.get('/sneakers', async (req, res) => {
  try {
    const sneakers = await Sneaker.find();
    res.json(sneakers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sneakers' });
  }
});


app.get('/sneakers/:id', async (req, res) => {
  try {
    const sneaker = await Sneaker.findById(req.params.id);
    if (!sneaker) {
      return res.status(404).json({ error: 'Sneaker not found' });
    }
    res.json(sneaker);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sneaker' });
  }
});

app.get('/sneakers/brand/:brand', async (req, res) => {
  try {
    const brand = req.params.brand;
    const sneakers = await Sneaker.find({ brand });
    res.json(sneakers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sneakers' });
  }
});

app.get('/sneakers/colorway/:colorway', async (req, res) => {
  try {
    const colorway = req.params.colorway;
    const sneakers = await Sneaker.find({ colorway });
    res.json(sneakers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sneakers' });
  }
});

app.get('/sneakers/release-date/:date', async (req, res) => {
  try {
    const date = req.params.date;
    const sneakers = await Sneaker.find({ releaseDate: date });
    res.json(sneakers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sneakers' });
  }
});





app.listen(
    port,
    () => {
      console.log(`Server is running on  ${port}`)
      getSneakersData()
    },
  );