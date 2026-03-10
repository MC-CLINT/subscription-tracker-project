import { Router } from 'express';
import authorize from '../middleware/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res)=> res.send("GET all subscriptions"));

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res)=> res.send("UPDATE subscription details"));

subscriptionRouter.delete('/:id', (req, res)=> res.send("DELETE subscription"));

subscriptionRouter.put('/:id/cancel', (req, res)=> res.send("CANCEL subscription"));

subscriptionRouter.get('/upcoming-renewals', (req, res)=> res.send("GET all upcoming renewals"));

export default subscriptionRouter;

