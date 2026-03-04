import express from 'express';
import {PORT} from './config/env.js';


const app = express();


// path and callback function in 
app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracker API!');
});



// listening port
app.listen(PORT, () => {
  console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});


export default app;
