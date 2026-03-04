import express from 'express';
import { PORT } from './config/env.js';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

// /api/v1/auth --- appended before defined routes from authRouter
// similar for others



const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);


// path and callback function in 
app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracker API!');
});



// listening port
app.listen(PORT, () => {
  console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});


export default app;
