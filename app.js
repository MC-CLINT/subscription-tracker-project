import express from 'express';
import { PORT } from './config/env.js';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import arcjetMiddleware from './middleware/arcjet.middleware.js';

// /api/v1/auth --- appended before defined routes from authRouter
// similar for others



const app = express();

// this is a custom middleware that handle json in requests
app.use(express.json());

// this helps us to process form data sent via HTML forms in a simple format.
app.use(express.urlencoded({ extended: true }));

// reads cookies in incoming cookies and stores them for future use
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', arcjetMiddleware, userRouter);
app.use('/api/v1/subscriptions', arcjetMiddleware, subscriptionRouter);



app.use(errorMiddleware)

app.use(arcjetMiddleware)


// path and callback function in 
app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracker API!');
});



// listening port
app.listen(PORT, async () => {
  console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);

  await connectToDatabase();
});


export default app;
