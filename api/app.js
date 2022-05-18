const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./models');
const app = express();
const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY
const https = require('https');
var cors = require('cors');
app.use(cors());


// this lets us parse 'application/json' content in http requests
app.use(express.json());

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers'));

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false });

app.get('/search/keyword/:keyword', (req, res) => {

  https.get('https://api.themoviedb.org/3/search/movie?'+'api_key='+API_KEY+'&language=en-US&page=1&include_adult=false&query='+req.params.keyword, (response) => {
    let data = '';

    // A chunk of data has been received.
    response.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    response.on('end', () => {
      //console.log(data)
      res.send(JSON.parse(data).results);
    });
  }).on("error", (err) => { console.log("Error: " + err.message); });
})


app.get('/search/movie/:movieid', (req, res) => {

  https.get('https://api.themoviedb.org/3/movie/'+req.params.movieid+'/watch/providers?api_key='+API_KEY, (response) => {
    let data = '';

    // A chunk of data has been received.
    response.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    response.on('end', () => {
      res.send(JSON.parse(data).results?.US.flatrate || []);
    });
  }).on("error", (err) => { console.log("Error: " + err.message); });
})

app.get('/search/tv/keyword/:keyword', (req, res) => {

  https.get('https://api.themoviedb.org/3/search/tv?'+'api_key='+API_KEY+'&language=en-US&page=1&include_adult=false&query='+req.params.keyword, (response) => {
    let data = '';

    // A chunk of data has been received.
    response.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    response.on('end', () => {
      //console.log(data)
      res.send(JSON.parse(data).results);
      //console.log(data).tvid
    });
  }).on("error", (err) => { console.log("Error: " + err.message); });
})

app.get('/search/tv/:tvid', (req, res) => {

  https.get('https://api.themoviedb.org/3/tv/'+req.params.tvid+'/watch/providers?api_key='+API_KEY, (response) => {
    let data = '';

    // A chunk of data has been received.
    response.on('data', (chunk) => {
      data += chunk;
    });

    

    // The whole response has been received. Print out the result.
    response.on('end', () => {
      console.log(data)
      res.send(JSON.parse(data).results?.US.flatrate || []);

    });
  }).on("error", (err) => { console.log("Error: " + err.message); });
})


// start up the server
if(PORT) {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} else {
  console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====")
}
