require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', require('./routes'));
app.get('/health', (_, res) => res.json({ status: 'ok' }));

connectDb().then(() => {
  app.listen(process.env.PORT || 5000, () => console.log('API running'));
});
