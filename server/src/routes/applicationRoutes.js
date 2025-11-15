import express from 'express';
import {
  createApplication,
  getApplicationById,
  getAllApplications,
  updateApplicationStatus
} from '../controllers/applicationController.js';
import { validateApplication } from '../middleware/validators.js';

const router = express.Router();

// Public routes
router.post('/', validateApplication, createApplication);
router.get('/:id', getApplicationById);

// Admin routes (in production, add authentication middleware)
router.get('/', getAllApplications);
router.patch('/:id/status', updateApplicationStatus);

export default router;
