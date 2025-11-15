import express from 'express';
import {
  subscribeNewsletter,
  unsubscribeNewsletter,
  getAllSubscribers
} from '../controllers/newsletterController.js';
import { validateNewsletter } from '../middleware/validators.js';

const router = express.Router();

// Public routes
router.post('/subscribe', validateNewsletter, subscribeNewsletter);
router.post('/unsubscribe', validateNewsletter, unsubscribeNewsletter);

// Admin routes (in production, add authentication middleware)
router.get('/', getAllSubscribers);

export default router;
