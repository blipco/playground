/* eslint no-console: "off" */
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();



app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/swings', (req, res)=>{
    axios({
    headers: {
      },
    method: 'GET',
    url: `localhost:3000`
})
  .then( response=>{
    res.send(response.data)
  })
  .catch( function(error){
      console.log('error2: ', error)
  })}
)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
