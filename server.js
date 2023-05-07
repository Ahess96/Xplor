require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
// Connect to the database
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure static middleware
// to serve from the production 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/recreation', require('./routes/api/recreation'))
// Recreation.gov API Route
app.get('/api/recreation/activities', async (req, res) => {
  console.log(`fetching data with query:`, req.query.search)
  const search = req.query.search
  const apikey = process.env.API_KEY;
  // Make fetch request to API
  const ROOT_URL = `https://ridb.recreation.gov/api/v1/activities`
  console.log({ROOT_URL})
  const options = {
    method: 'GET',
    headers: {
      'accept': 'application/json',  
      apikey
    }
  };
  try {
    const response = await fetch(ROOT_URL, options);
    const data = await response.json();
    if (response.ok) {
      res.json(data);
    } else {
      res.status(500).json({error: 'Error fetching search from Recreation.gov'})
    }
  } catch (error) {
    console.error('Error fetching search from Recreation.gov:', error)
    res.status(500).json({error: 'Error fetching search from Recreation.gov'})
  }
});

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
