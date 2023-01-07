const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },

)
  .then(
    () => console.log('Database connection stablished'),
    (error) => console.log(error),
  );
  