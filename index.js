const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database');
const Incident = require('./models/Incident');
const incidentRoutes = require('./routes/incidentRoutes');
require('dotenv').config();

// Create app
const app = express();
const port = process.env.PORT || 3000;

// Setup middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('json spaces', 2);

// API routes
app.use('/incidents', incidentRoutes);

// Home page
app.get('/', (req, res) => {
  res.json({
    name: 'Incident Log API',
    endpoints: {
      get_all: 'GET /incidents',
      get_one: 'GET /incidents/:id',
      create: 'POST /incidents',
      delete: 'DELETE /incidents/:id'
    }
  });
});

// Start server
async function startApp() {
  try {
    await db.sync();
    console.log('Database connected');
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log('Server error:', err);
  }
}

startApp();